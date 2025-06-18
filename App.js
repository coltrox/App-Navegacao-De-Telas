import React, { useState, useEffect, useRef } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Drawer = createDrawerNavigator();

function DrawerRoutes({ onLogout, initialRoute }) {
  const navigationRef = useRef();

  //VAI VER A MUDANA DE TELA E VAI SALVAR A ULTIMA TELA VISITADA
  useEffect(() => {
    const unsubscribe = navigationRef.current?.addListener('state', async (e) => {
      try {
        const index = e.data.state.index;
        const routeName = e.data.state.routes[index].name;
        await AsyncStorage.setItem('lastRoute', routeName);
      } catch (error) {
        console.log('Erro ao salvar rota:', error);
      }
    });

    return unsubscribe;
  }, []);

  return (
     // navegação drawer, independente da navegação principal
    <NavigationContainer ref={navigationRef} independent={true}>
      <Drawer.Navigator
        initialRouteName={initialRoute}
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <View style={{ marginTop: 'auto', borderTopWidth: 1, borderColor: '#ccc' }}>
              <DrawerItem
                label="Sair"
                onPress={async () => {
                  await AsyncStorage.multiRemove(['logado', 'lastRoute']);
                  onLogout();
                }}
              />
            </View>
          </DrawerContentScrollView>
        )}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Detalhes" component={DetailsScreen} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [initialRoute, setInitialRoute] = useState('Home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginAndRoute = async () => {
      try {
        const logado = await AsyncStorage.getItem('logado');
        if (logado === 'true') {
          const lastRoute = await AsyncStorage.getItem('lastRoute');
          setInitialRoute(lastRoute || 'Home');
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      } catch (error) {
        console.log('Erro ao carregar login e rota:', error);
        setIsLogged(false);
      } finally {
        setLoading(false);
      }
    };

    checkLoginAndRoute();
  }, []);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
    setInitialRoute('Home');
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  if (!isLogged) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <DrawerRoutes onLogout={handleLogout} initialRoute={initialRoute} />;
}

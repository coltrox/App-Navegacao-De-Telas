import React, 'useState', 'useEffect' from 'react';
import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  createDrawerNavigator, 
  DrawerContentScrollView, 
  DrawerItemList, 
  DrawerItem 
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';


import LoginScreen from './src/screens/LoginScreen'; 
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const THEME = {
  BACKGROUND: '#12121F',
  CARD: '#1E1E2F',
  PRIMARY: '#3B82F6',
  TEXT_PRIMARY: '#FFFFFF',
  TEXT_SECONDARY: '#A0A0A0',
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: THEME.PRIMARY,
    background: THEME.BACKGROUND,
    card: THEME.CARD,
    text: THEME.TEXT_PRIMARY,
    border: 'transparent',
  },
};


function CustomDrawerContent(props) {
  const { onLogout } = props;
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: THEME.CARD }}>
      <DrawerItemList {...props} />
      <View style={{ borderTopWidth: 1, borderTopColor: '#3A3A4A', marginTop: 20 }}>
        <DrawerItem
          label="Sair"
          labelStyle={{ color: THEME.TEXT_SECONDARY }}
          icon={({ color, size }) => <Feather name="log-out" color={THEME.TEXT_SECONDARY} size={size} />}
          onPress={onLogout}
        />
      </View>
    </DrawerContentScrollView>
  );
}


function DrawerNavigator({ onLogout, initialRoute }) {
  return (
    <Drawer.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerStyle: { backgroundColor: THEME.CARD },
        headerTintColor: THEME.TEXT_PRIMARY,
        drawerActiveTintColor: THEME.PRIMARY,
        drawerInactiveTintColor: THEME.TEXT_SECONDARY,
        drawerLabelStyle: { marginLeft: -20, fontSize: 16 },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} onLogout={onLogout} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ 
        title: 'Últimas Notícias',
        drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} /> 
      }} />
      <Drawer.Screen name="Detalhes" component={DetailsScreen} options={{ 
        title: 'Conteúdo Exclusivo',
        drawerIcon: ({ color, size }) => <Feather name="lock" color={color} size={size} /> 
      }} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} options={{ 
        title: 'Perfil',
        drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} /> 
      }} />
    </Drawer.Navigator>
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
        }
      } catch (e) {
        console.error("Erro ao verificar o estado de login:", e);
      } finally {
        setLoading(false);
      }
    };

    checkLoginAndRoute();
  }, []);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = async () => {
    await AsyncStorage.multiRemove(['logado', 'lastRoute']);
    setIsLogged(false);
    setInitialRoute('Home');
  };

  const saveLastRoute = (state) => {
    if (state) {
      const routeName = state.routes[state.index].name;
      AsyncStorage.setItem('lastRoute', routeName);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: THEME.BACKGROUND }}>
        {}
      </View>
    );
  }

  return (
    <NavigationContainer theme={MyTheme} onStateChange={saveLastRoute}>
      <StatusBar barStyle="light-content" backgroundColor={THEME.CARD} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogged ? (
          <Stack.Screen name="App">
            {() => <DrawerNavigator onLogout={handleLogout} initialRoute={initialRoute} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login">
            {() => <LoginScreen onLogin={handleLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
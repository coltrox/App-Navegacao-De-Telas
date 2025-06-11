import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// 👉 Custom drawer com botão de logout no final
function CustomDrawerContent(props) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('logado');
    props.navigation.replace('Login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ marginTop: 'auto', borderTopWidth: 1, borderColor: '#ccc' }}>
        <DrawerItem label="Sair" onPress={handleLogout} />
      </View>
    </DrawerContentScrollView>
  );
}

// Menu lateral com navegação
function DrawerRoutes() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Detalhes" component={DetailsScreen} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

// Navegação principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Drawer" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

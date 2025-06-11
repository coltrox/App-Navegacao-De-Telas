import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LogoutScreen({ navigation }) {
  useEffect(() => {
    const logout = async () => {
      await AsyncStorage.removeItem('logado');
      navigation.replace('Login');
    };
    logout();
  }, []);

  return null;
}

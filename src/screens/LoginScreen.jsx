import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';


const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const verificarLogin = async () => {
      const logado = await AsyncStorage.getItem('logado');
      if (logado === 'true') {
        navigation.replace('Drawer');
      }
    };
    verificarLogin();
  }, []);

  const handleLogin = async () => {
    if (login === 'admin' && senha === '1234') {
      await AsyncStorage.setItem('logado', 'true');
      navigation.replace('Drawer');
    } else {
      Alert.alert('Erro', 'Login ou senha incorretos!');
    }
  };

  return (
    <LinearGradient colors={['#a18cd1', '#fbc2eb']} style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>

      <TextInput
        placeholder="Login"
        placeholderTextColor="#666"
        value={login}
        onChangeText={setLogin}
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#666"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 40,
  },
  input: {
    width: windowWidth * 0.75,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
    elevation: 2,
  },
  button: {
    width: windowWidth * 0.5,
    height: 50,
    backgroundColor: '#6a11cb',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

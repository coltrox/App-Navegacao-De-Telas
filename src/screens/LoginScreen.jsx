import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Switch,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons'; // Importando ícones

const THEME = {
  BACKGROUND: '#12121F',
  CARD: '#1E1E2F',
  PRIMARY: '#3B82F6',
  TEXT_PRIMARY: '#FFFFFF',
  TEXT_SECONDARY: '#A0A0A0',
  INPUT: '#2A2A3D',
};

export default function LoginScreen({ onLogin }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [stayLogged, setStayLogged] = useState(false);

  const handleLogin = async () => {
    if (login.toLowerCase() === 'admin' && senha === '1234') {
      if (stayLogged) {
        await AsyncStorage.setItem('logado', 'true');
        await AsyncStorage.setItem('lastRoute', 'Home');
      } else {
        await AsyncStorage.multiRemove(['logado', 'lastRoute']);
      }
      onLogin();
    } else {
      Alert.alert('Erro', 'Login ou senha incorretos!');
    }
  };

  return (
    <View style={styles.container}>
      <Feather name="shield" size={64} color={THEME.PRIMARY} />
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subtitle}>Acesse para continuar</Text>

      <TextInput
        placeholder="Login"
        placeholderTextColor={THEME.TEXT_SECONDARY}
        value={login}
        onChangeText={setLogin}
        style={styles.input}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor={THEME.TEXT_SECONDARY}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.rememberContainer}>
        <Text style={styles.rememberText}>Continuar conectado</Text>
        <Switch
          value={stayLogged}
          onValueChange={setStayLogged}
          trackColor={{ false: '#767577', true: THEME.PRIMARY }}
          thumbColor={stayLogged ? '#f4f3f4' : '#f4f3f4'}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.BACKGROUND,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: THEME.TEXT_PRIMARY,
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: THEME.TEXT_SECONDARY,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: THEME.INPUT,
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
    color: THEME.TEXT_PRIMARY,
    borderWidth: 1,
    borderColor: '#3A3A4A',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
    justifyContent: 'space-between',
  },
  rememberText: {
    color: THEME.TEXT_SECONDARY,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: THEME.PRIMARY,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  buttonText: {
    color: THEME.TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '600',
  },
});
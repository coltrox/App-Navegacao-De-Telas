import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const THEME = {
  BACKGROUND: '#12121F',
  PRIMARY: '#3B82F6',
  TEXT_PRIMARY: '#FFFFFF',
  TEXT_SECONDARY: '#A0A0A0',
};

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Feather name="lock" size={48} color={THEME.TEXT_SECONDARY} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver Conteúdo Exclusivo</Text>
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
  button: {
    width: '100%',
    height: 50,
    backgroundColor: THEME.PRIMARY,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: THEME.TEXT_PRIMARY,
    fontSize: 16,
    fontWeight: '600',
  },
});
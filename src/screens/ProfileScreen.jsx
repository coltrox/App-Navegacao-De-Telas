import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const SECTIONS = [
  {
    title: 'Informações Pessoais',
    data: ['Nome: Pedro Coltro', 'Usuário: admin', 'E-mail: admin@email.com'],
  },
  {
    title: 'Preferências',
    data: ['Continuar conectado: Ativado', 'Tema: Claro', 'Notificações: Ativadas'],
  },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Perfil!</Text>
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.section}>{title}</Text>
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  list: {
    width: '90%',
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 15,
    marginBottom: 5,
  },
  item: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 5,
    elevation: 1,
  },
});

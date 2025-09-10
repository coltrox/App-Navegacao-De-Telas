import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DATA = [
  { id: '1', title: 'Notícia 1: Atualização do app' },
  { id: '2', title: 'Notícia 2: Novo recurso lançado' },
  { id: '3', title: 'Notícia 3: Versão estável disponível' },
  { id: '4', title: 'Notícia 4: Melhorias de desempenho' },
];

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Home!</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#444',
  },
});

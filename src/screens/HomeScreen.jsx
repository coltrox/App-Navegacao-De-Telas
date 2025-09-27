import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DATA = [
  { id: '1', title: 'News', subtitle: 'Atalho para FlatList' },
  { id: '2', title: 'News', subtitle: 'Atalho para Itens' },
  { id: '3', title: 'News', subtitle: 'Atalho para Lingos' },
];

const THEME = {
  BACKGROUND: '#12121F',
  CARD: '#1E1E2F',
  TEXT_PRIMARY: '#FFFFFF',
  TEXT_SECONDARY: '#A0A0A0',
};

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* O título "Últimas Notícias" geralmente é configurado no header da navegação */}
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
    backgroundColor: THEME.BACKGROUND,
    paddingTop: 10,
  },
  list: {
    paddingHorizontal: 16,
  },
  item: {
    backgroundColor: THEME.CARD,
    padding: 20,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.TEXT_PRIMARY,
  },
  itemSubtitle: {
    fontSize: 14,
    color: THEME.TEXT_SECONDARY,
    marginTop: 4,
  },
});
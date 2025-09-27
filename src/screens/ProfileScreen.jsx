import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Switch, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const THEME = {
  BACKGROUND: '#12121F',
  CARD: '#1E1E2F',
  PRIMARY: '#3B82F6',
  TEXT_PRIMARY: '#FFFFFF',
  TEXT_SECONDARY: '#A0A0A0',
  INPUT: '#2A2A3D',
};

const SECTIONS = [
  {
    title: 'SectionList',
    data: [
      { id: '1', label: 'Nome', value: 'Pedro', icon: 'user' },
      { id: '2', label: 'Email', value: 'admin@email.com', icon: 'mail' },
    ],
  },
  {
    title: 'Preferências',
    data: [
      { id: '3', label: 'Nome', value: 'Pedro', icon: 'user' },
      { id: '4', label: 'Email', value: 'admin@email.com', icon: 'mail' },
      { id: '5', label: 'Tema', value: 'Escuro', icon: 'moon', type: 'toggle' },
      { id: '6', label: 'Notificações', value: 'Ativadas', icon: 'bell', type: 'toggle' },
    ],
  },
];

export default function ProfileScreen() {
  const [themeDark, setThemeDark] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Feather name={item.icon} size={20} color={THEME.TEXT_SECONDARY} style={styles.icon} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemLabel}>{item.label}</Text>
        <Text style={styles.itemValue}>{item.value}</Text>
      </View>
      {item.type === 'toggle' && (
        <Switch
          value={item.label === 'Tema' ? themeDark : notifications}
          onValueChange={item.label === 'Tema' ? setThemeDark : setNotifications}
          trackColor={{ false: '#767577', true: THEME.PRIMARY }}
          thumbColor={'#f4f3f4'}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.section}>{title}</Text>
        )}
        ListFooterComponent={
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continuar Conectado</Text>
            </TouchableOpacity>
        }
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  section: {
    fontSize: 14,
    fontWeight: 'bold',
    color: THEME.TEXT_SECONDARY,
    marginTop: 25,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  itemContainer: {
    backgroundColor: THEME.CARD,
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 15,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemLabel: {
    fontSize: 16,
    color: THEME.TEXT_PRIMARY,
  },
  itemValue: {
      fontSize: 14,
      color: THEME.TEXT_SECONDARY,
  },
  button: {
      backgroundColor: THEME.CARD,
      borderRadius: 12,
      padding: 15,
      marginTop: 20,
      alignItems: 'center'
  },
  buttonText: {
      color: THEME.PRIMARY,
      fontSize: 16,
      fontWeight: 'bold',
  }
});
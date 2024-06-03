// TelaPerfil.js

import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function TelaPerfil({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Meu Perfil</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditarPerfil')}>
            <Text style={styles.editButton}>Editar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          {/* Adicione aqui as habilidades do usuário */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tempo</Text>
          {/* Adicione aqui informações sobre o tempo de experiência */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Currículo</Text>
          {/* Adicione aqui o currículo do usuário */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Localização</Text>
          {/* Adicione aqui informações sobre a localização do usuário */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fotos</Text>
          {/* Adicione aqui as fotos do usuário */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimas Publicações</Text>
          {/* Adicione aqui as últimas publicações do usuário */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  editButton: {
    fontSize: 16,
    color: '#ffffff',
  },
  section: {
    width: '100%',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
});

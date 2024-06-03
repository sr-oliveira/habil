import React from 'react';
import { View, ImageBackground, StyleSheet, Text, ScrollView } from 'react-native';

export default function TelaPainel() {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Painel</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimas Contratações</Text>
          {/* Adicione aqui as informações das últimas contratações */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saldo</Text>
          {/* Adicione aqui as informações de saldo */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Análise de Gráficos</Text>
          {/* Adicione aqui os gráficos de análise */}
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
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

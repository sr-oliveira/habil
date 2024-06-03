import React from 'react';
import { View, ImageBackground, StyleSheet, Text, ScrollView } from 'react-native';

export default function TelaMensagens() {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Mensagens</Text>
        <ScrollView contentContainerStyle={styles.conversasContainer}>
          <View style={styles.conversa}>
            <Text style={styles.nomeUsuario}>Nome do Usuário</Text>
            <Text style={styles.mensagem}>Mensagem recebida ou enviada</Text>
          </View>
          <View style={styles.conversa}>
            <Text style={styles.nomeUsuario}>Nome do Usuário</Text>
            <Text style={styles.mensagem}>Mensagem recebida ou enviada</Text>
          </View>
          {/* Adicione mais conversas conforme necessário */}
        </ScrollView>
      </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  conversasContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  conversa: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    paddingVertical: 10,
  },
  nomeUsuario: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  mensagem: {
    fontSize: 16,
    color: '#ffffff',
  },
});

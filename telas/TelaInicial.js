import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao Hábil</Text>
        <View style={styles.opcoesContainer}>
          <TouchableOpacity style={styles.opcao} onPress={() => navigation.navigate('Habilidades')}>
            <Image source={require('../assets/habilidades.png')} style={styles.icone} />
            <Text style={styles.buttonText}>Ver Habilidades</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcao} onPress={() => navigation.navigate('Perfil')}>
            <Image source={require('../assets/perfil-de-usuario.png')} style={styles.icone} />
            <Text style={styles.buttonText}>Meu Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcao} onPress={() => navigation.navigate('CompraCreditos')}>
            <Image source={require('../assets/troca-de-dinheiro.png')} style={styles.icone} />
            <Text style={styles.buttonText}>Comprar Créditos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcao} onPress={() => navigation.navigate('Painel')}>
            <Image source={require('../assets/casa.png')} style={styles.icone} />
            <Text style={styles.buttonText}>Painel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcao} onPress={() => navigation.navigate('Mensagens')}>
            <Image source={require('../assets/mensagem.png')} style={styles.icone} />
            <Text style={styles.buttonText}>Mensagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcao} onPress={() => navigation.navigate('Anunciar')}>
            <Image source={require('../assets/marketing-movel.png')} style={styles.icone} />
            <Text style={styles.buttonText}>Anunciar</Text>
          </TouchableOpacity>
        </View>
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
  opcoesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  opcao: {
    width: '48%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icone: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

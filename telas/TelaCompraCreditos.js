import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function TelaCompraCreditos({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Compra de Créditos</Text>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Escolha a quantidade de créditos que deseja comprar:</Text>
          <View style={styles.creditOptions}>
            <TouchableOpacity style={styles.creditButton} onPress={() => {}}>
              <Text style={styles.creditText}>10 Créditos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.creditButton} onPress={() => {}}>
              <Text style={styles.creditText}>20 Créditos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.creditButton} onPress={() => {}}>
              <Text style={styles.creditText}>50 Créditos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button mode="contained" onPress={() => navigation.navigate('Inicial')} style={styles.button}>
          Voltar para Início
        </Button>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  creditOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  creditButton: {
    width: '30%',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 10,
  },
  creditText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  button: {
    marginVertical: 10,
    width: '80%',
    backgroundColor: '#27ae60',
    borderRadius: 10,
  },
});

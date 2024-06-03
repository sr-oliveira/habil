import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Animated } from 'react-native';
import CartaoHabilidade from '../componentes/CartaoHabilidade';
import { getHabilidades } from '../servicos/ServicoHabilidade';

export default function TelaHabilidades({ navigation }) {
  const [habilidades, setHabilidades] = useState([]);
  const fadeIn = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    getHabilidades().then(setHabilidades);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.header, { opacity: fadeIn }]}>
        <Text style={styles.headerText}>Habilidades Disponíveis</Text>
      </Animated.View>
      {habilidades.map((habilidade, index) => (
        <CartaoHabilidade key={index} habilidade={habilidade} onContratar={() => navigation.navigate('Contratacao', { habilidade })} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    padding: 10,
    backgroundColor: '#6200ea',
    marginBottom: 10,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

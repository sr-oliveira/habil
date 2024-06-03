import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Animated, ImageBackground, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CartaoHabilidade from '../componentes/CartaoHabilidade';
import { getHabilidades } from '../servicos/ServicoHabilidade';

export default function TelaHabilidades({ navigation }) {
  const [habilidades, setHabilidades] = useState([]);
  const fadeIn = new Animated.Value(0);
  const [filtroLocalizacao, setFiltroLocalizacao] = useState('');
  const [filtroPreco, setFiltroPreco] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroBusca, setFiltroBusca] = useState('');

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    getHabilidades().then(setHabilidades);
  }, []);

  const filtrarHabilidades = () => {
    // Implemente a lógica para filtrar habilidades com base nos filtros selecionados
  };

  const renderItem = ({ item }) => (
    <CartaoHabilidade habilidade={item} onContratar={() => navigation.navigate('Contratacao', { habilidade: item })} />
  );

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.barraBusca}>
          <Ionicons name="search" size={24} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Buscar"
            value={filtroBusca}
            onChangeText={setFiltroBusca}
            placeholderTextColor="#ffffff"
          />
        </View>
        <View style={styles.filtroContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Filtrar</Text>
          </View>
          <View style={styles.filtroInputContainer}>
            <Ionicons name="location" size={24} color="white" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Localização"
              value={filtroLocalizacao}
              onChangeText={setFiltroLocalizacao}
              placeholderTextColor="#ffffff"
            />
          </View>
          <View style={styles.filtroInputContainer}>
            <Ionicons name="pricetag" size={24} color="white" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Preço"
              value={filtroPreco}
              onChangeText={setFiltroPreco}
              placeholderTextColor="#ffffff"
            />
          </View>
          <View style={styles.filtroInputContainer}>
            <Ionicons name="menu" size={24} color="white" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Categoria"
              value={filtroCategoria}
              onChangeText={setFiltroCategoria}
              placeholderTextColor="#ffffff"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={filtrarHabilidades}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={habilidades}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
        />
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
    padding: 10,
  },
  barraBusca: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    color: '#ffffff',
  },
  header: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 10,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  filtroContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  filtroInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#009387',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    flex: 1,
  },
});


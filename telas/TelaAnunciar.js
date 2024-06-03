import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function TelaAnunciar() {
  const [imagem, setImagem] = useState(null);

  const selecionarImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImagem(result.uri);
    }
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Anunciar</Text>
        <TouchableOpacity onPress={selecionarImagem}>
          <View style={styles.imageContainer}>
            {imagem ? <Image source={{ uri: imagem }} style={styles.image} /> : <Text style={styles.imageText}>Selecionar Foto</Text>}
          </View>
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Título do Anúncio"
            placeholderTextColor="#ffffff"
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição do Anúncio"
            placeholderTextColor="#ffffff"
            multiline={true}
            numberOfLines={4}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Publicar Anúncio</Text>
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
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  imageText: {
    color: '#ffffff',
    fontSize: 16,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#ffffff',
  },
  button: {
    width: '100%',
    backgroundColor: '#009387',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

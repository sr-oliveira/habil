import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../telas/TelaInicial';
import TelaHabilidades from '../telas/TelaHabilidades';
import TelaPerfil from '../telas/TelaPerfil';
import TelaCompraCreditos from '../telas/TelaCompraCreditos';
import TelaContratacao from '../telas/TelaContratacao';
import TelaAprovacao from '../telas/TelaAprovacao';
import Cabecalho from '../componentes/Cabecalho';
import TelaPainel from '../telas/TelaPainel';
import TelaMensagens from '../telas/TelaMensagens';
import TelaAnunciar from '../telas/TelaAnunciar';

const Stack = createStackNavigator();

export default function NavegadorApp() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        header: (props) => <Cabecalho {...props} navigation={navigation} route={route} />
      })}
    >
      <Stack.Screen name="Hábil" component={TelaInicial} />
      <Stack.Screen name="Habilidades" component={TelaHabilidades} />
      <Stack.Screen name="Perfil" component={TelaPerfil} />
      <Stack.Screen name="CompraCreditos" component={TelaCompraCreditos} />
      <Stack.Screen name="Contratacao" component={TelaContratacao} />
      <Stack.Screen name="Aprovacao" component={TelaAprovacao} />
      <Stack.Screen name="Painel" component={TelaPainel} />
      <Stack.Screen name="Mensagens" component={TelaMensagens} />
      <Stack.Screen name="Anunciar" component={TelaAnunciar} />
    </Stack.Navigator>
  );
}

import React from 'react';
import { Appbar } from 'react-native-paper';

export default function Cabecalho({ navigation, previous, route }) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
}

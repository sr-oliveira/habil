import React from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

export default function CartaoHabilidade({ habilidade, onContratar }) {
  return (
    <Card style={{ marginVertical: 10 }}>
      <Card.Content>
        <Title>{habilidade.titulo}</Title>
        <Paragraph>{habilidade.descricao}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
      <Card.Actions>
        <Button onPress={onContratar}>Contratar</Button>
      </Card.Actions>
    </Card>
  );
}

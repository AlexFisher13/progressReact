import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Image style={styles.image} source={{ uri: route.params.img }} />
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text>{route.params.exercise}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  }
});

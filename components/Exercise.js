import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, FlatList, Pressable} from 'react-native';
import { gStyle } from '../styles/style';

export default function Exercise({ route }) {

  return (
    <View style={gStyle.body}>
      <Text style={gStyle.exerciseTitle}>{route.params.name}</Text>
        <View style={gStyle.box}>
          <Text>Тут форма для заполнения</Text>
          <Pressable style={gStyle.button2}>add set</Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

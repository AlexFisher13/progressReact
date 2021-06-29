import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';
import { gStyle } from '../styles/style';

export default function Exercise({ route }) {

  return (
    <View>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <FlatList 
            data={route.params.sets} 
            renderItem={ ({ item }) => (
              <View style={gStyle.box}>
                <Text>Weight: {item.weight}</Text>
                <Text>Reps: {item.reps}</Text>
              </View>
            )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});

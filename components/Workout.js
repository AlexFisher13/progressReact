import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';
import { gStyle } from '../styles/style';

export default function Workout({ route, navigation}) {

  return (
    <View>
      <Text style={gStyle.title}>Дата: {route.params.date.split('T')[0]}</Text>
      <FlatList 
            data={route.params.exercise} 
            renderItem={ ({ item }) => (
              <TouchableOpacity style={gStyle.box} onPress={() => navigation.navigate('Exercise', item)}>
                <Text style={gStyle.title}>{item.name}</Text>
                <FlatList 
                  data={item.sets} 
                  renderItem={ ({ item }) => (
                    <View style={gStyle.box}>
                      <Text>Weight: {item.weight}</Text>
                      <Text>Reps: {item.reps}</Text>
                    </View>
                  )}
                />
              </TouchableOpacity>
              
            )}
            keyExtractor={ item => item.name } />
    </View>
  );
}

const styles = StyleSheet.create({

});

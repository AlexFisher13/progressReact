import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, FlatList, Pressable} from 'react-native';
import { gStyle } from '../styles/style';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Workout({ route, navigation}) {

  return (
    <View style={gStyle.body}>
      <Text style={gStyle.dateTitle} >{route.params.date.split('T')[0]}</Text>
      <FlatList 
            data={route.params.exercise} 
            renderItem={ ({ item }) => (
              <TouchableOpacity style={gStyle.box} onPress={() => navigation.navigate('Exercise', item)}>
                <Text style={gStyle.subtitle}>{item.name}</Text>
                <FlatList 
                  data={item.sets} 
                  renderItem={ ({ item }) => (
                    <View>
                      <Text style={{color: 'silver', fontSize: 16}}>{item.weight}
                          <Text style={{fontSize: 12}}>kg  ✕  </Text>
                      {item.reps}</Text>
                    </View>
                  )}
                />
                  <FontAwesome5 name="plus-circle" size={24} style={gStyle.vectorButton} />
              {/*<AntDesign style={gStyle.vectorButton} name="plussquareo" size={24} />*/}
              </TouchableOpacity>
              
            )}
            keyExtractor={ item => item.name } />
    </View>
  );
}

const styles = StyleSheet.create({

});

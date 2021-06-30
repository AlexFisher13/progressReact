import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {

  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getWorkouts();
  }, [])

  const getWorkouts = () => {
      let URL = 'https://progres.herokuapp.com/all';
      fetch(URL)
        .then(res => res.json())
        .then(res => {
          setWorkouts(res)
      })
  }  


  const addWorkout = () => {
    let workout = {
      id: Math.random().toString(36).substr(2, 11) + Math.random().toString(36).substr(2, 11),
      date: new Date(),
      exercise: []
    };
    let URL = 'https://progres.herokuapp.com/addworkout';
    console.log(JSON.stringify(workout));
    fetch(URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(workout)
      })
      getWorkouts();
  }

  return (
    <View>
      <Button title='Добавить тренировку' onPress={addWorkout}/>
      <FlatList  data={workouts.reverse()} keyExtractor={workouts.id} renderItem={({ item }) => (
        <TouchableOpacity 
            style={gStyle.box} 
            onPress={() => navigation.navigate('Workout', item)}>
          <Text style={gStyle.title}>Тренировка {item.date.split('T')[0]}</Text>
          <FlatList 
            data={item.exercise} 
            renderItem={ ({ item }) => (<Text>{item.name}</Text>) }
            keyExtractor={ item => item.id }
            />
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({

});

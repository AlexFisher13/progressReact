import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { gStyle } from '../styles/style';
import Form from './Form';

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

  

  const addWorkout = (workout) => {
    setNews((list) => {
      workout.key = Math.random().toString();
      return [
        workout,
        ...list
      ]
    });
  }

  return (
    <View>
      {/* <Modal>
        <View>
          <Text style={styles.title}>Добавить тренировку</Text>
          <Form addWorkout={addWorkout}/>
        </View>
      </Modal> */}
      <FlatList  data={workouts} keyExtractor={workouts.id} renderItem={({ item }) => (
        <TouchableOpacity style={gStyle.box} onPress={() => navigation.navigate('Workout', item)}>
          <Text style={gStyle.title}>Тренировка {item.date.split('T')[0]}</Text>
          <FlatList 
            data={item.exercise} 
            renderItem={ ({ item }) => (<Text>{item.name}</Text>) }
            keyExtractor={ item => item.name } />
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({

});

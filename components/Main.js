import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Modal from 'react-native-modal';
import { gStyle } from '../styles/style';
import Form from './Form';
export default function Main({ navigation }) {
  const [news, setNews] = useState([
    { name: 'Тренировка 1', key: '1', exercise: 'присед'},
    { name: 'Тренировка 2', key: '2', exercise: 'подтягивания'},
    { name: 'Тренировка 3', key: '3', exercise: 'отжимания'}
  ]);

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
    <View style={gStyle.main}>
      <Modal>
        <View>
          <Text style={styles.title}>Добавить тренировку</Text>
          <Form addWorkout={addWorkout}/>
        </View>
      </Modal>
      <FlatList data={news} renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
          <Text style={styles.title} >{item.name}</Text>
          <Text style={styles.anons} >{item.exercise}</Text>
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconClose: {
    textAlign: 'center'
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15
  },
  image: {
    width: '100%',
    height: 200
  },
  header: {
    marginBottom: 30
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  }
});

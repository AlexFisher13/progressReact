import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { gStyle } from '../styles/style';
import Form from './Form';

export default function Main({ navigation }) {
  const [workouts, setNews] = useState([
    {
        "id": "60d2f81dce197a21bcdfcae6",
        "date": "2021-06-29T11:45:36.806",
        "exercise": [
            {
                "name": "pullups",
                "sets": [
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 500.0,
                        "reps": 500
                    }
                ]
            },
            {
                "name": "pushups",
                "sets": [
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    }
                ]
            },
            {
                "name": "abs",
                "sets": [
                    {
                        "weight": 0.0,
                        "reps": 100
                    },
                    {
                        "weight": 0.0,
                        "reps": 100
                    },
                    {
                        "weight": 0.0,
                        "reps": 100
                    }
                ]
            }
        ]
    },
    {
        "id": "60d2f8f3ee11763cb7716e05",
        "date": "2021-06-29T11:45:36.808",
        "exercise": [
            {
                "name": "pullups",
                "sets": [
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    }
                ]
            },
            {
                "name": "pushups",
                "sets": [
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    }
                ]
            }
        ]
    },
    {
        "id": "60d2f95aa69b234702361a0c",
        "date": "2021-06-29T11:45:36.809",
        "exercise": [
            {
                "name": "pullups",
                "sets": [
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    }
                ]
            },
            {
                "name": "pushups",
                "sets": [
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    }
                ]
            }
        ]
    },
    {
        "id": "60d4739b6a902e098ce2695f",
        "date": "2021-06-29T11:45:36.809",
        "exercise": [
            {
                "name": "pullups",
                "sets": [
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    },
                    {
                        "weight": 5.0,
                        "reps": 4
                    }
                ]
            }
        ]
    },
    {
        "id": "60d479da6a902e098ce26960",
        "date": "2021-06-29T11:45:36.81",
        "exercise": [
            {
                "name": "prisedania",
                "sets": [
                    {
                        "weight": 3.0,
                        "reps": 15
                    },
                    {
                        "weight": 1.0,
                        "reps": 1
                    }
                ]
            },
            {
                "name": "run",
                "sets": [
                    {
                        "weight": 1.0,
                        "reps": 1
                    }
                ]
            },
            {
                "name": "run",
                "sets": [
                    {
                        "weight": 1.0,
                        "reps": 1
                    }
                ]
            }
        ]
    }
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

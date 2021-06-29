import React from 'react';
import Main from './components/Main';
import Exercise from './components/Exercise';
import Workout from './components/Workout';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={
                    {
                        title: 'Дневник тренировок',
                        headerStyle: { backgroundColor: '#eb5d3d', height: 110 },
                        headerTitleStyle: { fontWeight: '600', textAlign: 'center', color: 'white', fontSize: 28, fontFamily: 'mt-bold' }
                    }
                }
            />
            <Stack.Screen
                name="Workout"
                component={Workout}
                options={
                    {
                        title: 'Тренировка',
                        headerStyle: { backgroundColor: '#eb5d3d', height: 110 },
                        headerTitleStyle: { fontWeight: '600', textAlign: 'center', color: 'white', fontSize: 28, fontFamily: 'mt-bold' }
                    }
                }
            />
            <Stack.Screen
                name="Exercise"
                component={Exercise}
                options={
                    {
                        title: 'Упражнение',
                        headerStyle: { backgroundColor: '#eb5d3d', height: 110 },
                        headerTitleStyle: { fontWeight: '600', textAlign: 'center', color: 'white', fontSize: 28, fontFamily: 'mt-bold' }
                    }
                }
            />
        </Stack.Navigator>
    </NavigationContainer>
}
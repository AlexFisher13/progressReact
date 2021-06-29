import React from 'react';
import Main from './components/Main';
import FullInfo from './components/FullInfo';

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
                        title: 'Дневник прогресса',
                        headerStyle: { backgroundColor: '#eb5d3d', height: 110 },
                        headerTitleStyle: { fontWeight: '600', textAlign: 'center', color: 'white', fontSize: 28, fontFamily: 'mt-bold' }
                    }
                }
            />
            <Stack.Screen
                name="FullInfo"
                component={FullInfo}
                options={{ title: 'Тренировка' }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}
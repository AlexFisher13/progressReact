import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form({addWorkout}) {
  return (
    <View>
        <Formik initialValues={{name: '', exercise: ''}} onSubmit={(values, action) => {
            addWorkout(values);
            action.resetForm;
        }}> 
            {(props) => (
                <View>
                    <TextInput 
                        style={styles.input}
                        value={props.values.name} 
                        placeholder='Введите название' 
                        onChangeText={props.handleChange('name')}/>
                    <TextInput 
                        style={styles.input} 
                        value={props.values.exercise}
                        multiline 
                        placeholder='Введите упраженение' 
                        onChangeText={props.handleChange('exercise')}/>
                    <Button
                        title='Добавить' 
                        onPress={props.handleSubmit} />
                </View>
            )}
        </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        margin: 5,
        padding: 15, 
        borderColor: 'silver',
        borderRadius: 5
    }
});

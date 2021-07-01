import { StyleSheet } from 'react-native';

export const gStyle = StyleSheet.create({
    box: {
        width: '100%',
        textAlign: 'center', 
        backgroundColor: '#4d4d4d',
        marginTop: 10,
        borderRadius: 10,
        padding: 7
    },
    title: {
        fontFamily: 'mt-light',
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 4
    },
    subtitle: {
        fontFamily: 'mt-bold',
        color: 'black',
        // color: '#e0e0e0',
        fontSize: 18
    },
    body : {
        backgroundColor: '#1e1e1e',
        flex: 1,
        padding: 10
    },
    button: {
        fontFamily: 'mt-light',
        color: '#fda75b',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#2a2a2a',
        width: 300,
        margin: 'auto'
    }
})
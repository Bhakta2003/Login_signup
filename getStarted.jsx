import { StyleSheet, ImageBackground, StatusBar, Text, Image, View, Button } from 'react-native';
import React from 'react';


const GetStarted = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.there}>Hey There.</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        title='Login'
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title='Signup'
                        onPress={() => navigation.navigate('Signup')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:20,
        paddingTop:50,
    },
    hey: {
        fontSize: 45,
        fontWeight: 'bold',
        marginBottom: 11,
        alignSelf:'flex-start',
    },
    there: {
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 11,
        alignSelf:'flex-start',

    },
    buttonContainer: {
        flexDirection: 'column',
        width: '90%',
    },
    button:{
        marginBottom:12,
    }
});

export default GetStarted;
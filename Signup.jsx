import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/signup.png")} style={styles.img} />
      </View>
      <View style={styles.inputContainer}>
        <Feather name={'user'} size={24} color={"black"} />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder='Email Address'
        />
      </View>
      <View style={styles.inputContainer}>
        <Feather name={'key'} size={24} color={"black"} />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder='Password'
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <Feather name={'thumbs-up'} size={24} color={"black"} />
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder='Confirm Password'
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => { }}>
          <Text style={styles.btnText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Go back</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1DACA',
    flex: 1,
  },
  img: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
    width: '90%',
    borderRadius: 25,
    backgroundColor: '#F5F1E7',
    marginTop: 22,
    height: 45,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: '#E1DACA',
    flexDirection: 'row',
    borderRadius: 25,
    marginHorizontal: 20,
    height: 80,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 40,
    marginVertical: 10,
    backgroundColor: '#A18167',
    height: 45,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#F2E9DE'
  },
  buttonContainer: {
    marginTop: 110,
  },
  footText:{
    alignSelf:'center',
  },
  smallFootText:{
    textDecorationLine:'underline',
  }
});
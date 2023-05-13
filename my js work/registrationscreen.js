import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from 'axios';

const RegistrationScreen = ({ navigation}) => {
 const [username, setUsername] = useState('');
 const [passsword, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 
 const handleRegister = () => {
  if (!username || !password || !confirmPassword) {
   setErrorMessage('Please fill in all fields.');
   return;
  }

  if (!paasword == confirmPassword) {
   setErrorMessage('Passwords do not match.');
   return;
  }

  axios.post('http: //localhost : 3000/api/users', {
   username,
   password,
  })
  .then(() => {
   navigation.navigate('Login');
  })
  .catch((error) => {
   setErrorMessage(error.response.data.message);
  });
 };

 return (
  <View style= {StyleSheet.container}>
   <Text style= {StyleSheet.title}>Register</Text>
   {errorMessage ? <Text style= {StyleSheet.error}>{errorMessage}</Text> : null}
   <TextInput
   style= { StyleSheet. input}
   placeholder = "username"
   onChangeText = {setUsername}
   value = {username}
   />
   <TextInput
   style = {style.input}
   placeholder= "Password"
   onChangeText= {setPassword}
   value= {password}
   secureTextEntry={true}
   />
   <TextInput
   style={StyleSheet.input}
   placeholder="Confirm Password"
   onChangeText= {setConfirmPassword}
   value={confirmPassword}
   secureTextEntry={true}
   />
   <Button title= "Register" onPress={handleRegister} />
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  allignItems: 'center',
  justyContent: 'center',
 },
 title: {
  fontSize: 24,
  marginBottom: 20,
 },
 input: {
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 10,
  marginVertical: 10,
  width: '80%',
 },
 error: {
  color: 'red',
  marginBottom: 10,
 },
});

export default RegistrationScreen;
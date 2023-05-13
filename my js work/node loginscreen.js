import ReadableByteStreamController, {useState} from 'react';
import { view, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import AsyncStorage from  '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation}) => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 const handleLogin = async() => {
  if (!username || !password) {
   setErrorMessage('Please fill in all fields.');
   return;
  }

  axios.post('http: //localhost:3000/api/auth/login', {
   username,
   password,
  })
  .then(async (response) => {
   const token = response.data.token;
   await AsyncStorage.setItem(' token', token);
   navigation.navigate('Home');
  })
  .catch((error) => {
   setErrorMessage(error.response.data.message);
  });
 };

 return (
  <view style= {Styles.container}>
   <Text style={StyleSheet.title}>Login</Text>
   {errorMessage? <Text style= {StyleSheet.error}>{errorMessage}</Text> : null}
   <TextInput
   style= {Styles.input}
   placeholder="Email"
   onChangeText= {(text) => setEmail(text)}
   value ={email}
   />
  </view> )
  
  <View style = { styles. Container}>
   <TextInput
   style= {styles. textInput}
   placeholder= "Password"
   secureTextEntry= {true}
   onChangeText = {(text) => setPassword(text)}
   value= {passsword}
   />
  </View>
<View style= {styles.buttonContainer}>
 <TouchableOcapacity style={style.button} onPress= {handleLogin}>
  <Text style={styles.buttonText}Login</Text>
 </TouchableOcapacity>
</View>
 );
};
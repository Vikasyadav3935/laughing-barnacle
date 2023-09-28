import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
  } from 'react-native';
  import React, {useContext, useEffect, useState} from 'react';
 
  
  const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
   
    
  
  
    return (
      <View  style={{flex:1}}>
        <View style={{flex:1,alignItems:'center',marginTop:50}}>
        <Text style={{fontSize: 30, alignSelf: 'center',color:'black' }}>
          SITEMATE
        </Text>
        <Text style={{color:'black'}}>
            Simplify Construction
        </Text>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          style={{
            width: '90%',
            borderWidth: 1,
            borderRadius: 10,
            height: 50,
            marginTop: 30,
            alignSelf: 'center',
            paddingLeft: 20,
          }}
        />
  
        <TextInput
          placeholder="Enter Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          style={{
            width: '90%',
            borderWidth: 1,
            borderRadius: 10,
            height: 50,
            marginTop: 30,
            alignSelf: 'center',
            paddingLeft: 20,
          }}
        />
  
        <TouchableOpacity
          style={{
            width: '90%',
            backgroundColor: '#355666',
            alignSelf: 'center',
            marginTop: 30,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => {
            if (email !== '' && password !== '') {
             navigation.navigate('Incpection')
            } else {
              Alert.alert('Please enter all details');
            }
          }}>
          <Text style={{fontSize: 20, color: 'wheat'}}>Login</Text>
        </TouchableOpacity>
  

      <View style={{marginTop:200}}>
       <Text style={{fontSize:30}}>
        Powered by congisite
       </Text>
       
       </View>
        </View>
      </View>
    );
  };
  
  export default Login;
  
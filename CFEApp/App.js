import React from 'react';

import {StyleSheet, View,Switch, Text,StatusBar,Image,TextInput} from 'react-native';

import picLogo from './assets/appLogo.jpeg';

class  CFEApp extends React.Component {


  render(){
    return (
      <View style={styles.container}>
        <StatusBar hidden= {true} />
        <Image source={picLogo} />
        <Text>correo electronico </Text>
        <TextInput defaultValue="correo"/>
        <Text>contraseña</Text>
        <TextInput defaultValue="pwd"/>
        <Text>¿No tienes cuenta?</Text>
        <Text>Registrate aquí</Text>
        
        
      </View>
    );
  }
}


const styles= StyleSheet.create({
  container:{
    flex:1,//flex of 1 means the whole screen
    flexDirection: 'column',
    justifyContent:'space-around',//'space-around'
    alignItems:'flex-start',
    backgroundColor: '#DDD'
  },
  defaultText:{
    fontSize:22,
    padding:10,
    margin: 5,
    color: 'black'
  },
  selectedText:{
    //alignSelf: 'flex-start'
    backgroundColor: 'yellow',
    color: 'forestgreen',
    fontWeight:'bold',
  }
});

export default CFEApp;
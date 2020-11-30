import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import Header from '../components/mainPage/Header';
import Footer from '../components/mainPage/Footer';
import Colors from '../constants/Colors';

/* const REDUCER_UPDATE = 'UPDATE';

const formReducer = (state, action) => {
  if(action.type === 'UPDATE') {

  } 
}; */

const AuthScreen = props => {

  const [loginData, setLoginData] = useState({});
/* 
  useReducer(formReducer, { inputValues: {
      login: loginData.login,
      password: loginData.password,
    },
    formIsValid: false
  });
     */

  const loginInputHandler = (login) => {
      setLoginData({login: login})
      console.log(loginData)
  }

  const passwordInputHandler = (password) => {
      setLoginData({password: password}) 
      console.log(loginData)
  }

  return (
    <View style={styles.screen}>
        <Header logoText='Tallam' text="информационно-аналитическая платформа" />
        <View style={styles.main}>
            <View style={styles.whiteContainer}>
                <TextInput
                    style={styles.inputField} 
                    placeholder="Логин" 
                    onChangeText={loginInputHandler} 
                    value={loginData.login}
                    keyboardType='email-address'
                    returnKeyType='next'
                    onEndEditing={()=>{console.log('end')}}
                  />
                <TextInput 
                    style={styles.inputField} 
                    placeholder="Пароль" 
                    onChangeText={passwordInputHandler} 
                    value={loginData.password}
                    keyboardType='default'
                    returnKeyType='done'
                  />
                <TouchableOpacity style={styles.logInButton} 
                    onPress={() => {
                      props.navigation.navigate({routeName: 'Projects'});
                    }}>
                    <Text style={styles.logInButtonText}>Войти</Text>
                </TouchableOpacity>
            </View> 
        </View>
        <Footer text={['Техническая поддержка: \nauth-support@tallam.ru', 
        'График работы: \nв будние дни с 9:00 до 17:00']} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: '100%'
  },

  main: {
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightblue
  },

  whiteContainer: {
    backgroundColor: '#FFF',
    padding: 30,
    width: '90%'
  },

  inputField: {
    padding: 20,
    width: '100%',
    borderColor: Colors.darkblue,
    borderWidth: 1,
    marginBottom: 16,
    fontSize: 20, 
    backgroundColor: '#FFF'
  },

  logInButton: {
    padding: 20,
    width: '100%',
    fontWeight: 'bold',
    backgroundColor: Colors.darkblue,
    textAlign: 'center'
  },

  logInButtonText: {
    color: '#FFF', 
    textAlign: 'center',
    fontSize: 20
  }
});

export default withNavigation(AuthScreen);
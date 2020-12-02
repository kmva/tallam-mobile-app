import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/mainPage/Header';
import Footer from '../components/mainPage/Footer';
import Colors from '../constants/Colors';

import { signin, setSigninData }  from '../store/actions/auth';

const AuthScreen = props => {

  const dispatch = useDispatch();

  let loginData = useSelector(state => state.auth.email);
  let passwordData = useSelector(state => state.auth.password);

  const loginInputHandler = value => {
      dispatch(setSigninData('email', value));
  }

  const passwordInputHandler = value => {
      dispatch(setSigninData('password', value));
  }

  const authHandler = (loginData, passwordData) => {
    dispatch(signin(loginData, passwordData));
  }

  return (
    <View style={styles.screen}>
        <Header logoText='Tallam' text="информационно-аналитическая платформа" />
        <View style={styles.main}>
            <View style={styles.whiteContainer}>
                <TextInput
                    style={styles.inputField} 
                    placeholder="Логин" 
                    onChangeText={value => loginInputHandler(value)} 
                    /* value={loginData} */
                    keyboardType='email-address'
                    returnKeyType='next'
                    /* onEndEditing={()=>{console.log('end')}} */
                  />
                <TextInput 
                    style={styles.inputField} 
                    placeholder="Пароль" 
                    onChangeText={value => passwordInputHandler(value)} 
                   /*  value={passwordData} */
                    keyboardType='default'
                    returnKeyType='done'
                  />
                <TouchableOpacity style={styles.logInButton} 
                    onPress={authHandler}>
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
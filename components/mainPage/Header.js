import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';
import Colors from '../../constants/Colors'


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.logo}>{props.logoText}</Text>
            <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center', 
    paddingBottom: 20,
    paddingHorizontal: 16
  },

  logo: {
    color: Colors.darkblue,
    fontSize: 40,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    borderBottomColor: Colors.darkblue,
    borderBottomWidth: 2,
    marginBottom: 8
  }
});

export default Header
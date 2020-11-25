import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors'


const Footer = props => {
    return (
        <View style={styles.footer}>
            <View style={styles.support}>
                <Text style={styles.text}>{props.text[0]}</Text>
                <Text style={styles.text}>{props.text[1]}</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => {}}>
                <Text style={styles.info}>?</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: Colors.lightblue,
    flexShrink: 0,
    paddingHorizontal: 26,
    paddingVertical: 13
  },

  info: {
    fontSize: 32,
    color: '#FFF'
  },

  support: {
    color: Colors.grey,
    marginRight: 25
  },

  text: {
    marginBottom: 10
  }
});

export default Footer
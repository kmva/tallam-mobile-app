import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Colors from '../constants/Colors'


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.text}</Text>
            {/* <Button title='Выйти' style={styles.menu} color='#FFF' /> */}
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: Colors.darkblue,
    alignItems: 'center', 
    paddingVertical: 20,
    paddingHorizontal: 16,
    color: '#FFF'
  },

  text: {
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    borderBottomColor: Colors.darkblue,
    borderBottomWidth: 2,
    color: '#FFF'
  },

  menu: {
    fontSize: 14 
  }
});

export default Header
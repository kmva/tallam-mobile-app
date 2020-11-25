import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors'


const Footer = props => {
    return (
        <View style={styles.footer}>
            <View>
              <TouchableOpacity>
                <Text style={styles.support}>
                  Связаться с техподдержкой
                </Text>
              </TouchableOpacity>
            </View>
            <View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
  footer: {
    width: '100%',
    backgroundColor: '#FFF',
    flexShrink: 0,
    paddingHorizontal: 32,
    paddingVertical: 20,
    paddingBottom: Platform.OS === 'android' ? 100 : 20,
    /* borderTopColor: Colors.darkblue,
    borderTopWidth: 1 */
  },

  support: {
    color: Colors.darkblue,
    fontWeight: 'bold'
  }
});

export default Footer
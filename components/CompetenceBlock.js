import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import RatingItem from './RatingItem';

const CompetenceBlock = props => {

    return (
        <View style={styles.block}>
          <Text style={styles.heading}>{props.heading}</Text>
            {props.items.map((item, index) => {
              return <RatingItem text={item.text} key={index} criterion={item.criterion}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({

  block:{
    width: '100%'
  },

  heading: {
    color: Colors.brightblue,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    width: '100%',
    marginBottom: 16,
    paddingVertical: 10,
    paddingHorizontal: 18
  },
});

export default CompetenceBlock;
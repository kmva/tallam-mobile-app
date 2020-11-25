import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import Slider from '@react-native-community/slider';
import { changeRatingData }  from '../store/actions/ratingData';
//import store and set sliderValue store.sliderValue

import { useSelector, useDispatch } from 'react-redux';

const RatingItem = props => {
    const points = useSelector(state => state.ratingData[props.criterion]);
    const dispatch = useDispatch();

    const changeRatingValueHandler = value => {
      dispatch(changeRatingData(props.criterion, value));
    }
    
    return (
        <View style={styles.item}>
            <Text style={styles.text, props.style}>{props.text}</Text>
              <Text style={styles.pointsText}>Количество баллов: <Text style={styles.points}>{points}</Text>
              </Text>
            <Slider
              value={points}
              style={{width: 200, height: 40, alignSelf: 'center'}}
              minimumValue={0}
              maximumValue={2}
              step={1}
              minimumTrackTintColor={Colors.darkblue}
              maximumTrackTintColor="#000000"
              onValueChange={value => changeRatingValueHandler(value)}
          />
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 26,
    paddingHorizontal: 16
  },

  text: {
      width: '100%',
      fontSize: 16,
      marginBottom: 16,
  },

  pointsText: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 6,
    color: Colors.darkblue
  },

  points: {
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default RatingItem;
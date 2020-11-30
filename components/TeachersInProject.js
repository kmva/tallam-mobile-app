import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import Colors from '../constants/Colors';

const TeachersInProject = props => {
  
  const renderGridItem = itemData => {
    return (
      <View style={styles.teacherItem}>
        <View style={styles.teacherTextBlock}>
          <Text style={styles.teacherName}>{itemData.item.name}</Text>
          <Text>{itemData.item.position}</Text>
        </View>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate({
                routeName: 'Rate', 
                params: {
                    teacherId: itemData.item.id
                }
            });
        }} >
          <View style={styles.teacherButton}><Text style={styles.teacherButtonText}>Оценить</Text></View>
        </TouchableOpacity>
      </View>
    )
  };

  return(
    <View>
      <FlatList 
        style={styles.flatList}
        data={props.data} 
        renderItem={renderGridItem}  
        keyExtractor={item => item.id.toString()} 
      />
    </View>
  )
}
  
  const styles = StyleSheet.create({

    flatList: {
      paddingVertical: 5, 
      paddingHorizontal: 13,
      marginBottom: 100
    },

    teacherItem: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 23,
      paddingVertical: 20,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 2,
      shadowOpacity: 0.5,
      shadowColor: 'rgba(0,0,130,0.5)',
      borderRadius: 5,
      elevation: 1
    },

    teacherTextBlock: {
      marginRight: 10,
      flex: 1
    },

    teacherName: {
      color: Colors.darkblue,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },

    teacherButton:{
      backgroundColor: Colors.darkblue,
      paddingHorizontal: 16,
      paddingVertical: 11,
      fontWeight: 'bold',
    },

    teacherButtonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16
    }
  });

export default TeachersInProject;
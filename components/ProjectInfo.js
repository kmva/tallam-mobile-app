import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors'


const ProjectInfo = props => {
    return (
        <TouchableOpacity style={styles.project}onPress={props.onPress}>
            <View>
                <Text>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    project: {
        width: '100%',
        height: 150,
        marginBottom: 16,
        padding: 32,
        alignContent: 'center',
        textAlign: 'center'
    }
})

export default ProjectInfo
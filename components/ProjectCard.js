import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Colors from '../constants/Colors'


const ProjectCard = props => {
    return (
        <TouchableOpacity style={styles.project} onPress={props.onPress}>
            <View>
                <Image 
                    source={require('../assets/img/markforteacher.jpg')} 
                    style={styles.image} 
                    resizeMode="cover"
                />
                <Text style={styles.heading}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    project: {
        width: '90%',
        marginTop: 10,
        marginBottom: 30,
        alignContent: 'center',
        textAlign: 'center',
        backgroundColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        shadowColor: 'rgba(0,0,0,0.2)',
        elevation: 1
    },

    image: {
        width: '100%',
        height: 200
    },

    heading: {
        paddingVertical: 30,
        paddingHorizontal: 10,
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.pink
    }
})

export default ProjectCard
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Colors from '../constants/Colors';


const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <Header text='МБОУ средняя общеобразовательная школа № 1 с.Самашки'/>
            <View style={styles.content}>
                <Text style={styles.logo}>Tallam</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Добро пожаловать на платформу Tallam!</Text>
                    <Text style={styles.text}>Перед началом работы рекомендуем просмотреть видеоинструкцию</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                        props.navigation.navigate({routeName: 'Projects'})
                    }}>
                        <View>
                            <Text style={styles.buttonText}>Проекты</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {
                        props.navigation.navigate({routeName: 'WorkersDatabase'});
                    }}> 
                        <View>
                            <Text style={styles.buttonText}>База работников</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer />
        </View>
    );
}

HomeScreen.navigationOptions = {
    headerTitle: 'Главная'
};

const styles = StyleSheet.create({
    screen: {
        alignContent: 'center',
        width: '100%',
        backgroundColor: '#FFF',
        flex: 1
    },

    content: {
        alignItems: 'center',
        padding: 24,
        fontSize: 34,
        textAlign: 'center',
        flex: 1
    },

    logo: {
        color: Colors.darkblue,
        fontSize: 32,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        borderBottomColor: Colors.brightblue,
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 16
    },

    textContainer: {
        marginBottom: 20
    },

    text: {
        textAlign: 'center',
        marginBottom: 13,
        fontSize: 16
    },

    buttonContainer: {
        width: '100%'
    },

    button: {
        width: '100%',
        padding: 36,
        backgroundColor: Colors.darkblue,
        marginBottom: 10,
        alignItems: 'center'
    },

    buttonText: {
        color: '#FFF',
        fontSize: 20
    }
});

export default HomeScreen
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import Footer from '../components//Footer';
import ProjectCard from '../components/ProjectCard';

import Colors from '../constants/Colors';
import PROJECTS from '../data/projects';


const ProjectsScreen = props => {
    return (
        <View style={styles.screen}>
            <Header text='Проекты'/>
            <View style={styles.content}>
                <Text style={styles.heading}>Список доступных проектов</Text>
                <ScrollView style={styles.projects} contentContainerStyle={{alignItems: 'center'}}>
                    <ProjectCard onPress={() => {
                            props.navigation.navigate({
                                routeName: 'ProjectCard', 
                                params: {
                                    projectId: PROJECTS[0].id
                                }
                            });
                        }} 
                        src="'../assets/img/markforteacher.jpg'"
                        name={PROJECTS[0].name}
                        institution='{МБОУ средняя общеобразовательная школа № 1 с.Самашки}'
                    />

                    <ProjectCard onPress={() => {
                            props.navigation.navigate({
                                routeName: 'ProjectCard', 
                                params: {
                                    projectId: PROJECTS[1].id,
                                }
                            });
                        }}
                        src="'../assets/img/markforteacher.jpg'"
                        name={PROJECTS[1].name}
                        institution='{МБОУ средняя общеобразовательная школа № 1 с.Самашки}'
                    />
                </ScrollView>
            </View>
            <Footer />
        </View>
    );
}

ProjectsScreen.navigationOptions = {
    headerTitle: 'Проекты' 
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: '100%',
    /* paddingTop: 50 */
  },

  main: {
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    /* backgroundColor: Colors.lightblue */
  },

  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 30,
    paddingHorizontal: 10
  },

  heading: {
    fontSize: 26,
    color: Colors.darkblue,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },

  projects: {
      width: '100%',
  }
});

export default ProjectsScreen;
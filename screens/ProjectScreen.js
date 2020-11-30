import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components//Footer';
import TeachersInProject from '../components/TeachersInProject';
import Colors from '../constants/Colors';

import PROJECTS from '../data/projects';
import TEACHERS from '../data/teachers';


const ProjectScreen = props => {
    const prjctId = props.navigation.getParam('projectId');

    const selectedProject = PROJECTS.find(project => project.id === prjctId)
    return (
      
        <View style={styles.screen}>
            <Header text={selectedProject.name}/>
            <View style={styles.main}>
                <View style={styles.tableSection}>
                    <Text style={styles.tableHeading}>Список учителей, участвующих в&nbsp;проекте</Text>
                    <TeachersInProject data={TEACHERS} navigation={props.navigation}/>
                </View>
            </View>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: '100%'
  },

  main: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10
  },

  tableHeading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: Colors.darkblue
  }
});

export default ProjectScreen;
import React  from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'


import AuthScreen from '../screens/AuthScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ProjectScreen from '../screens/ProjectScreen';
import RateScreen from '../screens/RateScreen';

import Colors from '../constants/Colors'


const TallamNavigator = createStackNavigator(
    {
        Projects: {
            screen: ProjectsScreen,
        },
        ProjectCard: {
            screen: ProjectScreen,
            options: {
                headerTitle: 'Проект'
            }
        },
        Rate: {
            screen: RateScreen,
            options: {
                headerTitle: 'Оценить урок'
            }
        }
    },
    {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#FFF'
        },
        headerTitleStyle: {
            color: Colors.darkblue
        },
        headerRight:  () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title='Выйти' 
                        iconName='ios-log-out' 
                        onPress ={() => {console.log('log-out'); }}
                    />
                </HeaderButtons>
        )
    }
});

const AuthNavigator = createStackNavigator({
    Auth: {
        screen: AuthScreen,
        navigationOptions: {
            title: 'Авторизация',
            headerShown: false
          },
    },
});

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Tallam: TallamNavigator
});


export default createAppContainer(MainNavigator);
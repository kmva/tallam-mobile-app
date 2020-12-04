import React  from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {  HeaderButtons, Item  } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'


import AuthScreen from '../screens/AuthScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ProjectScreen from '../screens/ProjectScreen';
import RateScreen from '../screens/RateScreen';

import { logout } from '../store/actions/auth';

import Colors from '../constants/Colors'


/* const logOutHandler = () => {
    dispatch(logOut);
    console.log(props);
}
 */

const TallamNavigator = createStackNavigator(
    {
        Projects: {
            screen: ProjectsScreen,
            navigationOptions: ({ navigation }) => ({
                headerRight:  () => {
                const dispatch = useDispatch();
                return(<HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item 
                            title='Выйти' 
                            iconName='ios-log-out' 
                            onPress = { () => {
                                dispatch(logout());
                                navigation.navigate('Auth');
                            }}
                        />
                    </HeaderButtons>
                )}
            })
        },
        ProjectCard: {
            screen: ProjectScreen,
            options: {
                headerTitle: 'Проект'
            },
            navigationOptions: ({ navigation }) => ({
                headerRight:  () => {
                const dispatch = useDispatch();
                return(<HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item 
                            title='Выйти' 
                            iconName='ios-log-out' 
                            onPress = { () => {
                                dispatch(logout());
                                navigation.navigate('Auth');
                            }}
                        />
                    </HeaderButtons>
                )}
            })
        },
        Rate: {
            screen: RateScreen,
            options: {
                headerTitle: 'Оценить урок'
            }/* ,
            navigationOptions: ({ navigation }) => ({
                headerRight:  () => {
                const dispatch = useDispatch();
                return(<HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item 
                            title='Выйти' 
                            iconName='ios-log-out' 
                            onPress = { () => {
                                dispatch(logout());
                                navigation.navigate('Auth');
                            }}
                        />
                    </HeaderButtons>
                )}
            }) */
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
        
    }
});

const AuthNavigator = createStackNavigator({
    Auth: {
        screen: AuthScreen,
        navigationOptions: {
            headerShown: false
          },
    },
});

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Tallam: TallamNavigator
});


export default createAppContainer(MainNavigator);
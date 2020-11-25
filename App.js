import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import AuthScreen from './screens/AuthScreen';
import * as Font from 'expo-font';
import  { useScreens } from 'react-native-screens';
import { createStore, combineReducers}  from 'redux';
import { Provider } from 'react-redux';

import ratingDataReducer from './store/reducers/ratingData';
import teachersReducer from './store/reducers/teachers';
import authReducer from './store/reducers/auth';

import MainNavigator from './navigation/TallamNavigator'
import ProjectsScreen from './screens/ProjectsScreen';
/* useScreens(); */

const rootReducer = combineReducers({
  auth: authReducer,
  ratingData: ratingDataReducer,
  teacher: teachersReducer,
});

const store = createStore(rootReducer);

export default function App() {
 /*  let [authorized, setAuthorized] = useState(false) */

  /* let screen = <AuthScreen />
  if(authorized) {screen = <ProjectsScreen />} */

  return (<Provider store={store}>
    <MainNavigator />
  </Provider>);
}

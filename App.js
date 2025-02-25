import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Font from 'expo-font';
import { createStore, combineReducers, applyMiddleware}  from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import ratingDataReducer from './store/reducers/ratingData';
import teachersReducer from './store/reducers/teachers';
import authReducer from './store/reducers/auth';

import MainNavigator from './navigation/TallamNavigator';
/* useScreens(); */

const rootReducer = combineReducers({
  auth: authReducer,
  ratingData: ratingDataReducer,
  teacher: teachersReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (<Provider store={store}>
    <MainNavigator />
  </Provider>);
}

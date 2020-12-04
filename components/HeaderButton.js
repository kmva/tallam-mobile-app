/* import React from 'react';
import {Alert} from 'react-native'
import { HeaderButton, HeaderButtons, Item  } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
    return (<HeaderButton IconComponent={Ionicons} 
        iconSize={23} 
        color={Colors.darkblue}
    />)
}

const CustomHeaderButtons = props => {
    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
            title='Выйти' 
            iconName='ios-log-out' 
            onPress ={props.navigation.navigate('Auth') () => Alert.alert('Error', '1', [{text: 'OK'}])}
            />
        </HeaderButtons>
    );
}


export default CustomHeaderButtons; */

import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={Ionicons} 
            iconSize={23} 
            color={Colors.darkblue}
        />
    );
}


export default CustomHeaderButton
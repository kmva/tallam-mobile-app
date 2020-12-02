import { SIGNIN } from '../actions/auth';
import { SET_SIGNIN_DATA } from '../actions/auth'

const initialState = {
    email: "",
    password: ""
}

const authReducer = (state = initialState, action) => {
    console.log(SET_SIGNIN_DATA)
    switch (action.type) {
        case SET_SIGNIN_DATA: 
            console.log(state);
            return {...state, [action.field]: action.value}
        case SIGNIN: 
            console.log('SIGNIN')  
        default: 
            return state;
    }
}

export default authReducer;
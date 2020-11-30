import { LOGIN } from '../actions/auth';
import { SET_SIGNIN_DATA } from '../actions/auth'

const initialState = {
    email: "",
    password: ""
}

const authReducer = (state = initialState, action) => {
    console.log(SET_SIGNIN_DATA)
    switch (action.type) {
        case SET_SIGNIN_DATA: 
            return {...state, [action.criterion]: action.value}
        case LOGIN: 
            console.log('LOGIN')  
        default: 
            return state;
    }
}

export default authReducer;
import { SIGNIN, SET_SIGNIN_DATA, LOGOUT } from '../actions/auth';

const initialState = {
    email: "",
    password: ""
}

const authReducer = (state = initialState, action) => {
   /*  console.log(SET_SIGNIN_DATA) */
    switch (action.type) {
        case SET_SIGNIN_DATA: 
            return {...state, [action.field]: action.value}
        case SIGNIN: 
            console.log(SIGNIN);
        case LOGOUT: 
            console.log(LOGOUT)
        default: 
            return state;
    }
}

export default authReducer;
import { CHANGE_DATA } from "../actions/ratingData";
import { RESET_DATA } from "../actions/ratingData";
import { POST_DATA } from "../actions/ratingData";


const initialState = {
    discipline: '',
    classNumber: null,
    typeOfRating: '',
    themeOfLesson: '',
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    c9: 0,
    efficiency: 0
}

const ratingDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DATA: 
            return {...state, [action.criterion]: action.value}
        case POST_DATA: 
            console.log('POST_DATA', action.data)
        case RESET_DATA:
            console.log('RESET_DATA', initialState,)
            return initialState;    
        default: 
            return state;
    }
}

export default ratingDataReducer;
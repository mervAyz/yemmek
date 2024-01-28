import { GET_MEALS_SUCCESS } from "./constants";

let initalState = {
    meals: false,
}

const testReducer = (state = initalState, action) => {
    switch(action.type) {
        case GET_MEALS_SUCCESS: 
            return {...state, meals: action.meals}
        default:
            return state;
    }
};

export default testReducer;
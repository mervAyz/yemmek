import { GET_MEALS_SUCCESS, GET_MEALS } from "./constants";

let initalState = {
    meals: false,
}

const testReducer = (state = initalState, action) => {
    switch(action.type) {
        case GET_MEALS: 
            return { meals: false}
        case GET_MEALS_SUCCESS: 
            return {...state, meals: action.data}
        default:
            return state;
    }
};

export default testReducer;
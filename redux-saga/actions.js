import { GET_MEALS, GET_MEALS_SUCCESS } from "./constants";

export const getMeals = (meal) => {
    return {
        type: GET_MEALS,
        meal
    }
}

export const getMealsSuccess = (data) => {
    return {
        type: GET_MEALS_SUCCESS,
        data
    };
}
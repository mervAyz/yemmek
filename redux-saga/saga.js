import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_MEALS, GET_MEALS_SUCCESS } from './constants';
import axios from 'axios';
import { getMealsSuccess } from './actions';

function mealsApi(mealData) {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealData}`)    
    .then(response => response.data)
    .catch(error => { throw error });  // Hata durumlarını fırlat
}

function* getMealsFetch(data){
    const { meal } = data;
    if(!meal) {
        console.error('Meal data is missing.'); // Handle the missing data case
        return;
    }
    try {
        const meals = yield call(mealsApi, meal);
        yield put(getMealsSuccess(meals));
    } catch (error) {
        console.error('Error fetching meals:', error);
        // You might want to dispatch an action for failure here
    }
}

function* saga() {
    yield takeEvery(GET_MEALS, getMealsFetch);
};

export default saga;
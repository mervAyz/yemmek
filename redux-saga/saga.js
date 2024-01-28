import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_MEALS, GET_MEALS_SUCCESS } from './constants';

function mealsApi() {
    return fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=sugar&i=carrot').then(response => response.json());
}

function* getMealsFetch(){
    const meals = yield call(mealsApi);
    yield put({ type: GET_MEALS_SUCCESS , meals}); 
}

function* saga() {
    yield takeEvery(GET_MEALS, getMealsFetch);
};

export default saga;
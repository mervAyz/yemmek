/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMeals } from './redux-saga/actions';



const App = () => {

  const dispatch = useDispatch();
  const meals = useSelector(state => state?.meals?.meals);

  useEffect(() => {
    dispatch(getMeals())
  }, [])

  return (
    <SafeAreaView>
      <Text>Meals:</Text>
      <Text>DENEE:</Text>
      <View>
        {meals?.map((item, index) => (
          <Text key={index}>{item?.strMeal}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;

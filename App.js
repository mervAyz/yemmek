/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMeals} from './redux-saga/actions';

const App = () => {
  const [enteredText, setEnteredText] = useState('');
  const [words, setWords] = useState([]);

  const dispatch = useDispatch();
  const meals = useSelector(state => state?.meals?.meals);

  useEffect(() => {
    if(words?.length !== 0) {
      dispatch(getMeals(words));
    }
  }, [words]);

  const handleTextChanged = (text) => {
    setEnteredText(text);
  }

  const handleButtonClick = () => {
    setWords(enteredText);
  }

  return (
    <SafeAreaView>
      {/* <Text>Meals:</Text>
      <Text>DENEE:</Text>
      <View>
        {meals?.map((item, index) => (
          <Text key={index}>{item?.strMeal}</Text>
        ))}
      </View> */}
      <View style={{display: 'flex', borderColor: 'red', borderWidth: 1, flexDirection: 'column'}}>
        <TextInput placeholder="Malzemeleri girin" value={enteredText} onChangeText={handleTextChanged} />
          <Button title="Ara" style={{backgroundColor: 'black'}} onPress={handleButtonClick}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;

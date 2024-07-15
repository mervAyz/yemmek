/**
 * Sample React Native Home
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
import {getMeals} from '../../redux-saga/actions';

const Home = ({ navigation }) => {
  const [enteredText, setEnteredText] = useState('');
  const [words, setWords] = useState([]);
  const [mealsData, setMealsData] = useState(false);

  const dispatch = useDispatch();
  const meals = useSelector(state => state?.meals?.meals);

  useEffect(() => {
    if(words?.length !== 0) {
      dispatch(getMeals(words));
    }
  }, [words]);

  useEffect(() => {
    if(meals){
      setMealsData(meals)
    }
  },[meals])

  const handleTextChanged = (text) => {
    setEnteredText(text);
  }

  const handleButtonClick = () => {
    setWords(enteredText);
  }

  return (
    <SafeAreaView>
      <View style={{display: 'flex', borderColor: 'red', borderWidth: 1, flexDirection: 'column'}}>
        <TextInput placeholder="Malzemeleri girin" value={enteredText} onChangeText={handleTextChanged} />
        <Button title="Ara" style={{backgroundColor: 'black'}} onPress={handleButtonClick}/>
      </View>
      {mealsData && 
        mealsData.map((item, index) => (
          <Text key={index} style={{fontSize: 15}}>
            {item?.strMeal}
          </Text>
        ))}
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Favorites')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default Home;

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMeals} from '../../redux-saga/actions';
import FoodCardComponent from '../../components/FoodCard/FoodCard';
import {Icon} from 'react-native-elements';
import images from '../../assets';

const Home = ({navigation}) => {
  const [enteredText, setEnteredText] = useState('');
  const [words, setWords] = useState([]);
  const [mealsData, setMealsData] = useState(false);

  const dispatch = useDispatch();
  const meals = useSelector(state => state?.meals?.meals);

  useEffect(() => {
    if (words?.length !== 0) {
      dispatch(getMeals(words));
    }
  }, [words]);

  useEffect(() => {
    if (meals) {
      setMealsData(meals);
    }
  }, [meals]);

  const handleTextChanged = text => {
    setEnteredText(text);
  };

  const handleButtonClick = () => {
    setWords(enteredText);
  };


  return (
    <ImageBackground source={images.searchBackground} style={styles.background}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Icon
                name="menu"
                type="feather"
                color="#fff"
                size={24}
                style={styles.menuIcon}
              />
              <View style={styles.headerRight}>
                <Icon
                  name="shopping-bag"
                  type="feather"
                  color="#fff"
                  size={24}
                />
                <Icon
                  name="bell"
                  type="feather"
                  color="#fff"
                  size={24}
                  style={styles.bellIcon}
                />
              </View>
            </View>
            <Text style={styles.title}>
              Delicious food ready to delivered for you 🍜
            </Text>
            <View style={styles.searchContainer}>
              <TouchableOpacity onPress={handleButtonClick}>
                <Icon
                  name="search"
                  type="feather"
                  color="#fff"
                  size={24}
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
              <TextInput
                style={styles.searchInput}
                placeholder="Search food would you like to eat"
                placeholderTextColor="#f2f2f2"
                value={enteredText}
                onChangeText={handleTextChanged}
              />
            </View>
          </View>

          <View style={{flex: 1}}>
            {mealsData && <FoodCardComponent data={mealsData} navigation={navigation}/>}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuIcon: {
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellIcon: {
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#f2f2f2',
  },
});

export default Home;

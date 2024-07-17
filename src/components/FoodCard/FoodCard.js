import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import images from '../../assets';

const FoodCardComponent = ({ rating, title, price, thumb, id }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={images.pancake} style={styles.image} />
      <View style={styles.ratingContainer}>
        <Icon name="star" type="font-awesome" color="#FF8C00" size={18} />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    marginBottom: 20,
    padding: 5,
    marginHorizontal: 12,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  ratingContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: '#00BFA5',
    marginTop: 5,
  },
});

export default FoodCardComponent;

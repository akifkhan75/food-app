import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { ScrollView } from "react-navigation";
import { List } from "../components/List";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleFav } from "../store/actions/meals";

export const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const meals = useSelector(state => state.meals.meals);
  const isFavorite = useSelector(state => state.meals.favMeals.some(meal => meal.id === mealId));
  
  const selectedMeal = meals.find((meal) => meal.id === mealId);

  const dispach = useDispatch();

  const handleToggleFavorite = useCallback(() => {
    dispach(toggleFav(mealId));
  },[mealId,dispach]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: handleToggleFavorite});
  },[handleToggleFavorite]);

  useEffect(() => {
    props.navigation.setParams({isFav: isFavorite})
  },[isFavorite]);

  return (
    <View style={styles.screen}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.mealImage} />
      <View style={styles.mealDetails}>
        <ScrollView>
          <View style={styles.quickItems}>
            <View>
              <Text style={styles.label}>Duration</Text>
              <Text style={styles.value}>{selectedMeal.duration} min</Text>
            </View>
            <View>
              <Text style={styles.label}>Complexity</Text>
              <Text style={styles.value}>{selectedMeal.complexity}</Text>
            </View>
            <View>
              <Text style={styles.label}>Affordability</Text>
              <Text style={styles.value}>{selectedMeal.affordability}</Text>
            </View>
          </View>
          <List data={selectedMeal.ingredients} title='Ingredients' />
          <List data={selectedMeal.steps} title='How to Make' />
        </ScrollView>
      </View>
    </View>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFav = navigationData.navigation.getParam('toggleFav');
  const isFav = navigationData.navigation.getParam('isFav');
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Like" iconName={isFav ? 'heart' : 'heart-outline'} onPress={toggleFav} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mealImage: {
    width: "100%",
    height: 200,
  },
  mealDetails: {
    flex: 1,
    width: "100%",
    marginTop: -30,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 3,
  },
  quickItems: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: "open-sans",
    fontSize: 12,
  },
  value: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
  },
});

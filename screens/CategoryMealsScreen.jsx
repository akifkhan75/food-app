import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MealCard } from "../components/MealCard";
import { MealsList } from "../components/MealsList";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

export const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const meals = useSelector(state => state.meals.filteredMeals);

  const mealsList = meals.filter(
    (meal) => meal.categoryIds.indexOf(catId) != -1
  );

  return (
    <MealsList mealsList={mealsList} navigation={props.navigation}/>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    // headerRight: (
    //   <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    //     <Item title='Filter' iconName="filter" onPress={() => {navigationData.navigation.navigate('Filters')}} />
    //   </HeaderButtons>
    // )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

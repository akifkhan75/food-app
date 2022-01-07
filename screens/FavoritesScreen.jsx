import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { MealsList } from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

export const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favMeals);
  if(favMeals.length <= 0)
      return <Text>No Fav Meals Found</Text>;
    
  return <MealsList mealsList={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headertitle: "Home",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

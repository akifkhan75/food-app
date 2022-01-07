import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { MealCard } from "./MealCard";

export const MealsList = (props) => {
  const isFavorite = useSelector(state => state.meals.favMeals);
  const renderMealsList = (itemData) => {
    const isFav = isFavorite.some(meal => meal.id === itemData.item.id);
    return (
      <MealCard
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelect={() => {
          props.navigation.navigate("MealDetails", {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFav
          });
        }}
      />
    );
  };
  return (
    <FlatList
      style={styles.mealsList}
      data={props.mealsList}
      renderItem={renderMealsList}
    />
  );
};

const styles = StyleSheet.create({

  mealsList: {
    padding: 15,
  },
});

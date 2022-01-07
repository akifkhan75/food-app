import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import  HomeNavigator  from './navigation/FoodNavigation';
import { enableScreens } from 'react-native-screens';

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import * as Font from "expo-font";

import AppLoading from "expo-app-loading";
import { mealsReduicer } from "./store/reduicers/mealsReduicer";

enableScreens();

const combinedReduicers = combineReducers({
  meals: mealsReduicer
})

const store = createStore(combinedReduicers);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
   <Provider store={store}>
     <SafeAreaView style={{flex: 1,paddingTop: 25}}>
      <HomeNavigator />
   </SafeAreaView>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

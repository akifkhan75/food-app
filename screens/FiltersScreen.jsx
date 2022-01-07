import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import CustomHeaderButton from "../components/HeaderButton";
import { Colors } from "../constants/colors";
import { changeFilters } from '../store/actions/meals';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterItem}>
      <Text style={styles.filterLabel}>{props.label}</Text>
      <Switch
        value={props.value}
        trackColor={{ true: Colors.primary, false: Colors.darkGrey }}
        thumbColor="white"
        onValueChange={props.onChange}
      />
    </View>
  );
};

export const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);

  const dispatch = useDispatch();

  const ApplyFilters = useCallback(() => {
    const filtersObj = {
      isGlutenFree: isGlutenFree,
    };
    dispatch(changeFilters(filtersObj));
    //props.navigation.goBack();
  }, [isGlutenFree]);


  useEffect(() => {
    props.navigation.setParams({applyFilters: ApplyFilters});
  }, [ApplyFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filters Screen</Text>
      <FilterSwitch
        label="isGlutenFree"
        value={isGlutenFree}
        onChange={(value) => {
          setIsGlutenFree(value);
        }}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Apply"
          onPress={navData.navigation.getParam("applyFilters")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginBottom: 10,
    color: Colors.darkFont,
  },
  filterItem: {
    width: "100%",
    marginVertical: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterLabel: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: Colors.darkFont,
  },
});

import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Colors } from "../constants/colors";

export const CategoryGrid = (props) => {
  return (
    <TouchableOpacity style={styles.gridWrapper} onPress={props.onPress}>
      <View style={{...styles.gridItem, ...{backgroundColor: props.color}}}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    padding: 20,
    height: 150,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  gridWrapper: {
      flex: 1,
      elevation: 3
  },
  title: {
      fontFamily: 'open-sans-bold',
      fontSize: 18,
      color: Colors.lightFont
  }
});

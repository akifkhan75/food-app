import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export const List = (props) => {
  return (
    <View style={styles.list}>
      <Text style={styles.listTitle}>{props.title}</Text>
      <View style={styles.listItems}>
        {props.data.map((item) => {
          return <Text style={styles.listItem}>{item}</Text>;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 15,
    width: "100%",
  },
  listTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    paddingVertical: 5,
    color: Colors.primary,
  },
  listItems: {
    paddingVertical: 3,
    paddingLeft: 10,
  },
  listItem: {
    fontFamily: "open-sans",
    fontSize: 14,
  },
});

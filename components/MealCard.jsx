import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Colors } from "../constants/colors";

export const MealCard = (props) => {
  return (
    <TouchableOpacity style={styles.mealCard} onPress={props.onSelect}>
      <View style={{ ...styles.itemRow, ...styles.itemImage }}>
        <ImageBackground style={{width: '100%', height: '100%',justifyContent: 'flex-end'}} source={{ uri: props.image }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{...styles.itemRow, ...styles.itemDetails}}>
          <View>
              <Text style={styles.label}>Duration</Text>
              <Text style={styles.value}>{props.duration} min</Text>
          </View>
          <View>
              <Text style={styles.label}>Complexity</Text>
              <Text style={styles.value}>{props.complexity}</Text>
          </View>
          <View>
              <Text style={styles.label}>Affordability</Text>
              <Text style={styles.value}>{props.affordability}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealCard: {
    height: 250,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 4,
    marginBottom: 15,
    overflow: 'hidden'
  },
  titleContainer: {
      paddingHorizontal: 12,
      paddingVertical: 5,
      backgroundColor: 'rgba(0,0,0,0.5)'
  },
  title: {
      fontFamily: 'open-sans-bold',
      fontSize: 15,
      color: Colors.lightFont
  },
  itemRow: {
    flexDirection: "row",
  },
  itemImage: {
      flex: 1,
    height: "80%",
    justifyContent: 'flex-end'
  },
  itemDetails: {
      padding: 10,
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  label: {
      fontFamily: 'open-sans',
      fontSize: 12
  },
  value: {
      fontFamily: 'open-sans-bold',
      fontSize: 14
  }
});

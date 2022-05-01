import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./style.js";
import Buttons from "../Buttons";

const CarItem = (props) => {
  const { name, tagline, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Buttons
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order Was Pressed");
          }}
        />
        <Buttons
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;

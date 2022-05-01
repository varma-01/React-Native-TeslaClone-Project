import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import CarItem from "../CarItem";
import styles from "./style.js";
import cars from "./cars";

const CarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarList;

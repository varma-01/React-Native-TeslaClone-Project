import React from "react";
import { Image, View } from "react-native";
import styles from "./style.js";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo.png")}
      ></Image>
      <Image
        style={styles.menu}
        source={require("../../assets/menu.png")}
      ></Image>
    </View>
  );
};

export default Header;

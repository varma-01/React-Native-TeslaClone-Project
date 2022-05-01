import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 30,
    zIndex: 100,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 25,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

export default styles;

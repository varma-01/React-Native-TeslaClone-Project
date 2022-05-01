import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "35%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    color: "black",
  },
  subtitle: {
    fontSize: 15,
    color: "grey",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  btnContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
});

export default styles;

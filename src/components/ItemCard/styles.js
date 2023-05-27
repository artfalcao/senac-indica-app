import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16
  },
  row1: {
    width: "100%",
    height: 360,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  row2: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  tag: {
    width: 200,
    height: 32,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#B66E6F",
    padding: 5,
    marginBottom: 8
  },
  tagText: {
    color: 'white',
    fontWeight: 'bold'
  },
  right: {
    marginRight: 8
  }
  
})
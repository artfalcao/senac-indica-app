import { StyleSheet } from "react-native";

export default StyleSheet.create({
  userImageContainer: {
    width: "100%",
    marginTop: 32,
    alignItems: "center",
  },
  userImage: {
    width: 94,
    height: 94,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  userName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#B66E6F",
    marginTop: 16
  },
  fields: {
    marginTop: 32,
    marginHorizontal: 16,
    gap: 16,
  },
  dataField: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  userData: {
    fontSize: 20,
    fontWeight: "300",
    paddingRight: 8
  },
  saveBtn: {
    marginTop: 64,
    marginHorizontal: 16,
    width: "80%",
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BD383D",
    borderRadius: 16,
    alignSelf: "center"
  },
  cancelBtn: {
    marginTop: 32,
    marginHorizontal: 16,
    width: "80%",
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B66E6F",
    borderRadius: 16,
    alignSelf: "center"
  },
  textBtn: {
    fontSize: 24,
    color: "white"
  },
  input: {
      height: 48,
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginVertical: 8,
      fontSize: 20,
      fontWeight:"300", 
  },
  inputName: {
      height: 48,
      fontSize: 24,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      marginTop: 16,
      marginLeft: 30,
      marginRight: 30,
  }

})
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
    gap: 16
  },
  dataField: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },
  userData: {
    fontSize: 20,
    fontWeight: "300"
  },
  editBtn: {
    marginTop: 64,
    marginHorizontal: 16,
    width: "80%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B66E6F",
    borderRadius: 16,
    alignSelf: "center"
  },
  textBtn: {
    fontSize: 24,
    color: "white"
  }

})
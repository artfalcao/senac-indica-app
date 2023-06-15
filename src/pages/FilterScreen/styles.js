import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  titleArea: {
    backgroundColor: '#D9D9D9',
    height: 32,
    justifyContent: 'center',
    marginTop: 16,
    paddingLeft: 8
  },
  title: {
    fontSize: 18,
    color: '#B66E6F'
  }, 
  btnBox: {
    alignSelf: 'center',
    justifyContent: "center",
    height: 48,
    marginTop: 24,
    borderRadius: 24,
    width: "40%",
    backgroundColor: "#BD383D",
  },
  btnText: {
    height: "100%",
    color: 'white',
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'center',
  },
  btnBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btnClear: {
    alignSelf: 'center',
    justifyContent: "center",
    height: 48,
    marginTop: 24,
    borderRadius: 24,
    width: "40%",
    backgroundColor: "#D9D9D9",
  },
  btnTextClear: {
    height: "100%",
    color: '#B66E6F',
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'center',
  },
})
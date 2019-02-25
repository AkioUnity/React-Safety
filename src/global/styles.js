import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginHeader: {
    height: 100,
    backgroundColor: "#ECECEC"
  },
  alignCenter: {
    alignItems: "center"
  },
  black: { color: "#000" },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
    paddingHorizontal: 10
  },

  googlePlusButton: { backgroundColor: "#dd4b39" },
  facebookButton: { backgroundColor: "#3B5998" },

  disabledButton : {
    backgroundColor: "rgba(149, 165, 166,1.0)"
  },
  text: {
    paddingTop: 0,
    paddingBottom: 10,
    textAlign: "center"
  },
  watermark: {
    flex:1
  },
  watermarkOpacity: {
    backgroundColor: 'rgba(255,255,255,0.7)'
  },
  image: {
    flex: 1,
    margin: 5,
    padding: 15,
    height: 50,
    width: 50
  },
  button: {
    alignItems: 'center'
  },
});

export default styles;

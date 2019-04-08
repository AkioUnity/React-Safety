import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const width=350;
const styles: any = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FBFAFA",
  },
  label:{
    color: '#000'
  },
  input:{
    color: '#564240',
    borderBottomColor:'#564240'
  },
  whiteCircle:{
    backgroundColor: '#fff',
    width:110,
    height:110,
    borderRadius: 55,
    margin:30,
  },
  inputRadius:{
    backgroundColor: '#fff',
    width:width,
    height:45,
    borderRadius: 21,
    marginBottom:20,
    marginLeft:0,
    padding:20,
    fontSize: 12
  },
  logoImage:{
    width: 65,
    height:65,
    margin:22
  },
  loginRadius:{
    backgroundColor: '#173885',
    width:width,
    height:40,
    borderRadius: 20,
    margin:30,
  },
  loginText:{
    fontSize: 22, color: '#000',
    marginBottom:50
  },
  loginImage:{
    width: 150,
    height:55,
    marginBottom:20
  },
  shadow: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  facebookRadius:{
    backgroundColor: '#F58320',
    width:width,
    height:50,
    borderRadius: 25,
    marginBottom:30,
    alignSelf:'center'
  },
});
export default styles;

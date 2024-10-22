import {Dimensions} from "react-native";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;
export default {
  mb10: {
    marginBottom: h*0.010
  },
  logoImage:{
    width: h*0.1,
    height:h*0.130,
    marginTop: h*0.030,
    marginLeft:20
  },
  logoRight:{flex:1,marginTop:h*0.030},
  hello:{
    fontSize: h*0.022, color: '#fff', fontWeight: '400',
    top:-h*0.03,
    zIndex:2,
  },
  topRec:{
    backgroundColor: '#F58322', borderRadius: 12,flexDirection: 'row', justifyContent: 'space-between',
    width:'100%',
    marginTop:h*0.01
  },
  whiteRec:{
    backgroundColor: '#fff', borderRadius: 15,
    flexDirection: 'row', justifyContent: 'space-between',
    // marginBottom:h*0.020,
    width:'100%',
    top:-h*0.02,
  },
  goLeft:{fontSize: 17, color: '#fff', fontWeight: '400',margin:h*0.020},
  goBtn:{
    width: h*0.110,
    height:h*0.050,
    margin:h*0.010,
  },
  goArrow:{
    width: 55,
    bottom:-50,
    right:25,
    alignSelf: 'flex-end',
    // height:120,
  },
  reportText:{fontSize: h*0.028, color: '#21428B', fontWeight: '400',top:h*0.010,
    alignSelf:'center'
  },
  spectitleText:{fontSize: h*0.018, color: '#21428B', fontWeight: '300',margin:h*0.010},
  specText:{fontSize: h*0.0115, color: '#676767',
    padding:h*0.010
  },
  loginText:{
    fontSize: h*0.013, color: '#000',
  },
  acceptBtn: {
    backgroundColor: '#F58323', borderRadius: 15, width:h*0.200,height:h*0.050,marginTop:h*0.020
  },
  acceptBtnText: {
    color:'#fff',
    fontSize:h*0.020,
    padding:10,
    marginLeft: 10
  }
};

import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";
import global from "../../global/styles";
import {Image, ImageBackground, View} from "react-native";

class Base extends Component {
  render() {
    return (
        <ImageBackground source={require("../../../assets/ui/Logo1.png")} style={global.watermark}>
        {/*<Header>*/}
          {/*<Left>*/}
            {/*<Button*/}
              {/*transparent*/}
              {/*onPress={() => this.props.navigation.navigate("DrawerOpen")}*/}
            {/*>*/}
              {/*<Icon name="menu" />*/}
            {/*</Button>*/}
          {/*</Left>*/}
          {/*<Body>*/}
          {/*<Title style={{color: '#000000',}}>Safety In Numbers</Title>*/}
          {/*<Text>Voluntary Reporter</Text>*/}
          {/*</Body>*/}
          {/*<Right />*/}
        {/*</Header>*/}
        </ImageBackground>
    );
  }
}

export default Base;

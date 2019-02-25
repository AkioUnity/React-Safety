import React, {Component} from "react";
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
  Body,
  Footer,
  FooterTab
} from "native-base";
import styles from "./styles";
import global from "../../global/styles";
import {Image, ImageBackground, TouchableOpacity, View} from "react-native";

const starImage = require("../../../assets/ui/texas.png");

class Home extends Component {
  render() {
    return (
        <Container>
          <Header>
            <Left>
              <Button
                  transparent
                  onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
                <Icon name="menu"/>
              </Button>
            </Left>
            <Body>
            <Title style={{color: '#000000',}}>Safety In Numbers</Title>
            <Text>Voluntary Reporter</Text>
            </Body>
            <Right/>
          </Header>
          <ImageBackground resizeMode="contain" source={require("../../../assets/ui/Logo1.png")}
                           style={global.watermark}>
            <Content padder style={global.watermarkOpacity}>
              <View style={{alignItems: 'center'}}>
                <Image style={styles.leftImage} resizeMode="contain"
                       source={require('../../../assets/ui/leftImage.png')}/>
                  <Text style={{fontSize:20}}>Brought to you by</Text>
                  <Text style={{fontSize:20}}>The City of Eagle Lake</Text>
                <Image square style={styles.starImage} resizeMode="contain" source={starImage}/>
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity activeOpacity={0.5} style={global.button} onPress={() => this.props.navigation.navigate("ReportRoute")} >
                  <Image style={{width: 170, flex: 1}} resizeMode="contain" source={require('../../../assets/ui/btn/reportBtn.png')}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={global.button} onPress={() => this.props.navigation.navigate("Login")} >
                  <Image style={{width: 170, flex: 1}} resizeMode="contain" source={require('../../../assets/ui/btn/loginBtn.png')}/>
                </TouchableOpacity>
              </View>
            </Content>
          </ImageBackground>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Your AD Here</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
    );
  }
}

export default Home;

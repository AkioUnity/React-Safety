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
const logoImage = require("../../../assets/images/logo0.png");
class Home extends Component {
  render() {
    return (
      <Container>
        {/*<Header>*/}
          {/**/}
          {/*<Right/>*/}
        {/*</Header>*/}
        {/*<ImageBackground resizeMode="contain" source={require("../../../assets/ui/Logo1.png")}*/}
                         {/*style={global.watermark}>*/}


          <Content padder style={global.watermarkOpacity}>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")} >
              <Icon name="menu"/>
            </Button>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.hello}>Hello</Text>
              <View style={styles.topRec}>
                <Text style={styles.goLeft}>I have a suggestin</Text>
                <TouchableOpacity activeOpacity={0.5} style={global.button}
                                  onPress={() => this.props.navigation.navigate("ReportRoute")}>
                  <Image style={styles.goBtn} resizeMode="contain" source={require('../../../assets/images/goBtn.png')}/>
                </TouchableOpacity>
              </View>
              <View style={styles.whiteRec}>
                <Image square style={styles.logoImage} resizeMode="contain" source={logoImage}/>
                <View style={styles.logoRight}>
                  <Text style={styles.reportText}>File Report</Text>
                  <TouchableOpacity activeOpacity={0.5} style={global.button}
                                  onPress={() => this.props.navigation.navigate("ReportRoute")}>
                  <Image style={styles.goArrow} resizeMode="contain" source={require('../../../assets/images/goArrow.png')}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Text style={styles.spectitleText}>Welcome to Safety in Numbers:</Text>
            <Text style={styles.specText}>Thank you for using your cities safety reporting system "safety in Numbers" also referred to as "SiN". To better utilize government resources please carefully read</Text>
            <Text style={styles.specText}>*if reporting "Anonymously" you will not have option for follow up status communications on reports.For those wishing status updates simply login or create an account and choose to receive status updates when filling out report.</Text>
            <Text style={styles.specText}>*We will not be able to process cases that fail to provide relative details. constructive criticism. or reports that contain irrational emotional reports, verbal abuse, foul language. or reproduction of news.</Text>
            <Text style={styles.specText}>*Please provide accurate information to aid city efficiency. Please do not repeatedly file rport without new facts or causes. Providing false reports or</Text>
            <Text style={styles.specText}>*A satisfaction survey may be sent with SiN use. Please respond to help us</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity activeOpacity={0.5} style={global.button}
                                onPress={() => this.props.navigation.navigate("Login")}>
                <Image style={{width: 50, flex: 1}} resizeMode="contain"
                       source={require('../../../assets/images/login_icon.png')}/>
                <Text style={styles.loginText}>Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.acceptBtn}
                                onPress={() => this.props.navigation.navigate("Login")}>
                <Text style={styles.acceptBtnText}>ACCEPT TO</Text>
              </TouchableOpacity>
            </View>
          </Content>
        {/*</ImageBackground>*/}
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

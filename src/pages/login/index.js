import * as React from "react";
import {Image} from "react-native";
import global from "../../global/styles";
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Text,
  View,
  Icon,
  Footer,
  Spinner, FooterTab
} from "native-base";

import styles from "./styles";

export interface Props {
  loginForm: any;
  onLogin: Function;
  onStartRegister: Function;
  onStartLoginFacebook: Function;
  onStartLoginGooglePlus: Function;
  onOpenUrl: Function;
  onSubmit: Function,
  isLoading: Boolean
}

export interface State {
}

class Login extends React.Component<Props, State> {

  render() {
    const isLoading = this.props.isLoading;
    console.log('Login render isLoading:'+isLoading);
    return (
      <Container>
        <Content padder style={global.watermarkOpacity}>
          <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")} >
            <Icon name="menu"/>
          </Button>
          <View style={{alignItems: 'center'}}>
            <View style={styles.whiteCircle}>
              <Image square style={styles.logoImage} resizeMode="contain" source={require("../../../assets/images/logo0.png")}/>
            </View>
            <Text style={styles.loginText}>Log in</Text>
            {this.props.loginForm}
            {
              isLoading ?
              (<Spinner color="blue"/>)
              :
              (
                <View>
                  <Button full onPress={this.props.onSubmit} style={styles.loginRadius}>
                    <Text style={{fontSize:12}}>log in</Text>
                  </Button>
                </View>
              )}
            <Image square style={styles.loginImage} resizeMode="contain" source={require("../../../assets/images/login00.png")}/>
            <View>
            <Button full style={styles.facebookRadius} onPress={() => this.props.navigation.navigate("WebRoute")}>
              <Text style={{fontSize:12}}>CONTINUE WITH FACEBOOK</Text>
            </Button>
            </View>
            <View>
              <Button transparent onPress={() => this.props.navigation.navigate("SignUpRoute")}>
                <Text style={{fontSize:14}}>CREATE ACCOUNT</Text>
              </Button>
            </View>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button full large>
              <Text>Your AD Here</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Login;

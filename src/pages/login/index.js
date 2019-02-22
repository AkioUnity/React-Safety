import * as React from "react";
import {Image} from "react-native";
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

import styles from "../../global/styles";

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
        <Header style={styles.loginHeader}>
          <Body style={styles.alignCenter}>
          {/*<Icon name="md-aperture" style={{fontSize: 104, color: "#40717e"}}/>*/}
          <Title style={styles.black}>Safety in Numbers </Title>
          </Body>
        </Header>
        <Content>
          {this.props.loginForm}
          {
            isLoading ?
              (<Spinner color="blue"/>)
              :
              (
                <View padder>
                  {/*<Button bordered style={{ position: "absolute",top:10,right:0 }} onPress={() => this.props.navigation.navigate("WebRoute")}>*/}
                    {/*<Text>Lost your password?</Text>*/}
                  {/*</Button>*/}
                  <Button full onPress={this.props.onSubmit} style={{right:0,left:0,marginTop:60}}>
                    <Text>{"Login"}</Text>
                  </Button>
                </View>
              )}
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

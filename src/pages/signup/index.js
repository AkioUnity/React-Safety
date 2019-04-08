import React, {Component} from "react";
import {Image} from "react-native";
import global from "../../global/styles";
import {
  Container,
  Content,
  Button,
  Text,
  View,
  Icon,
  Footer,
  Spinner, FooterTab, Label, Input, Item, Form
} from "native-base";

import styles from "./styles";

class SignUp extends Component {

  render() {
    const isLoading = this.props.isLoading;
    console.log('Login render isLoading:' + isLoading);
    return (
      <Container>
        <Content padder style={global.watermarkOpacity}>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Image square style={global.backBtn} resizeMode="contain"
                   source={require("../../../assets/images/back_arrow.png")}/>
          </Button>
          <View style={{alignItems: 'center'}}>
            <View style={styles.whiteCircle}>
              <Image square style={styles.logoImage} resizeMode="contain"
                     source={require("../../../assets/images/logo0.png")}/>
            </View>
            <Text style={styles.loginText}>Sign up</Text>
            <Form style={{flex:1}}>
                <Item stackedLabel>
                  <Label style={styles.label}>Name</Label>
                  <Input style={styles.input}/>
                </Item>
                <Item stackedLabel>
                  <Label style={styles.label}>Email</Label>
                  <Input style={styles.input}/>
                </Item>
                <Item stackedLabel>
                  <Label style={styles.label}>Password</Label>
                  <Input style={styles.input}/>
                </Item>
            </Form>
              <Button full style={styles.facebookRadius} onPress={() => this.props.navigation.navigate("WebRoute")}>
                <Text style={{fontSize: 13}}>Sign up</Text>
              </Button>

              <View>
                <Button transparent onPress={() => this.props.navigation.navigate("WebRoute")}>
                  <Text style={{fontSize: 17,color:'#6f6f6f'}}>Already have an account? Log in</Text>
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

  export default SignUp;

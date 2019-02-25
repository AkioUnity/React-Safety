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
  CheckBox, ListItem,
  Input, FooterTab, Footer
} from "native-base";
import styles from "./styles";
import {Image, ImageBackground, View, TouchableHighlight,TouchableOpacity} from "react-native";
import global from "../../global/styles";


class ConfirmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: true,
      checkbox2: true
    };
  }

  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
    });
  }

  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2
    });
  }

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
            <View>
              <ListItem button onPress={() => this.toggleSwitch1()}>
                <Body>
                <Text style={{fontSize: 20}}>Save report details to phone</Text>
                </Body>
                <CheckBox
                  checked={this.state.checkbox1}
                  onPress={() => this.toggleSwitch1()}
                />
              </ListItem>
              <ListItem button onPress={() => this.toggleSwitch2()}>
                <Body>
                <Text style={{fontSize: 20}}>Would you like a follow up? </Text>
                </Body>
                <CheckBox
                  color="red"
                  checked={this.state.checkbox2}
                  onPress={() => this.toggleSwitch2()}
                />
              </ListItem>
            </View>
            <View style={styles.form}>
              <View style={styles.inputLine}>
                <Text style={{fontSize: 20}}>Name:</Text>
                <Input style={styles.input}/>
              </View>
              <View style={styles.inputLine}>
                <Text style={{fontSize: 20}}>Email: </Text>
                <Input style={styles.input}/>
              </View>
              <View style={styles.inputLine}>
                <Text style={{fontSize: 20}}>Mobile#: </Text>
                <Input style={styles.input}/>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',}}>
              <TouchableOpacity activeOpacity={0.6} style={global.button} onPress={() => this.props.navigation.navigate("WebRoute",{url:"http://www.coeltx.net/",name:"EAGLE LAKE TEXAS"})} >
                <Image style={{height: 200, flex: 1}} resizeMode="contain"
                       source={require('../../../assets/ui/R4.png')}/>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',}}>
              <TouchableOpacity activeOpacity={0.7} style={global.button} onPress={() => this.props.navigation.navigate("Report")} >
                <Image style={{width: 180, flex: 1}} resizeMode="contain" source={require('../../../assets/ui/btn/submit.png')}/>
              </TouchableOpacity>
            </View>
          </Content>
        </ImageBackground>
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

export default ConfirmPage;

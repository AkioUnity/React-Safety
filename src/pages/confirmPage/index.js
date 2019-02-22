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
import {Image, ImageBackground, View} from "react-native";
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
      <Container style={styles.container}>
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
            <Image style={{width: 320, height: 200, flex: 1, justifyContent: 'center'}} resizeMode="contain"
                   source={require('../../../assets/ui/R4.png')}/>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around',margin:20}}>
            <Button info large bordered onPress={() => this.props.navigation.navigate("Report")} style={{backgroundColor: '#43ACDE',borderRadius: 10, borderColor: '#4e4e4e',width:210}}>
              <Text style={{color:'#000000'}}> Submit </Text></Button>
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

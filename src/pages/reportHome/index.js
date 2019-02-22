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
  Form,
  Textarea, FooterTab, Footer
} from "native-base";
import styles from "./styles";
import {FlatList, ImageBackground, View} from "react-native";
import global from "../../global/styles";

const datas = [
  {
    name: "What did you see?",
    key: "see",
    icon: "home"
  },
  {
    name: "Where did it take place",
    key: "place",
    icon: "arrow-up"
  },
  {
    name: "Any other important details to add?",
    key: "other",
    icon: "arrow-down"
  }
];


class ReportHome extends Component {
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
            <FlatList data={datas} renderItem={({item}) =>
              <View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Icon name="medical" style={styles.iconSize}/>
                  <Text numberOfLines={1} style={styles.reportText}>
                    {item.name}
                  </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
                  <Form>
                    <Textarea  rowSpan={5} bordered style={styles.textArea}/>
                  </Form>
                  <Icon name="camera" style={{bottom: 0}}/>
                </View>
              </View>
            }
            />
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', margin: 20}}>
              <Button info large onPress={() => this.props.navigation.navigate("ConfirmRoute")}><Text
                style={{color: '#000000'}}> Submit Report</Text></Button>
            </View>
            <View style={{flex: 1, flexDirection: 'row',}}>
              <Icon name="medical" style={styles.iconSize}/>
              <Text numberOfLines={1} style={styles.iconText}>
                These field are required
              </Text>
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

export default ReportHome;

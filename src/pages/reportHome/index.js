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
import {FlatList, Image, ImageBackground, TouchableOpacity, View} from "react-native";
import global from "../../global/styles";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as Actions from "../../actions/user";

const datas = [
  {
    title: "What did you see?",
    key: "see",
    icon: "home",
    name: "what_text"
  },
  {
    title: "Where did it take place",
    key: "place",
    icon: "arrow-up",
    name: "where_text"
  },
  {
    title: "Any other important details to add?",
    key: "other",
    icon: "arrow-down",
    name: "other_text"
  }
];

class ReportHome extends Component {
  constructor(props) {
    super(props);
    this.props.fetchIsLoading(true);
    this.state = {
      what_text:' '
    };
  }

  componentDidUpdate(){
    if (!this.props.isLoading) {
      this.OnReportSuccess()
    }
  }

  OnBtnReport(){
    // this.setState({isFetched:true});
    console.log(this.state);
    this.props.reportAction(this.state);
  }

  OnReportSuccess(){
    this.props.navigation.navigate("ConfirmRoute");
    this.props.fetchIsLoading(true);
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
            <FlatList data={datas} renderItem={({item}) =>
              <View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Icon name="medical" style={styles.iconSize}/>
                  <Text numberOfLines={1} style={styles.reportText}>
                    {item.title}
                  </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
                  <Form>
                    <Textarea  name={item.name} rowSpan={5} bordered style={styles.textArea} onChangeText={(text) => {this.setState({[item.name]:text}); }} />
                  </Form>
                  <Icon name="camera" style={{bottom: 0}}/>
                </View>
              </View>
            }
            />
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', margin: 20}}>
              <TouchableOpacity activeOpacity={0.5} style={global.button} onPress={() => this.OnBtnReport()} >
                <Image style={{width: 170, flex: 1}} resizeMode="contain" source={require('../../../assets/ui/btn/submitReport.png')}/>
              </TouchableOpacity>
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

function matchDispatchToProps(dispatch) {
  return bindActionCreators({reportAction:Actions.reportData,fetchIsLoading:Actions.fetchIsLoading}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading,
    lastError: state.user.lastError
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(ReportHome);

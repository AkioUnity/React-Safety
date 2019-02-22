/*
 * Usually this config.js file would NEVER be commited to github repo
 * @flow
*/
import {Platform} from "react-native";

export default {
    showDevScreens: __DEV__,
    useFixtures: false,
    ezLogin: false,
    yellowBox: __DEV__,
    reduxLogging: __DEV__,
    includeExamples: __DEV__,
    useReactotron: __DEV__,
    BASE_URL : Platform.select({
      ios: "https://devauth.safety.com/api/",
      android: "https://devauth.safety.com/api"
    }) ,
    ROUTE_LOGIN : "/authentication/login",
  };

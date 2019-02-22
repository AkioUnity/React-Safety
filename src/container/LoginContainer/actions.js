import Config from "../../global/config";
import {
  LOGIN_ATTEMPT,
  LOGIN_FAILED,
  LOGIN_SUCCESSFULLY,
  LOGIN_RESET_CONTROL_VARS,
  LOGIN_LOGOUT
} from "../../global/action-names";
import {_INITIAL_STATE_} from "./reducer";
import {decode as atob, encode as btoa} from 'base-64'

const URL = `${Config.BASE_URL}${Config.ROUTE_LOGIN}`;
// const URL = 'https://www.google.com/';

export function loginIsLoading(bool: boolean) {
  return {
    type: LOGIN_ATTEMPT,
    isLoading: bool,
    lastError: null
  };
}

export function loginSuccess(userData: Object) {
  return {
    type: LOGIN_SUCCESSFULLY,
    userData,
    lastError: null
  };
}

export function loginFailed(lastError: Object) {
  return {
    type: LOGIN_FAILED,
    lastError,
    hasError: lastError !== undefined
  };
}

export function resetLoginControlVars() {
  return dispatch => {
    dispatch({
      type: LOGIN_RESET_CONTROL_VARS,
      hasError: false
    });
  };
}


export function logout(resetNavigation: Function) {
  console.log('action-logout');
  return dispatch => {
    dispatch({
      type: LOGIN_LOGOUT,
      ..._INITIAL_STATE_,
      resetNavigation
    });
  };
}

export function doLogin(userValues: Object) {
  return dispatch => {
    console.log('login');
    dispatch(loginSuccess(userValues));
  };
  // return dispatch => {
  //   //Dispatch loading to show Spinner on screen
  //   dispatch(loginIsLoading(true));
  //   let btoaStr = userValues.userName + ':' + userValues.password;
  //   console.log('url0 :' + URL);
  //   let user = btoa(btoaStr);
  //   console.log('btoa:' + user);
  //   fetch(URL, {
  //     method: "post",
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       user: user,
  //       includeUserInfo: true,
  //       allUserInfo: true
  //     })
  //   }).then(response => {
  //     if (response.status >= 200 && response.status <= 304) {
  //       response.json().then(data => {
  //         //After sucess identified, dispatch isLoading false
  //         console.log('success');
  //         console.log(data);
  //         dispatch(loginIsLoading(false));
  //         if (data.length === 0)
  //           dispatch(loginFailed(new Error("No found")));
  //         else
  //           dispatch(loginSuccess(data.response));
  //       });
  //     } else {
  //       console.log(response);
  //       console.log(response._bodyText);
  //       const error = new Error(response._bodyText.response);
  //       error.response = response._bodyText;
  //       dispatch(loginIsLoading(false));
  //       dispatch(loginFailed(error));
  //       throw error;
  //     }
  //   })
  //     .catch(error => {
  //       // If any other error occurs
  //       dispatch(loginIsLoading(false));
  //       dispatch(loginFailed(error));
  //     });
  // };
}

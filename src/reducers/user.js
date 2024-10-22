import type { Action } from '../actions/types';
import {REPORT, USER_REPORT,FETCH_ATTEMPT} from "../actions/user";

const initialState = {
  report_id: 0,
  user_id:0,
  isLoading:false,
  lastError: undefined,
};

export default function (state:any = initialState, action:Action){
  switch (action.type) {
    case REPORT:
      return {
        ...state,
        report_id: action.response.report_id,
      };
    case USER_REPORT:
      return {
        ...state,
        user_id: action.response.user_id,
      };
    case FETCH_ATTEMPT:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}

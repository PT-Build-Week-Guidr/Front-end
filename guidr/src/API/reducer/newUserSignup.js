 import {START_POSTING, POST_SUCCESS, POST_FAILURE } from "../actions/newUser";

  const initialState = {
    user: [],
    isFetching: false,
    error: ""
  };

  const GetNewUser = (state = initialState, action) => {
    switch (action.type) {
  case START_POSTING:
    return {
      ...state,
      isFetching: true,
      error: ""
    };
  case POST_SUCCESS:
    return {
      ...state,
      isFetching: false,
      user: action.payload,
      error: ""
    };
  case POST_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.payload
    };
  default:
    return state;
}}
export default GetNewUser;
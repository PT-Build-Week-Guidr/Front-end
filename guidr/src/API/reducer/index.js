import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions/fetching";

import { 
  START_POSTING, 
  POST_SUCCESS, 
  POST_FAILURE 
} from "../actions/posting";

const initialState = {
  trips: [],
  postedTrips: [],
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        trips: action.payload,
        error: ""
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
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
        postedTrips: action.payload,
        error: ""
      };
    case POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
  }
};

export default reducer;

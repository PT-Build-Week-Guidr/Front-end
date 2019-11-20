import { START_POSTING, POST_SUCCESS, POST_FAILURE } from "../actions/posting";

const initialState = {
  newPostedTrips: [],
  isFetching: false,
  error: ""
};

const PostedTrips = (state = initialState, action) => {
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
        postedTrips: action.payload,
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
  }
};
export default PostedTrips;

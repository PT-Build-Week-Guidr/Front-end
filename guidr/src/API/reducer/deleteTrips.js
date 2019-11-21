import{
    START_DELETING,
    DELETE_SUCCESS,
    DELETE_FAILURE
  } from "../actions/delete";

  const initialState = {
    isFetching: false,
    error: ""
  };

  const DeleteTrips = (state = initialState, action) => {
    switch (action.type) {
  case START_DELETING:
    return {
      ...state,
      isFetching: true,
      error: ""
    };
  case DELETE_SUCCESS:
    return {
      ...state,
      isFetching: false,
      deleted: action.payload,
      error: ""
    };
  case DELETE_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.payload
    };
  default:
    return state;
}}
export default DeleteTrips;
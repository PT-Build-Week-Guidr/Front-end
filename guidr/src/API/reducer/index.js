import {combineReducers} from "redux"
import GetPublicTrips from "./getPublicTrips";
import PostedTrips from "./postTrips";
import GetNewUser from "./newUserSignup"

const reducer = combineReducers({
  GetPublicTrips,
  PostedTrips,
  GetNewUser
})

export default reducer;

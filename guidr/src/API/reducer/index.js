import {combineReducers} from "redux"
import GetPublicTrips from "./getPublicTrips";
import DeleteTrips from "../actions/delete";

const reducer = combineReducers({
  GetPublicTrips,
  DeleteTrips
})

export default reducer;

import api from "../axiosHeader";
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const FetchTrips = () => dispatch => {
    dispatch({ type: START_FETCHING })
    api().get("https://guidr-project.herokuapp.com/trips", {
        headers: {
          Authorization: localStorage.getItem("token"),
        }
      })
      .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log('Error', err)
        dispatch({ type: FETCH_FAILURE, payload: err.response })
      })
    }


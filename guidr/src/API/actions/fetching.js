import api from "../AxiosHeader";
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

 const FetchTrips = () => dispatch => {
  const id = localStorage.getItem("id");
    dispatch({ type: START_FETCHING })
    api().get(`https://guidr-project.herokuapp.com/users/${id}/trips`, {
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
export default FetchTrips;

import api from "../axiosHeader";
export const START_POSTING = 'START_POSTING';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const userSignUp = dispatch => {
    dispatch({ type: START_POSTING })
    api()
      .post("https://guidr-project.herokuapp.com/users/signUp", {
        headers: {
            Authorization: localStorage.getItem("token"),
          }
        })
      .then(res => {
        console.log(res.data.token)
        console.log(res.data.id)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("id", res.data.id)
        dispatch({ type: POST_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log('Error', err)
        dispatch({ type: POST_FAILURE, payload: err.response })

      });
  };


// import api from "../axiosHeader";

// // export const START_POSTING = "START_POSTING";
// // export const POST_SUCCESS = "POST_SUCCESS";
// // export const POST_FAILURE = "POST_FAILURE";

// export const PostTrip = () => dispatch => {
//   dispatch({ type: START_POSTING });
//   api()
//     .post("https://guidr-project.herokuapp.com/users/:74/trips", {
//       headers: {
//         Authorization: localStorage.getItem("token"),
//         id: localStorage.getItem("id")
//       }
//     })
//     .then(res => {
//       dispatch({ type: POST_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log("Error", err);
//       dispatch({ type: POST_FAILURE, payload: err.response });
//     });

//   dispatch({ type: START_POSTING });
// };

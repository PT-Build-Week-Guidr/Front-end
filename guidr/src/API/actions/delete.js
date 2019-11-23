// import api from "../axiosHeader";

// export const START_DELETING = "START_DELETING";
// export const DELETE_SUCCESS = "DELETE_SUCCESS";
// export const DELETE_FAILURE = "DELETE_FAILURE";

// const DeleteTrips = (trip) => dispatch => {
//   const id = localStorage.getItem("id");

//   dispatch({ type: START_DELETING });
//   api()
//     .delete(`https://guidr-project.herokuapp.com/trips/${trip}`)
//     .then(res => {
//       console.log(res.data);
//       dispatch({ type: DELETE_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log("Error", err);
//       dispatch({ type: DELETE_FAILURE, payload: err.response });
//     });
// };

// export default DeleteTrips;

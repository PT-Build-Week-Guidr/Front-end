import axios from "axios";

export default function() {
    return axios.create({
        baseURL: "https://guidr-project.herokuapp.com",
        headers: {
            authorization: localStorage.getItem("token2"),
        },
    })
}
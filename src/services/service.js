import axios from "axios";



const searchUserApi = (username) => {
    console.log(username);
    return axios
      .get(`https://api.github.com/search/users?q=${username}`)

  }

export {searchUserApi}
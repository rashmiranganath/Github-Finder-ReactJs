import axios from "axios";

const searchUserApi = (username) => {
  console.log(username);
  return axios.get(`https://api.github.com/search/users?q=${username}`);
};

const userRepos = (url) => {
  return axios.get(url);
};

export { searchUserApi, userRepos };

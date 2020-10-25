import axios from "axios";

const searchUserApi = (username) => {
  console.log(username);
  return axios.get(`https://api.github.com/search/users?q=${username}`);
};

const userRepos = (url) => {
  console.log(url)
  return axios.get(url);
};

const profileApi = (username) => {
  return axios.get(`https://api.github.com/users/${username}`);
};

const repoLink  = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos`)
}

export { searchUserApi, userRepos, profileApi ,repoLink };

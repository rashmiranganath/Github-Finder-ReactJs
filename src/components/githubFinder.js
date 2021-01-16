import React from "react";
import "../styles/github.css";
import { searchUserApi, userRepos } from "../services/service";
import { Link } from "react-router-dom";

class GithubFinder extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dropDownValue: "",
      username: "",
      data: [],
      isLoaded: false,
      selectedUserId: "",
      selectedUserDetails: {},
      showDetails: false,
      selectedUserIdsData: {},
      selectedUserData: {},
    };
  }

  updateInput(input) {
    this.setState({ username: input });
  }
  searchUsers = async (username) => {
    const response = await searchUserApi(username);
    this.setState({
      data: response.data.items,
      isLoaded: true,
    });
  };
  dropDownChangeValue(event) {
    this.setState({
      dropDownValue: event,
    });
  }
  handleSubmit = (event) => {
    const { data } = this.state;
    const newData = [...data];
    event.preventDefault();
    switch (this.state.dropDownValue) {
      case "Ascending":
        var sorted = newData.sort((x, y) => (x.login > y.login ? 1 : -1));
        console.log("a");
        console.log(sorted);
        console.log(this.state.dropDownValue);
        this.setState({
          data: sorted,
        });
        break;
      case "Descending":
        var sorted1 = newData.sort((x, y) => (x.login < y.login ? 1 : -1));
        console.log("d", sorted1);
        this.setState({
          data: sorted1,
        });
        break;
      default:
        return data;
    }
  };
  renderNavBar = () => {
    const { username, dropDownValue } = this.state;
    return (
      <div className="inputBox">
        <div className="sortBox">
          <form onSubmit={this.handleSubmit}>
            <select
              name="sort"
              value={dropDownValue}
              onChange={(event) => {
                this.dropDownChangeValue(event.target.value);
              }}
            >
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="searchBox">
          <input
            type="text"
            required
            placeholder="username"
            value={this.state.username}
            onChange={(e) => this.updateInput(e.target.value)}
          ></input>
        </div>
        <div className="submitBox">
          <button onClick={() => this.searchUsers(username)}>search</button>
        </div>
      </div>
    );
  };
  handleDetails = async (id, url) => {
    console.log(id);
    const { showDetails, selectedUserIdsData, selectedUserData } = this.state;
    const resp = await userRepos(url);
    console.log(resp);
    let copyOfIds = {};
    let copyOfData = {};
    copyOfData = {
      ...selectedUserData,
      [id]: selectedUserData[id] ? selectedUserData[id] : resp.data,
    };
    copyOfIds = {
      ...selectedUserIdsData,
      [id]: selectedUserIdsData[id] ? !selectedUserIdsData[id] : true,
    };
    this.setState({
      showDetails: !showDetails,
      selectedUserId: id,
      selectedUrl: url,
      selectedUserDetails: resp.data,
      selectedUserIdsData: copyOfIds,
      selectedUserData: copyOfData,
    });
    console.log(showDetails);
  };
  renderDetail = (id) => {
    const {
      selectedUserDetails,
      selectedUserIdsData,
      selectedUserData,
    } = this.state;
    const userData = selectedUserDetails;
    console.log(selectedUserIdsData);
    console.log(selectedUserData);
    const filteredData = selectedUserData[id];
    console.log(filteredData);
    return (
      <div className="userData">
        <h3>Repositories ({filteredData.length})</h3>
        {filteredData.map((repos) => {
          return (
            <div className="userRepos" key={repos.id}>
              <div className="repoInfo">
                <h2>{repos.name}</h2>
                <p>language : {repos.language}</p>
                <p>fork count : {repos.forks_count}</p>
                <p>followers : {repos.watchers}</p>
                <p>stars : {repos.stargazers_count}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  renderUsers = () => {
    const {
      showDetails,
      data,
      selectedUserIdsData,
    } = this.state;
    return (
      <div className="users">
        <ul>
          {data.map((item) => {
            return (
              <div className="searchResults" key={item.id}>
                <div className="userInfo">
                  <div className="imageDiv">
                    <Link to={`/${item.login}`}>
                      <img src={item.avatar_url} alt="avatar" />
                    </Link>
                  </div>
                  <div className="userDetails">
                    <Link to={`/${item.login}`}>
                      <h3>{item.login}</h3>
                    </Link>
                    <h4>score :{item.score}</h4>
                    <Link to={`/${item.login}`}>
                      <h4>Profile url :{item.url}</h4>
                    </Link>
                    <div>
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          this.handleDetails(item.id, item.repos_url)
                        }
                      >
                        {selectedUserIdsData[item.id] === item.id && showDetails
                          ? "CloseDetails"
                          : "OpenDetails"}
                      </button>
                    </div>
                  </div>
                </div>
                {selectedUserIdsData[item.id] ? this.renderDetail(item.id) : ""}
              </div>
            );
          })}
        </ul>
      </div>
    );
  };
  render() {
    return (
      <div className="mainContainer">
        <div className="navBar">{this.renderNavBar()}</div>
        <div>{this.renderUsers()}</div>
      </div>
    );
  }
}
export default GithubFinder;

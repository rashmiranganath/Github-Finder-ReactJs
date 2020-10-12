import React from "react";
import axios from "axios";
import "./githubFinder.css";

class GithubFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownValue: "",
      username: "",
      data: [],
      isLoaded: false,
    };
  }

  updateInput(input) {
    this.setState({ username: input });
  }

  searchUserApi(username) {
    console.log(this.state);
    console.log(username);
    axios
      .get(`https://api.github.com/search/users?q=${username}`)
      .then((response) => {
        console.log(response.data.items);
        this.setState({
          data: response.data.items,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  dropDownChangeValue(event) {
    this.setState({
      dropDownValue: event,
    });
  }

  handleSubmit = (event) => {
    const { data } = this.state;
    const newData = [...data]
    event.preventDefault();
    switch (this.state.dropDownValue) {
      case "Ascending":
        var sorted = newData.sort((x, y) => (x.login > y.login ? 1 : -1));
        console.log("a");
        console.log(sorted);
        console.log(this.state.dropDownValue);
        this.setState({
          data: sorted
        });
        break;
      case "Descending":
        var sorted1 = newData.sort((x, y) => (x.login < y.login ? 1 : -1));
        console.log("d", sorted1);
        this.setState({
          data: sorted1
        });
        break;
      default:
        return data;
        
    }
  };


  render() {
    const { data, username, dropDownValue } = this.state;
    console.log(this.state);
    return (
      <div className="navBar">
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
            <button onClick={() => this.searchUserApi(username)}>search</button>
          </div>
        </div>
        <div className="users">
          <ul>
            {data.map((item) => {
              return (
                <div className="searchResults" key={item.id}>
                  <img src={item.avatar_url}></img>
                  <div className="userDetails">
                    <h3>{item.login}</h3>
                    <h4>score :{item.score}</h4>
                    <h4>Profile url :{item.url}</h4>
                    <button className="btn btn-info">
                      <a href={item.url}>Details</a>
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default GithubFinder;

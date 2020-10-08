import React from "react";
import axios from "axios";
import "./githubFinder.css";

class GithubFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      data: [],
      isLoaded: false,
    };
  }

  updateInput(input) {
    this.setState({ username: input });
    // console.log(input)
  }

  apiHit(username) {
    // console.log(username)
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

  render() {
    const { data } = this.state;
    return (
      <div className="navBar">
        <div className="inputBox">
          <div className="githubIcon">
            <i class="fa fa-github"></i>
          </div>
          <div className="searchBox">
            <input
              type="text"
              required
              value={this.state.username}
              onChange={(e) => this.updateInput(e.target.value)}
            />
          </div>
          <div className="submitBox">
            <button onClick={() => this.apiHit(this.state.username)}>
              search
            </button>
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
                    <button className="btn btn-info" >
                      <a href={item.url}>View profile</a>
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

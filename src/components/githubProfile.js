import React from "react";
import "../styles/githubProfile.css";
import { profileApi } from "../services/service";

class GithubProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userProfileDetails: "",
      isLoaded: false,
    };
  }

  componentDidMount = () => {
    const username = this.props.match.params.username;
    this.profileDetails(username);
  };

  profileDetails = async (username) => {
    const response = await profileApi(username);
    console.log(response.data);
    this.setState({
      userProfileDetails: response.data,
      isLoaded: true,
    });
  };

  renderProfileDetails = () => {
    const { userProfileDetails } = this.state;
    console.log(userProfileDetails);
    return (
      <div className="githubProfile">
        <div className="nav"></div>
        <div className="profileCard">
          <div className="imgDiv">
            <img src={userProfileDetails.avatar_url} />
          </div>
          <div className="userInfo">
            <div className="username">
              <span>{userProfileDetails.login}</span>
            </div>
            <div className="bio">
              <span>
                {userProfileDetails.bio === null
                  ? true
                  : userProfileDetails.bio}
              </span>
            </div>
            <div className="followDetails">
              <div className="followers">
              <i  class='fas'>&#xf500;</i>
                <span>Followers : {userProfileDetails.followers}</span>
              </div>
              <div className="following">
                <i class="fas">&#xf4fc;</i>
                <span>Following : {userProfileDetails.following}</span>
              </div>
              <div className="location">
                <i class="fas">&#xf3c5;</i>
                <span>Place : {userProfileDetails.location}</span>
              </div>
              <div className="publicRepos">
              <i class='fas'>&#xf022;</i>
                <span>public Repos : {userProfileDetails.public_repos}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderProfileDetails()}</div>;
  }
}

export default GithubProfile;

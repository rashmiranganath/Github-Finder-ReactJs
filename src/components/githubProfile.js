import React from "react";
import "../styles/githubProfile.css";
import { profileApi, repoLink } from "../services/service";

class GithubProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      repoData: [],
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
    const repoInfo = await repoLink(username);
    console.log(repoInfo.data);
    console.log(response.data);
    this.setState({
      repoData: repoInfo.data,
      userProfileDetails: response.data,
      isLoaded: true,
    });
  };

  renderProfileDetails = () => {
    const { userProfileDetails, repoData } = this.state;
    console.log(repoData, "fff");
    console.log(userProfileDetails);
    return (
      <div className="githubProfile">
        <div className="nav"></div>
        <div className="profileCard">
          <div className="profileImgBio">
            <div className="imgDiv">
              <img src={userProfileDetails.avatar_url} />
            </div>
            <div className="userInfo">
              <div className="username">
                <span>{userProfileDetails.login}</span>
              </div>
              <div className="locationBioDiv">
                <div className="location">
                  <div className="placeBold">Created At</div>
                  <div className="createdAt">
                    {userProfileDetails.created_at}
                  </div>
                </div>
                <div className="bio">
                  <div className="bioBold">Update At</div>
                  <div className="updatedAt">
                    {userProfileDetails.updated_at}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="repoFollowData">
            <div className="followDiv">
              <div className="followDetailsCount">
                <div className="followersCount">
                  <span>{userProfileDetails.followers}</span>
                </div>
                <div className="followingCount">
                  <span>{userProfileDetails.following}</span>
                </div>
                <div className="publicReposCount">
                  <span>{userProfileDetails.public_repos}</span>
                </div>
              </div>
              <div className="followDetails">
                <div className="followers">
                  <span>Followers</span>
                </div>
                <div className="following">
                  <span>Following</span>
                </div>
                <div className="publicRepos">
                  <span>Repositories</span>
                </div>
              </div>
            </div>

            <div className="repoNames">
              {repoData.map((item, i) => {
                console.log(item);
                return <span>{item.name}</span>
              })}
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

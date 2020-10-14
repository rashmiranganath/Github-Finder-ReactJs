import React from "react";

class GithubProfile extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.url}</h1>
        <h1>hello</h1>
      </div>
    );
  }
}

export default GithubProfile;

// import React, { useState } from "react";
// import Typography from '@material-ui/core/Typography'
// import { searchUserApi } from "../services/service"
// import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button'
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import Image from 'material-ui-image'
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl'


// const useStyles = makeStyles((theme) => ({
//   typographyRoot: {
//     fontSize: "xxx-large",
//     fontFamily: "serif",
//     color: "grey"

//   },
//   flex: {
//     display: "flex",
//     flexDirection: "column"
//   },
//   flexOnly: {
//     margin: "10px",
//     display: "flex",

//   },
//   drawerPaper: {
//     height: "100vh",
//     width: 400,
//   },
//   textField: {
//     width: "280px",
//     marginLeft: 'auto',
//     marginRight: '10px',
//   },
//   buttons: {
//     width: "80px",
//     padding: "15px"
//   },
// }));



// function GithubFinder(props) {
//   const classes = useStyles();

//   const [username, setUserName] = useState("")
//   // const [dropDownValue, setDropDownValue] = useState("")
//   // const [dataLoaded, setDataLoaded] = useState(false)

//   const updateInput = (input) => {
//     setUserName(input);
//   }

//   const searchUsers = async (username, props) => {
//     props.setBtn(dataLoaded)
//     console.log(username)
//     const callingData = await searchUserApi(username)
//     setData(callingData)
//     setDataLoaded(true)
//     console.log(callingData)

//   }



//   const dropDownChangeValue = (input) => {
//     console.log(input)
//     setDropDownValue(input);

//   }
//   const handleSubmit = (event) => {
//     console.log(event)
//     const newData = [...data];
//     event.preventDefault();
//     switch (dropDownValue) {
//       case "Ascending":
//         var sorted = newData.sort((x, y) => (x.login > y.login ? 1 : -1));
//         console.log("a");
//         console.log(sorted);
//         console.log(dropDownValue);
//         setData(sorted)
//         break;
//       case "Descending":
//         var sorted1 = newData.sort((x, y) => (x.login < y.login ? 1 : -1));
//         console.log("d", sorted1);
//         setData(sorted)

//         break;
//       default:
//         return data;
//     }
//   };


//   const renderNavBar = () => {
//     return (
//       <Grid className={classes.flex}>
//         <Grid className={classes.flex} >
//           <Grid className={classes.flexOnly}>
//             <Grid><TextField className={classes.textField} label="Search for users" variant="outlined" value={username}
//               onChange={(e) => updateInput(e.target.value)} /></Grid>
//             <Grid>
//               <Button className={classes.buttons} variant="contained" color="primary" onClick={() => searchUsers(username, props)}>
//                 Search</Button>
//             </Grid>
//           </Grid>
//           <Grid className={classes.flexOnly}>
//           <Grid>
//               <FormControl onSubmit={handleSubmit} variant="outlined" className={classes.textField}>
//                 <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
//                 <Select
//                   value={dropDownValue}
//                   onChange={(event) => {
//                     dropDownChangeValue(event.target.value)
//                   }} label="Sort"
//                 >
//                   <MenuItem value={"Ascending"}>Ascending</MenuItem>
//                   <MenuItem value={"Descending"}>Descending</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid>
//               <Button className={classes.buttons} variant="contained" color="primary" onClick={() => searchUsers(username, props)}>
//                 Submit</Button>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid className="githubImgContainer">
//           <Image
//             src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
//           />
//         </Grid>
//       </Grid>
//     );
//   };
//   const searchMessage = () => {
//     return (
//       <div  >
//         <Grid>
//           <Typography style={{ fontSize: "xxx-large", color: "grey", fontFamily: "serif" }} >Search for Github User</Typography>
//         </Grid>
//       </div>
//     )
//   }
//   console.log("git", props)
//   const [showUsers, setShowUsers] = useState(false)
//   const [data, setData] = useState([])
//   return (
//     <>
//       {showUsers ? true : searchMessage()}

//     </>
//   )

// }


// export default GithubFinder



// import { searchUserApi, userRepos } from "../services/service";
// import { Link } from "react-router-dom";
// import SideBar from './SideBar'
// import HomePage from './HomePage'l

// class GithubFinder extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dropDownValue: "",
//       username: "",
//       data: [],
//       isLoaded: false,
//       selectedUserId: "",
//       selectedUserDetails: {},
//       showDetails: false,
//     };
//   }
//   updateInput(input) {
//     this.setState({ username: input });
//   }

//   searchUsers = async (username) => {
//     const response = await searchUserApi(username);
//     this.setState({
//       data: response.data.items,
//       isLoaded: true,
//     });
//   };

//   dropDownChangeValue(event) {
//     this.setState({
//       dropDownValue: event,
//     });
//   }
//   handleSubmit = (event) => {
//     const { data } = this.state;
//     const newData = [...data];
//     event.preventDefault();
//     switch (this.state.dropDownValue) {
//       case "Ascending":
//         var sorted = newData.sort((x, y) => (x.login > y.login ? 1 : -1));
//         console.log("a");
//         console.log(sorted);
//         console.log(this.state.dropDownValue);
//         this.setState({
//           data: sorted,
//         });
//         break;
//       case "Descending":
//         var sorted1 = newData.sort((x, y) => (x.login < y.login ? 1 : -1));
//         console.log("d", sorted1);
//         this.setState({
//           data: sorted1,
//         });
//         break;
//       default:
//         return data;
//     }
//   };
//   renderNavBar = () => {
//     const { username, dropDownValue } = this.state;
//     return (
//       <div className="inputBox">
//         <div className="sortBox">
//           <form onSubmit={this.handleSubmit}>
//             <select
//               name="sort"
//               value={dropDownValue}
//               onChange={(event) => {
//                 this.dropDownChangeValue(event.target.value);
//               }}
//             >
//               <option value="Ascending">Ascending</option>
//               <option value="Descending">Descending</option>
//             </select>
//             <input type="submit" value="Submit" />
//           </form>
//         </div>
//         <div className="searchBox">
//           <input
//             type="text"
//             required
//             placeholder="username"
//             value={this.state.username}
//             onChange={(e) => this.updateInput(e.target.value)}
//           ></input>
//         </div>
//         <div className="submitBox">
//           <button onClick={() => this.searchUsers(username)}>search</button>
//         </div>
//       </div>
//     );
//   };

//   handleDetails = async (id, url) => {
//     console.log(id);
//     const { showDetails } = this.state;
//     const resp = await userRepos(url);
//     console.log(resp);
//     this.setState({
//       showDetails: !showDetails,
//       selectedUserId: id,
//       selectedUrl: url,
//       selectedUserDetails: resp.data,
//     });
//     console.log(showDetails);
//   };

//   renderDetail = () => {
//     const { selectedUserDetails } = this.state;
//     const userData = selectedUserDetails;
//     console.log(userData);
//     return (
//       <div className="userData">
//         <h3>Repositories ({userData.length})</h3>
//         {userData.map((repos) => {
//           return (
//             <div className="userRepos" key={repos.id}>
//               <div className="repoInfo">
//                 <h2>{repos.name}</h2>
//                 <p>language : {repos.language}</p>
//                 <p>fork count : {repos.forks_count}</p>
//                 <p>followers : {repos.watchers}</p>
//                 <p>stars : {repos.stargazers_count}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

// renderUsers = () => {
//   const { showDetails, data, selectedUserId } = this.state;
//   return (
//     <div className="users">
//       <ul>
//         {data.map((item) => {
//           return (
//             <div className="searchResults" key={item.id}>
//               <div className="userInfo">
//                 <div className="imageDiv">
//                   <Link to={`/${item.login}`}>
//                     <img src={item.avatar_url} alt="avatar" />
//                   </Link>
//                 </div>
//                 <div className="userDetails">
//                   <Link to={`/${item.login}`}>
//                     <h3>{item.login}</h3>
//                   </Link>
//                   <h4>score :{item.score}</h4>
//                   <Link to={`/${item.login}`}>
//                     <h4>Profile url :{item.url}</h4>
//                   </Link>
//                   <div>
//                     <button
//                       className="btn btn-info"
//                       onClick={() =>
//                         this.handleDetails(item.id, item.repos_url)
//                       }
//                     >
//                       {selectedUserId === item.id && showDetails
//                         ? "CloseDetails"
//                         : "OpenDetails"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {showDetails
//                 ? selectedUserId === item.id && this.renderDetail(item.id)
//                 : ""}
//             </div>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

//   render() {
//     return (
//       <div className="mainContainer" style={{display:"flex"}}>
//         <SideBar />
//         {/* <h1>hhhhh</h1> */}
//         <HomePage />
//         {/* <h3 style={{marginTop:80}}>swarerhjkthtrh</h3> */}
//         {/* <div className="navBar">{this.renderNavBar()}</div> */}
//         {/* {this.renderUsers()} */}
//       </div>
//     );
//   }
// }

// export default GithubFinder;



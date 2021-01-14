import React, { useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { searchUserApi } from '../services/service'
import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  typographyRoot: {
    fontSize: "xxx-large",
    fontFamily: "serif",
    color: "grey"

  },
  flex: {
    display: "flex",
    flexDirection: "column"
  },
  flexOnly: {
    margin: "10px",
    display: "flex",

  },
  drawerPaper: {
    height: "100vh",
    width: 400,
  },
  textField: {
    width: "280px",
    marginLeft: 'auto',
    marginRight: '10px',
  },
  buttons: {
    width: "80px",
    padding: "15px"
  },
}));



function GithubFinder(props) {
  const classes = useStyles();
  const [userData, setUserData] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)
  // const [searchData , setSearchData] = 


  const searchMessage = () => {
    return (
      <div  >
        <Grid>
          <Typography style={{ fontSize: "xxx-large", color: "grey", fontFamily: "serif" }} >Search for Github User</Typography>
        </Grid>
      </div>
    )
  }


  useEffect(() => {
    const getData = async () => {
      if (props.userInput) {
        const result = await searchUserApi(props.userInput);
        setDataLoaded(true);
        console.log(result);
        setUserData(result.data.items);
      } else {
        console.log("kkk");
      }
    };
    getData();
  }, [props.userInput]);




  const renderUsers = () => {
    console.log("im not found", userData)
    return(
      dataLoaded && userData.map((item) => {
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
              </div>
            </div>
          </div>
        )
      })
    )

  }


  return (
    <>
      {props.searchBtnClicked ? renderUsers() : searchMessage()}
         </>

  )
}


export default GithubFinder




import React, { useState, useEffect, useContext } from "react";
import Typography from '@material-ui/core/Typography'
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { searchUserApi } from '../services/service'
import { UserConsumer } from "./context"




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
  userDataImg: {
    width: "130px",
    borderRadius: "67px",
    marginRight: "75px",
    marginTop: "10px"
  },
  userDataFlex: {
    display: "flex",
    alignItem: "center"
  },
  userDataBox :{
    border : "2px",
    marginTop : "10px"
  }
}));



function GithubFinder(props) {
  const classes = useStyles();
  const [userData, setUserData] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)
  const context = useContext(UserConsumer)



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
      if (context.username) {
        const result = await searchUserApi(context.username);
        setDataLoaded(true);
        console.log(result);
        setUserData(result.data.items);
      } else {
        console.log("kkk");
      }
    };
    getData();
  }, [context.username]);




  const renderUsers = () => {
    console.log("im not found", userData)
    return (
      dataLoaded && userData.map((item) => {
        return (
          <>
            <Box  border={1} borderRadius={15} styles={{marginTop: "10px"}}>
              <Grid className={classes.userDataFlex} >
                <Grid >
                  <img src={item.avatar_url} alt="avatar" className={classes.userDataImg} />
                </Grid>
                <Grid styles={{ margin: "20px" }}>
                  <h3>{item.login}</h3>
                  <h4>score :{item.score}</h4>
                  <h4>Profile url :{item.url}</h4>
                </Grid>
              </Grid>
            </Box>

          </>
        )
      })
    )
  }


  return (
    <>
      {context.searchBtn ? renderUsers() : searchMessage()}
    </>

  )
}


export default GithubFinder




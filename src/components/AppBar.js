import React, { useState } from 'react';
import { withRouter } from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Avatar } from '@material-ui/core'
import { headerValue } from '../utils/common';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import GithubFinder from './githubFinder'

const useStyles = makeStyles((theme) => ({
  githubIcon: {
    color: "white",
    marginRight: theme.spacing(2)
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolBarRoot: {
    color: '#fff',
    backgroundColor: '',
    zIndex: '1201'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

}));

function ButtonAppBar(props) {
  const [userInput, setUserInput] = useState("")
  const [
    searchBtnClicked, updateSearchBtnClicked] = useState(false)

  const updateInput = (input) => {
    setUserInput(input);
  }
  const searchUsers = async (username) => {
    updateSearchBtnClicked(true)
    console.log(searchBtnClicked, "searchbutton")

  };
  const classes = useStyles();

  const { auth, history, setAuthToTrue } = props
  const onClickHandler = () => {
    const { history, auth } = props
    console.log(history)
    if (auth) {
      setAuthToTrue(false)
      history.push('/')
    } else if (history.location.pathname === '/signup') {
      history.push('/')
    } else if (history.location.pathname === '/') {
      history.push('/signup')
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar classes={{ root: classes.toolBarRoot }}>
          <Avatar className={classes.githubIcon}>
            <GitHubIcon />
          </Avatar >
          <Typography variant="h6" className={classes.title}>
            Github Finder
          </Typography>
          {auth ? <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={userInput}
              onChange={(e) => updateInput(e.target.value)} />
            <Button style={{ color: "white" }} onClick={() => { searchUsers(userInput) }}>
              <SearchIcon />
            </Button>
          </div> : true}
          <div>{searchBtnClicked && <GithubFinder updateSearchBtnClicked={updateSearchBtnClicked} searchBtnClicked={searchBtnClicked} userInput={userInput} />}</div>
          <Button color="inherit" onClick={() => onClickHandler(props)}>{headerValue(history, auth)}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(ButtonAppBar)
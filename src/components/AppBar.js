import React from 'react';
import { withRouter } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Avatar } from '@material-ui/core'
import { headerValue } from '../utils/common';

const useStyles = makeStyles((theme) => ({
  githubIcon: {
    color: "blue",
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
}));

function ButtonAppBar(props) {
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
        <Toolbar>
          <Avatar className={classes.githubIcon}>
            <GitHubIcon />
          </Avatar >
          <Typography variant="h6" className={classes.title}>
            Github Finder
          </Typography>
          <Button color="inherit" onClick={() => onClickHandler(props)}>{headerValue(history, auth)}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(ButtonAppBar)
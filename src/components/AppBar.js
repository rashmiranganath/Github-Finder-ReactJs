import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Avatar } from '@material-ui/core'

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

const onClickHandler =() =>{

}

function ButtonAppBar(props) {
  console.log(props.heading)

  const classes = useStyles();

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
          <Button color="inherit">{props.heading}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar
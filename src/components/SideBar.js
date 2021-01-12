import React  ,{useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {withRouter} from "react-router-dom"





const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    height: "100vh",
    width: "250px",
  }
}));


function ResponsiveDrawer(props) {

  const classes = useStyles()

  const sideBarNav = (selectedOption) => {
    console.log(selectedOption)
    switch(selectedOption){
      case 'Profile':
        return props.history.push("/user")
      case 'Github Finder':
        return props.history.push("/home")
      default:
        return true
    }

  }


  return (
    <div>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        open={true}
        variant="permanent"
      >
        <div className={classes.drawerContainer}>
          <List>
            {['Profile' , 'Github Finder' ].map((text, index) => (
              <ListItem button key={text} onClick={() => sideBarNav(text)}>
                <ListItemIcon>{index % 2 === 0 ? <AccountCircleOutlinedIcon /> : <SearchOutlinedIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                {console.log(text)}
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}



export default withRouter(ResponsiveDrawer);
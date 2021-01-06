import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: drawerWidth,
    }

}));

function ResponsiveDrawer(props) {
    const classes = useStyles();
    const drawer = (
        <div>

        </div>
    );


    return (
        <div className={classes.root}>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* <Box mt={40} pt={3}>

                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open>



                        {drawer}
                    </Drawer>
                </Box> */}
            </nav>

        </div>
    );
}



export default ResponsiveDrawer;
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import PeopleIcon from '@material-ui/icons/People';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({

    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(3),
        height: "80px",
        width: "80px",
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    username: {
        margin: theme.spacing(3, 0, 2),
        fontSize: "x-large",

    },
    details: {
        margin: theme.spacing(1, 0, 2),
        fontSize: "large",
        marginRight: "5px"
    },
    alignIconAndContent: {
        display: "flex",
        alignItems: "center",
    },
    iconMargin: {
        margin: "10px",
        variant:"outlined"
    }
}));

export default function LoginProfile() {
    const classes = useStyles();
    var username = localStorage.getItem("user")

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Card className={classes.paper}>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    User Profile
                </Typography>
                <Typography className={classes.username}>
                    {username}
                </Typography>
                <Grid className={classes.alignIconAndContent}>
                    <Grid className={classes.iconMargin}>
                        <CollectionsBookmarkIcon />
                    </Grid>
                    <Grid>
                        <Typography className={classes.details}>
                            Repositories 45
                        </Typography >
                    </Grid>
                </Grid>
                <Grid className={classes.alignIconAndContent}>
                    <Grid className={classes.iconMargin}>
                        <PeopleIcon />
                    </Grid>
                    <Grid>
                        <Typography className={classes.details}>Followers 45 </Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.alignIconAndContent}>
                    <Grid className={classes.iconMargin}>
                        <StarOutlineIcon />
                    </Grid>
                    <Grid>

                        <Typography className={classes.details}>Pro </Typography>
                    </Grid>
                </Grid>
            </Card>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container >
    );
}
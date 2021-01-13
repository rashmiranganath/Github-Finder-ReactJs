import React from 'react'
import { withRouter } from "react-router-dom"
import { Grid, Paper, Avatar, TextField, Typography, Link } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isAuth: false,
            username: ""

        }
        console.log(this.props)
    }



    loginAuth = () => {
        console.log("kkkk")
        this.setState({
            isAuth: true
        }, () => {
            localStorage.setItem('user', this.state.username);
            this.props.set(this.state.isAuth);
            this.props.history.push("/home")
        })
    }

    setUserName = (name) => {
        this.setState({
            username: name
        })
    }
    navigateToSignup = () => {
        this.props.history.push("/signUp")
    }

    Copyright = () => {
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



    render() {
        const paperStyle = { padding: 10, width: 350, margin: "20px auto" }
        const avatarStyle = { backgroundColor: ' #10bf10' }
        const btnStyle = { margin: "10px 0" }
        return (
            <div>
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align="center">
                            <Avatar style={avatarStyle}>
                                <LockOutlinedIcon />
                            </Avatar>

                            <h2>Sign in</h2>
                        </Grid>

                        <TextField label="Username" required value={this.state.username} onChange={(e) => { this.setUserName(e.target.value) }} placeholder="Enter username" fullWidth required />
                        <TextField label="Password" required placeholder="Enter password" fullWidth required type="password" />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle} onClick={this.loginAuth}>Sign in</Button>
                        <Typography >
                            <Link href="#" >
                                Forgot password
                        </Link>
                        </Typography>
                        <Typography >
                            Do you have an account  ?
                        <Link onClick={this.navigateToSignup}  >
                                Sign Up
                        </Link>
                        </Typography>
                    </Paper>
                </Grid>

            </div>


        )
    }
}

export default withRouter(Login)
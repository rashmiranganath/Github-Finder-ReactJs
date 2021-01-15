import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/loader"
import { UserProvider } from "./components/context"
import ButtonAppBar from "./components/AppBar"
import SignUp from "./components/signUp"
import HomePage from "./components/HomePage"
import LoginProfile from "./components/loginProfile"
import "./App.css"




const GithubProfile = lazy(() => import("./components/githubProfile"));
const ErrorBoundary = lazy(() => import("./components/ErrorBoundary"));
const ProctectedRoute = lazy(() => import("./components/protectedRoutes"));
const Login = lazy(() => import("./components/login"));




function App(props) {
  const [auth, setAuth] = useState(false);
  const [username , setUserName] = useState("");
  const [searchBtn , setSearchBtn] = useState(false)

  const setAuthToTrue = (value) => {
    console.log(value)
    setAuth(value)
  }

  const getSearchDetails = (name ,click ) => {
    setUserName(name)
    setSearchBtn(click)
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <Router>
            <UserProvider value={{ isAuth: auth , searchBtn:searchBtn ,username:username }}>
              <ButtonAppBar setAuthToTrue={setAuthToTrue} auth={auth} getSearchDetails={getSearchDetails}  />
              <Switch>
                <Route exact path="/user" render={(props) => (<LoginProfile {...props} />)} />
                <Route exact path="/signUp" render={(props) => (<SignUp {...props} auth={auth} setAuthToTrue={setAuthToTrue} />)}></Route>
                <Route exact path="/" render={(props) => (<Login {...props} set={setAuthToTrue}/>)} />
                <ProctectedRoute exact path="/home" component={HomePage} />
                <Route exact path="/:username" render={(props) => (<GithubProfile {...props} />)} />
              </Switch>
            </UserProvider>
          </Router>
        </ErrorBoundary>
      </Suspense>

    </>
  );
}

export default App;



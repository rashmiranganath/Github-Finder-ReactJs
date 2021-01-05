import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/loader"
import { UserProvider } from "./components/context"
import ButtonAppBar from "./components/AppBar"
import SignUp from "./components/signUp"




const GithubFinder = lazy(() => import("./components/githubFinder"));
const GithubProfile = lazy(() => import("./components/githubProfile"));
const ErrorBoundary = lazy(() => import("./components/ErrorBoundary"));
const ProctectedRoute = lazy(() => import("./components/protectedRoutes"));
const Login = lazy(() => import("./components/login"));




function App(props) {
  const [auth, setAuth] = useState(false);
  const [isLogin ,header] = useState("")
  const [appHeader, setappHeader] = useState("signup")

  console.log(auth)

 const setHeader = (headerValue) => {
  header(headerValue)
  console.log(headerValue)

 }

  const setAuthToTrue = (value) => {
    console.log(value)
    setAuth(value)
  }
  console.log(",,,,,",isLogin)

// if(isLogin == "signup" && auth == false){
//   setappHeader("login")
// }else if(isLogin == "login" && auth == false){
//   setappHeader("signup")
// }
// else {
//   setappHeader("logout")
// // }
// switch(isLogin){
//   case "signup":
//     setappHeader("login")
//   case "login":
//     setappHeader("signup")
//   default :
//   setappHeader("logout")

    

// }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <Router>
            <UserProvider value={{ isAuth: auth }}>
              <ButtonAppBar  headervalue={appHeader}/>
              <Switch>
                <Route exact path="/signUp"  render={(props) => (<SignUp {...props} headerAppBar={setHeader} />)}></Route>
                <Route exact path="/" render={(props) => (<Login {...props} set={setAuthToTrue} headerAppBar={setHeader} />)} />
                <ProctectedRoute exact path="/home" component={GithubFinder} />
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



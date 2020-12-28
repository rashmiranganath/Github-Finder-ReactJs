import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const GithubFinder = lazy(() => import("./components/githubFinder"));
const GithubProfile = lazy(() => import("./components/githubProfile"));
const ErrorBoundary = lazy(() => import("./components/ErrorBoundary"));
const ProctectedRoute = lazy(() => import("./components/protectedRoutes"));
const Loader = lazy(() => import("./components/loader"))
const Login = import("./components/login");




function App(props) {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={Login} />
              <ProctectedRoute exact path="/home" component={GithubFinder} isAuth={true} />
              <Route exact path="/:username" render={(props) => (<GithubProfile {...props} />)} />
            </Switch>
          </Suspense>
        </Router>
      </ErrorBoundary>

    </>
  );
}

export default App;



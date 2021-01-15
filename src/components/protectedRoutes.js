import React , {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserConsumer } from "./context"




function ProctectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
    const context = useContext(UserConsumer)
    console.log(".....",context.isAuth)

    return <Route {...rest} render={(props) => {
        if (context.isAuth) {
            return <Component />
        } else {
            return <Redirect to={{ path: "/", state: { from: props.location } }} />
        }
    }} />
}

export default ProctectedRoute

import React from  'react';
import {Route , Redirect} from 'react-router-dom';


function ProctectedRoute({isAuth:isAuth ,component:Component , ...rest}) {
 return <Route {...rest} render={(props) =>{
     if(isAuth){
        return <Component/>
     }else {
         return <Redirect to={{path:"/" , state:{from : props.location}}}/>
     }
 }}/>
}

export default ProctectedRoute

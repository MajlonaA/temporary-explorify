import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

//this section of the code implements the private route functionality 
const PrivateRoute = ({children, ...rest}) => {
  const {myUser} = useUserContext();
  return <Route {...rest} render ={() =>{
    return myUser ? children : <Redirect to ="/">

    </Redirect>

  }} ></Route>
};
export default PrivateRoute;

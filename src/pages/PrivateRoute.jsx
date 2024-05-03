import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth0  } from '@auth0/auth0-react';

const PrivateRoute = ({children}) => {
  const {user} = useAuth0();
  if (!user) {
    return <Redirect to='/' />;
  }
  return children;
};

export default PrivateRoute;

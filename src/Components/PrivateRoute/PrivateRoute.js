import React from 'react'

import { Redirect, Route } from 'react-router';
import UseContext from '../ReactContext/UseContext'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = UseContext();
  if (isLoading) {

    return <h1>The page is loading</h1>
  }
  return (

    <Route

      {...rest}
      render={({ location }) => user.email ? (children) :
        <Redirect

          to={{
            pathname: "/login",
            state: { from: location }
          }}
        ></Redirect>


      }

    >
    </Route>


  )
}

export default PrivateRoute;

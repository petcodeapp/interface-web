import React, { useContext } from 'react'
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthContext } from '../Auth';

const PrivateRoute = ({ children, ...props }: RouteProps) => {
    const store = useContext(AuthContext);

    return (
        <Route {...props}>
            {
                store.isLoggedIn ? (
                    {children}
                ) : (
                    <Redirect to="/" />
                )
            }
        </Route>
    )
 
}

export default PrivateRoute;
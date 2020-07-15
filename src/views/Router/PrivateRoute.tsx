import React, { useContext } from 'react'
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthContext } from '../Auth';

const PrivateRoute = ({ children, ...props }: RouteProps) => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <Route {...props}>
            {
                isLoggedIn ? (
                    {children}
                ) : (
                    <Redirect to="/" />
                )
            }
        </Route>
    )
 
}

export default PrivateRoute;
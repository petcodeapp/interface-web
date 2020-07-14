import React, { createContext } from "react";
import Auth from '../../modules/AuthModule';

const AuthStore = new Auth();

export const AuthContext = createContext(AuthStore);

export const AuthProvider: React.FunctionComponent = ({ children }) => {
    
    return (
        <AuthContext.Provider value={AuthStore}>
            { children }
        </AuthContext.Provider>
    )
}
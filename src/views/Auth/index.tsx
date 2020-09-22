import React, { createContext } from 'react'
import Auth from '../../modules/Auth'

export const AuthStore = new Auth()

// AuthStore.init()

export const AuthContext = createContext(AuthStore)

export const AuthProvider: React.FunctionComponent = ({ children }) => (
		<AuthContext.Provider value={AuthStore}>{children}</AuthContext.Provider>
	)

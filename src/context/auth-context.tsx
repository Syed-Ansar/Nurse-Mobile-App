import * as SecureStore from 'expo-secure-store'
import React, { useEffect } from 'react'

import { useStorageState } from '../hooks/useStorageState'

import { AuthLoginResponse } from '@/types'

const AuthContext = React.createContext<{
	signIn: (token: AuthLoginResponse) => void
	signOut: () => void
	session?: string | null
	isLoading: boolean
}>({
	signIn: () => null,
	signOut: () => null,
	session: null,
	isLoading: false,
})

// This hook can be used to access the user info.
export function useSession() {
	const value = React.useContext(AuthContext)
	if (process.env.NODE_ENV !== 'production') {
		if (!value) {
			throw new Error('useSession must be wrapped in a <SessionProvider />')
		}
	}

	return value
}

export function SessionProvider(props: React.PropsWithChildren) {
	const [[isLoading, session], setSession] = useStorageState('session')
	const [_, setRefreshSession] = useStorageState('refreshSession')

	useEffect(() => {
		;(async () => {
			const accessToken = await SecureStore.getItemAsync('session')
			const refreshToken = await SecureStore.getItemAsync('refreshSession')
			setSession(accessToken)
			setRefreshSession(refreshToken)
		})()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<AuthContext.Provider
			value={{
				signIn: (token) => {
					if (token && token.accessToken && token.accessToken?.token) {
						setSession(token.accessToken.token)
					}
				},
				signOut: () => {
					setSession(null)
				},
				session,
				isLoading,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

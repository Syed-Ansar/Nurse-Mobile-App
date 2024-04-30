import { Stack } from 'expo-router'

import { SessionProvider } from '../context/auth-context'

export default function Root() {
	// Set up the auth context and render our layout inside of it.
	return (
		<SessionProvider>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			/>
		</SessionProvider>
	)
}

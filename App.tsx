import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'

import { useSession } from '@/context/auth-context'
import AuthNavigator from '@/navigators/Auth'
import DrawerNavigator from '@/navigators/Drawer'
import MainNavigator from '@/navigators/Main'

type Props = object

const App = (props: Props) => {
	const { session, isLoading } = useSession()

	return (
		<NavigationContainer>
			{session === null ? <AuthNavigator /> : <DrawerNavigator />}
		</NavigationContainer>
	)
}

export default App

const styles = StyleSheet.create({})

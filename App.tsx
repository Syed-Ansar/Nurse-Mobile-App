import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'

import { useSession } from '@/context/auth-context'
import AuthNavigator from '@/navigators/Auth'
import MainNavigator from '@/navigators/Main'
import DrawerNavigator from '@/navigators/Drawer'

type Props = object

const App = (props: Props) => {
	const { session, isLoading } = useSession()

	return (
		<NavigationContainer>{session ? <AuthNavigator /> : <DrawerNavigator />}</NavigationContainer>
	)
}

export default App

const styles = StyleSheet.create({})

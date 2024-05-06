import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'

import { useSession } from '@/context/auth-context'
import AuthNavigator from '@/navigators/Auth'
import DrawerNavigator from '@/navigators/Drawer'

const Main = () => {
	const { session } = useSession()
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" />
			{session === null ? <AuthNavigator /> : <DrawerNavigator />}
		</NavigationContainer>
	)
}

export default Main

const styles = StyleSheet.create({})

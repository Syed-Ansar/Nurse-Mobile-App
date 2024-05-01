import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'

import { useSession } from '@/context/auth-context'
import AuthNavigator from '@/navigators/Auth'
import DrawerNavigator from '@/navigators/Drawer'

const navTheme = DefaultTheme
navTheme.colors.background = '#fffff'

const Main = () => {
	const { session } = useSession()
	return (
		<NavigationContainer theme={navTheme}>
			{session === null ? <AuthNavigator /> : <DrawerNavigator />}
		</NavigationContainer>
	)
}

export default Main

const styles = StyleSheet.create({})

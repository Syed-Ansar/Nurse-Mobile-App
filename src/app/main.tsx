import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'

import { useSession } from '@/context/auth-context'
import AuthNavigator from '@/navigators/Auth'
import DrawerNavigator from '@/navigators/Drawer'

const Main = () => {
	const { session } = useSession()
	return (
		<NavigationContainer>
			{session === null ? <AuthNavigator /> : <DrawerNavigator />}
		</NavigationContainer>
	)
}

export default Main

const styles = StyleSheet.create({})

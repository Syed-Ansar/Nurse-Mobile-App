import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import * as SecureStore from 'expo-secure-store'
import React, { useEffect } from 'react'
import { StatusBar, StyleSheet } from 'react-native'

import { useSession } from '@/context/auth-context'
import AuthNavigator from '@/navigators/Auth'
import DrawerNavigator from '@/navigators/Drawer'
import { navigationRef } from '@/navigators/root-navigation'
import { isTokenExpired } from '@/utils'

const prefix = Linking.createURL('/')

const Main = () => {
	const { session, signOut } = useSession()

	useEffect(() => {
		const token = SecureStore.getItem('session')
		if (token && isTokenExpired(token)) {
			signOut()
		}
	}, [])

	return (
		<NavigationContainer
			ref={navigationRef}
			linking={{
				prefixes: [prefix],
			}}
		>
			<StatusBar barStyle="dark-content" />
			{session ? <DrawerNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	)
}

export default Main

const styles = StyleSheet.create({})

import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'

import Splash from '@/components/loading/splash'
import { useSession } from '@/context/auth-context'
import AuthNavigator from '@/navigators/Auth'
import DrawerNavigator from '@/navigators/Drawer'
import { navigationRef } from '@/navigators/root-navigation'

const prefix = Linking.createURL('/')

const Main = () => {
	const { session, isLoading } = useSession()

	if (isLoading) {
		return <Splash />
	}

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

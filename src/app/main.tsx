import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StatusBar, StyleSheet } from 'react-native'

import { useSession } from '@/context/auth-context'
import AuthNavigator from '@/navigators/Auth'
import DrawerNavigator from '@/navigators/Drawer'
import { nurseApiInstance } from '@/network'

const Main = () => {
	const { session } = useSession()

	useEffect(() => {
		console.log('Session Token ', session)
		nurseApiInstance.defaults.headers.common['Authorization'] = `Bearer ${session}`
	}, [session])

	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" />
			{session === null ? <AuthNavigator /> : <DrawerNavigator />}
		</NavigationContainer>
	)
}

export default Main

const styles = StyleSheet.create({})

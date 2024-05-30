import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'

import HomeScreen from '../home'
import ScreenLayout from '../screen-layout'

const HomeStack = createNativeStackNavigator()

const Dashboard = ({ navigation }: any) => {
	return (
		<ScreenLayout navigation={navigation}>
			<HomeStack.Navigator
				initialRouteName="HomeScreen"
				screenOptions={{
					headerShown: false,
				}}
			>
				<HomeStack.Screen name="HomeScreen" component={HomeScreen} />
			</HomeStack.Navigator>
		</ScreenLayout>
	)
}

export default Dashboard

const styles = StyleSheet.create({})

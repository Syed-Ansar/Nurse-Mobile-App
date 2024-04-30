import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'

import HomeScreen from '../home'
import TotalEarnings from '../home/total-earnings'
import TotalHours from '../home/total-hours'
import ScreenLayout from '../screen-layout'

const HomeStack = createNativeStackNavigator()

const Dashboard = ({ navigation }: any) => {
	return (
		<ScreenLayout navigation={navigation}>
			<HomeStack.Navigator>
				<HomeStack.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={{
						headerShown: false,
					}}
				/>
				<HomeStack.Screen name="TotalEarnings" component={TotalEarnings} />
				<HomeStack.Screen name="TotalHours" component={TotalHours} />
			</HomeStack.Navigator>
		</ScreenLayout>
	)
}

export default Dashboard

const styles = StyleSheet.create({})

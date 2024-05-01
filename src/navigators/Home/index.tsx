import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainNavigator from '../Main'

import Notifications from '@/screens/home/notifications'
import Profile from '@/screens/home/profile'

const HomeStack = createNativeStackNavigator()

export function HomeNavigator() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name="MainNavigator"
				component={MainNavigator}
				options={{
					headerShown: false,
				}}
			/>
			<HomeStack.Screen
				name="Profile"
				component={Profile}
				options={{
					headerShown: false,
				}}
			/>
			<HomeStack.Screen
				name="Notifications"
				component={Notifications}
				// options={{
				// 	headerShown: false,
				// }}
			/>
		</HomeStack.Navigator>
	)
}

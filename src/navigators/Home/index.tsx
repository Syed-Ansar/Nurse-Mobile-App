import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainNavigator from '../Main'

import Notifications from '@/screens/home/notifications'
import Profile from '@/screens/home/profile'

const HomeStack = createNativeStackNavigator()

export function HomeNavigator() {
	return (
		<HomeStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<HomeStack.Screen name="MainNavigator" component={MainNavigator} />
			<HomeStack.Screen name="Profile" component={Profile} />
			<HomeStack.Screen name="Notifications" component={Notifications} />
		</HomeStack.Navigator>
	)
}

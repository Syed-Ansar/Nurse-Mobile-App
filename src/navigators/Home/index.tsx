import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainNavigator from '../Main'

import NotificationDetails from '@/screens/home/notification-details'
import Notifications from '@/screens/home/notifications'
import Profile from '@/screens/home/profile'
import JobDetails from '@/screens/home/job-details'

const HomeStack = createNativeStackNavigator()

export function HomeNavigator() {
	return (
		<HomeStack.Navigator
			initialRouteName="MainNavigator"
			screenOptions={{
				headerShown: false,
			}}
		>
			<HomeStack.Screen
				name="MainNavigator"
				component={MainNavigator}
				options={{
					animation: 'slide_from_left',
				}}
			/>
			<HomeStack.Screen name="Profile" component={Profile} />
			<HomeStack.Screen name="Notifications" component={Notifications} />
			<HomeStack.Screen name="NotificationDetails" component={NotificationDetails} />
			<HomeStack.Screen name="JobDetails" component={JobDetails} />
		</HomeStack.Navigator>
	)
}

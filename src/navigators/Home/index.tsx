import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainNavigator from '../Main'

import JobDetails from '@/screens/home/job-details'
import JobHistoryDetails from '@/screens/home/job-history-details'
import NotificationDetails from '@/screens/home/notification-details'
import Notifications from '@/screens/home/notifications'
import Profile from '@/screens/home/profile'

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
			<HomeStack.Screen name="JobHistoryDetails" component={JobHistoryDetails} />
		</HomeStack.Navigator>
	)
}

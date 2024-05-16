import Constants from 'expo-constants'
import { LogLevel, OneSignal } from 'react-native-onesignal'

import * as RootNavigation from '../navigators/root-navigation'

const useNotifications = () => {
	//const navigation = useNavigation();
	const initializeNotification = () => {
		// REMOTE NOTIFICATIONS SETUP END //

		// OneSignal Initialization
		OneSignal.initialize(Constants?.expoConfig?.extra?.oneSignalAppId)

		OneSignal.Debug.setLogLevel(LogLevel.Verbose)

		// requestPermission will show the native iOS or Android notification permission prompt.
		// We recommend removing the following code and instead using an In-App Message to prompt for notification permission
		OneSignal.Notifications.requestPermission(true)

		// Method for listening for notification clicks
		OneSignal.Notifications.addEventListener('click', (event) => {
			const notificationData: any = event.notification
			console.log('OneSignal: notification clicked:', notificationData)

			RootNavigation.navigate('NotificationDetails', {
				data: {
					id: 1,
					title: 'Congratulations Your Payment Is Successful 🎉',
					description: 'Lorem ipsum dolor.',
					date: 'Today',
				},
			})
		})
	}

	const getPermissionsAsync = () => {
		return OneSignal.Notifications.hasPermission()
	}

	const registerForNotitfication = async (userId: string) => {}

	const requestPermissionsAsync = () => {
		return OneSignal.Notifications.requestPermission(true)
	}

	const getSubscriptionIdAsync = () => {
		return OneSignal.User.pushSubscription.getPushSubscriptionId()
	}

	const addNotificationReceivedListener = () => {}

	const addNotificationResponseReceivedListener = () => {}

	const removeNotificationSubscription = () => {}

	return {
		initializeNotification,
		getPermissionsAsync,
		requestPermissionsAsync,
		getSubscriptionIdAsync,
		registerForNotitfication,
		addNotificationReceivedListener,
		addNotificationResponseReceivedListener,
		removeNotificationSubscription,
	}
}

export default useNotifications

import Constants from 'expo-constants'
import { LogLevel, OneSignal } from 'react-native-onesignal'

import * as RootNavigation from '../navigators/root-navigation'

import { sendNurseDetailsOneSignal } from '@/network/notification'
import { NurseUserInfo } from '@/types'

const useNotifications = () => {
	//const navigation = useNavigation();

	const getSubId = async () => {
		try {
			OneSignal.User.pushSubscription.addEventListener('change', (subscription) => {
				return subscription.current.id
			})
		} catch (error) {
			console.log('Error : getSubId ============', error)
			return null
		}
	}

	const addOneSignalTag = async (key: string, value: string) => {
		try {
			await OneSignal.User.addTag(key, value)
		} catch (error) {
			console.log('Error : addOneSignalTag  ============', error)
			return null
		}
	}

	const initializeNotification = async () => {
		// REMOTE NOTIFICATIONS SETUP END //

		// OneSignal Initialization
		OneSignal.initialize(Constants?.expoConfig?.extra?.oneSignalAppId)

		OneSignal.Debug.setLogLevel(LogLevel.Verbose)

		// requestPermission will show the native iOS or Android notification permission prompt.
		// We recommend removing the following code and instead using an In-App Message to prompt for notification permission

		OneSignal.Notifications.requestPermission(true)
		try {
			const subscriptionId = await getSubId()
			if (subscriptionId) {
				OneSignal.User.addTag('player_id', subscriptionId)
			} else {
				console.log('Failed to get OneSignal Subscription ID')
			}
		} catch (error) {
			console.error('Error initializing OneSignal: ', error)
		}

		// Method for listening for notification clicks
		OneSignal.Notifications.addEventListener('click', (event) => {
			const notificationData: any = event.notification
			RootNavigation.navigate('JobDetails', {
				id: 1,
				posted: 'today',
				status: 'Upcoming',
				facility: 'A Nurse required for ABC hospital',
				estimatedPaymentDate: '07/08/2023',
				facilityDetails: {
					ward: 'Nurse',
					workPeriod: 'Jul 08th 23',
					workHours: 12,
				},
				clockInTime: '2:00 PM',
				clockOutTime: '3:00 PM',
				avatar: '',
				name: 'Emily Ava',
				review: 5,
			})
		})
	}

	const getPermissionsAsync = () => {
		return OneSignal.Notifications.getPermissionAsync()
	}

	const registerForNotification = async (data: NurseUserInfo) => {
		try {
			const playerId = getSubscriptionIdAsync()
			console.log('playerId', playerId)

			sendNurseDetailsOneSignal({
				playerId,
			})
			OneSignal.login(data.id)
		} catch (error) {
			console.log('=========== Register For Notification Error =========', error)
		}
	}

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
		addOneSignalTag,
		initializeNotification,
		getPermissionsAsync,
		requestPermissionsAsync,
		getSubscriptionIdAsync,
		registerForNotification,
		addNotificationReceivedListener,
		addNotificationResponseReceivedListener,
		removeNotificationSubscription,
	}
}

export default useNotifications

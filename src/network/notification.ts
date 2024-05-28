import { nurseApiInstance } from '.'

import { NotificationRequest } from '@/types'

export const sendNurseDetailsOneSignal = (params: NotificationRequest) => {
	return nurseApiInstance.post('/notifications/onesignal', params)
}

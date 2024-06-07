import axios from 'axios'

import { nurseApiInstance } from '.'

import { BaseUrl } from '@/constants'
import { NotificationRequest } from '@/types'

export const sendNurseDetailsOneSignal = (params: NotificationRequest) => {
	return nurseApiInstance.post('/notifications/onesignal', params)
}

export const acceptNurseInvite = ({
	nurseId = '7c0b7349-0938-4449-9526-bb28cf51d76e',
	itemId = '551268',
	recordId = '353234',
	invite = 'ACCEPTED',
} = {}) => {
	return axios.post(`${BaseUrl}/consultancy/inviteResponse`, {
		nurseId,
		itemId,
		recordId,
		invite,
	})
}

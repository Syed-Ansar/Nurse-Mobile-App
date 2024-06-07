import axios from 'axios'

import { nurseApiInstance } from '.'

import { BaseUrl } from '@/constants'
import { NotificationRequest } from '@/types'

export const sendNurseDetailsOneSignal = (params: NotificationRequest) => {
	return nurseApiInstance.post('/notifications/onesignal', params)
}

export const acceptNurseInvite = ({
	nurseId = 'cfee65bd-e446-451b-a885-604c2bc67973',
	itemId = '553185',
	recordId = '354630',
	invite = 'ACCEPTED',
} = {}) => {
	return axios.post(`${BaseUrl}/consultancy/inviteResponse`, {
		nurseId,
		itemId,
		recordId,
		invite,
	})
}

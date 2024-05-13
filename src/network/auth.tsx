import { nurseApiInstance } from '.'

import { AuthLoginResponse, NurseUserInfo } from '@/types'

export const nurseLogin = (params: string) => {
	return nurseApiInstance.post<AuthLoginResponse>('/auth/login', params, {
		headers: {
			'content-type': 'application/json',
		},
	})
}
export const getNurse = () => {
	return nurseApiInstance.get<NurseUserInfo>('/me')
}

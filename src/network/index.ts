import axios, { AxiosError, AxiosInstance } from 'axios'
import * as SecureStore from 'expo-secure-store'

import { BaseUrl } from '@/constants'

export const nurseApiInstance: AxiosInstance = axios.create({
	baseURL: `${BaseUrl}/nurses`,
	timeout: 10000,
	headers: {
		'content-type': 'application/json',
	},
})

nurseApiInstance.interceptors.request.use(
	async (config) => {
		const accessToken = await SecureStore.getItemAsync('session')

		// const refreshToken = window.localStorage.getItem('flexy_refresh') || ''

		//   if (accessToken && refreshToken && isExpired(accessToken) && !isRefreshing) {
		// 	isRefreshing = true;
		// 	try {
		// 	  const tokenData = await refreshTokenReq(refreshToken);

		// 	  accessToken = tokenData?.data?.access_token;
		// 	  window.localStorage.setItem('flexy_access', accessToken);
		// 	  window.localStorage.setItem('flexy_refresh', tokenData?.data?.refresh_token);
		// 	  isRefreshing = false;
		// 	} catch (error) {
		// 	  isRefreshing = false;
		// 	  window.localStorage.removeItem('flexy_access');
		// 	  window.localStorage.removeItem('flexy_refresh');
		// 	}
		// 	window.location.reload();
		//   }

		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`
		}
		return config
	},
	(error) => Promise.reject(error),
)

nurseApiInstance.interceptors.response.use(
	function (response) {
		return response
	},
	function (error) {
		const errorMessage = {
			message: error.response.data.detail ?? 'Something Went Wrong',
		}
		return Promise.reject(errorMessage)
	},
)

import { jwtDecode } from 'jwt-decode'

export function isTokenExpired(token: string) {
	try {
		if (!token) {
			return true
		}

		const decodedToken: any = jwtDecode(token)
		const currentTime = Math.floor(Date.now() / 1000)

		if (decodedToken.exp && decodedToken.exp < currentTime) {
			return true
		} else {
			return false
		}
	} catch (error) {
		return true
	}
}

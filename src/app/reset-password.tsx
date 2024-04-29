import { router } from 'expo-router'
import { Text, View } from 'react-native'
import { useSession } from '../context/auth-context'

export default function ResetPassword() {
	const { signIn } = useSession()
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text
				onPress={() => {
					router.replace('/sign-in')
				}}
			>
				Sign In
			</Text>
		</View>
	)
}

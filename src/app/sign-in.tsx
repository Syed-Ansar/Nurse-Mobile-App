import { Text, View } from 'react-native'
import { useSession } from '../context/auth-context'
import SignInScreen from '../screens/sign-in'

export default function SignIn() {
	const { signIn } = useSession()
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<SignInScreen />
		</View>
	)
}

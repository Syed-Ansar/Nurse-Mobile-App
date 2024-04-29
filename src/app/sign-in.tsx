import { StatusBar, Text, View } from 'react-native'
import { useSession } from '../context/auth-context'
import SignInScreen from '../screens/sign-in'

export default function SignIn() {
	const { signIn } = useSession()
	return (
		<View
			style={{
				width: '100%',
				height: '100%',
			}}
		>
			<StatusBar barStyle={'light-content'} />
			<SignInScreen />
		</View>
	)
}

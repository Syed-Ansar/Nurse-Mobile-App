import { Pressable, StatusBar, Text, View } from 'react-native'

import { useSession } from '@/context/auth-context'
import SignInScreen from '@/screens/sign-in'
import { useNavigation } from '@react-navigation/native'

export default function SignIn({ navigation }: any) {
	const { signIn } = useSession()
	// const navigation = useNavigation()
	return (
		<View
			style={{
				width: '100%',
				height: '100%',
			}}
		>
			<StatusBar barStyle="light-content" />
			<SignInScreen navigation={navigation} />
		</View>
	)
}

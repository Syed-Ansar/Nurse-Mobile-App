import { StatusBar, View } from 'react-native'

import SignInScreen from '@/screens/sign-in'

export default function SignIn({ navigation }: any) {
	return (
		<View
			style={{
				width: '100%',
				height: '100%',
			}}
		>
			<SignInScreen navigation={navigation} />
		</View>
	)
}

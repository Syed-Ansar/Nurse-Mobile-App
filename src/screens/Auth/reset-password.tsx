import { View } from 'react-native'

import ResetPassword from '@/app/reset-password'

export default function ResetPasswordScreen({ navigation }: any) {
	return (
		<View style={{ flex: 1 }}>
			<ResetPassword navigation={navigation} />
		</View>
	)
}

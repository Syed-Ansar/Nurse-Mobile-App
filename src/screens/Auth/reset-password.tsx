import { router } from 'expo-router'
import { Text, View } from 'react-native'

import AuthHeader from '@/components/auth-header'
import GradientButton from '@/components/ui/Button'
import InputField from '@/components/ui/Input'
import { useSession } from '@/context/auth-context'

export default function ResetPassword({ navigation }: any) {
	return (
		<View>
			<View>
				<AuthHeader title="Reset Password" />

				<View style={{ marginHorizontal: 30, marginVertical: 40 }}>
					<InputField
						placeholder="Enter Password"
						label="New Password"
						styles={{
							marginBottom: 25,
						}}
					/>
					<InputField placeholder="Enter Confirm Password" label="Confirm Password" />

					<GradientButton
						title="Reset Password"
						onClick={() => {
							navigation.navigate('SignIn')
						}}
						buttonStyle={{
							marginTop: 40,
						}}
					/>
				</View>
			</View>
		</View>
	)
}

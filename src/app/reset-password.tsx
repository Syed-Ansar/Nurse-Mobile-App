import { router } from 'expo-router'
import { Text, View } from 'react-native'
import { useSession } from '../context/auth-context'
import AuthHeader from '@/components/auth-header'
import InputField from '@/components/ui/Input'
import GradientButton from '@/components/ui/Button'

export default function ResetPassword() {
	const { signIn } = useSession()
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
							router.replace('/sign-in')
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

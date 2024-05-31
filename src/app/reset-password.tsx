import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, View } from 'react-native'

import { useSession } from '../context/auth-context'

import AuthHeader from '@/components/auth-header'
import GradientButton from '@/components/ui/Button'
import InputField from '@/components/ui/Input'

type Props = {
	navigation: any
}

export default function ResetPassword({ navigation }: Props) {
	const { signIn } = useSession()
	return (
		<SafeAreaView>
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
				<ScrollView>
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
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AuthHeader from '@/components/auth-header'
import GradientButton from '@/components/ui/Button'
import InputField from '@/components/ui/Input'
import { useSession } from '@/context/auth-context'

const SignInScreen = ({ navigation }: any) => {
	const { signIn } = useSession()
	return (
		<View>
			<AuthHeader title="Sign In" />

			<View style={{ marginHorizontal: 30, marginVertical: 40 }}>
				<InputField
					placeholder="ID/ Passport"
					label="ID/ Passport"
					styles={{
						marginBottom: 25,
					}}
				/>
				<InputField placeholder="Enter Password" label="Enter Password" />
				<Text
					style={{
						color: '#3513DD',
						fontSize: 14,
						marginTop: 8,
						marginLeft: 'auto',
						fontWeight: '600',
					}}
					onPress={() => {
						navigation.navigate('ForgetPassword')
					}}
				>
					Forgot Password?
				</Text>

				<GradientButton
					title="Login"
					onClick={() => {
						signIn()
						console.log('clicked')
					}}
					buttonStyle={{
						marginTop: 40,
					}}
				/>
			</View>
		</View>
	)
}

export default SignInScreen

const styles = StyleSheet.create({})

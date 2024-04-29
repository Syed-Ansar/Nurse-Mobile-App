import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSession } from '@/context/auth-context'
import { router } from 'expo-router'
import AuthHeader from '@/components/auth-header'
import InputField from '@/components/ui/Input'
import GradientButton from '@/components/ui/Button'

type Props = {}

const SignInScreen = (props: Props) => {
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
						router.replace('/forget-password')
					}}
				>
					Forgot Password?
				</Text>

				<GradientButton
					title="Login"
					onClick={() => {
						signIn()
						router.replace('/')
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

import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSession } from '@/context/auth-context'
import { router } from 'expo-router'
import AuthHeader from '@/components/auth-header'
import InputField from '@/components/ui/Input'
import GradientButton from '@/components/ui/Button'

const ForgetPasswordScreen = () => {
	const { signIn } = useSession()
	return (
		<View>
			<AuthHeader title="Forget Password" />
			<View style={{ marginHorizontal: 30, marginVertical: 40 }}>
				<InputField placeholder="Email/SANC" label="Email/SANC" />

				<GradientButton
					title="Confirm"
					onClick={() => {
						signIn()
						router.replace('/reset-password')
					}}
					buttonStyle={{
						marginTop: 40,
					}}
				/>
			</View>
		</View>
	)
}

export default ForgetPasswordScreen

const styles = StyleSheet.create({})

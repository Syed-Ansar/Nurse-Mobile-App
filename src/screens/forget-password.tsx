import { router } from 'expo-router'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import AuthHeader from '@/components/auth-header'
import GradientButton from '@/components/ui/Button'
import InputField from '@/components/ui/Input'
import { useSession } from '@/context/auth-context'

const ForgetPasswordScreen = ({ navigation }: any) => {
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
						navigation.navigate('ResetPassword')
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

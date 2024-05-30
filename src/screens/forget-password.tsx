import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native'

import AuthHeader from '@/components/auth-header'
import GradientButton from '@/components/ui/Button'
import InputField from '@/components/ui/Input'

const ForgetPasswordScreen = ({ navigation }: any) => {
	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<ScrollView>
				<View>
					<AuthHeader title="Forget Password" />
					<View style={{ marginHorizontal: 30, marginVertical: 40 }}>
						<InputField placeholder="Email/SANC" label="Email/SANC" />

						<GradientButton
							title="Confirm"
							onClick={() => {
								navigation.navigate('ResetPassword')
							}}
							buttonStyle={{
								marginTop: 40,
							}}
						/>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default ForgetPasswordScreen

const styles = StyleSheet.create({})

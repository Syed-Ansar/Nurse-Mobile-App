import React, { useState } from 'react'
import {
	ActivityIndicator,
	KeyboardAvoidingView,
	Platform,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import AuthHeader from '@/components/auth-header'
import { showToast } from '@/components/common/toast'
import GradientButton from '@/components/ui/Button'
import InputField from '@/components/ui/Input'
import { useSession } from '@/context/auth-context'
import { nurseLogin } from '@/network/auth'

const SignInScreen = ({ navigation }: any) => {
	const { signIn } = useSession()
	const [idNumber, setIdNumber] = useState('')
	const [password, setPassword] = useState('')
	const [isLogging, setIsLogging] = useState(false)

	const handleLogin = async (idNumber: string, password: string) => {
		if (!idNumber || !password) {
			showToast('Id / Passport and password are required!')
			return
		}
		const data = JSON.stringify({
			idNumber: idNumber?.trimStart(),
			password: password?.trimEnd(),
		})
		try {
			setIsLogging(true)
			const response = await nurseLogin(data)
			signIn(response.data)
			setIsLogging(false)
		} catch (error: any) {
			showToast(error.message)
		} finally {
			setIsLogging(false)
		}
	}
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.keyboardContainer}
		>
			<ScrollView>
				<AuthHeader title="Sign In" />

				<View style={styles.fieldsContainer}>
					<InputField
						placeholder="ID/ Passport"
						label="ID/ Passport"
						props={{
							autoFocus: true,
						}}
						styles={styles.idInputContainer}
						onChange={(value) => {
							setIdNumber(value)
						}}
					/>
					<InputField
						placeholder="Enter Password"
						label="Enter Password"
						props={{
							secureTextEntry: true,
							onSubmitEditing() {
								handleLogin(idNumber, password)
							},
						}}
						onChange={(value) => {
							setPassword(value)
						}}
					/>
					<Pressable
						onPress={() => {
							navigation.navigate('ForgetPassword')
						}}
					>
						<Text style={styles.forgetPasswordButton}>Forgot Password?</Text>
					</Pressable>

					{!isLogging ? (
						<GradientButton
							title="Login"
							onClick={() => {
								handleLogin(idNumber, password)
							}}
							buttonStyle={styles.submitButton}
						/>
					) : (
						<View style={styles.loadingButton}>
							<ActivityIndicator size="small" color="#7450FE" />
						</View>
					)}
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default SignInScreen

const styles = StyleSheet.create({
	keyboardContainer: {
		flex: 1,
	},
	fieldsContainer: { marginHorizontal: 30, marginVertical: 40 },
	idInputContainer: {
		marginBottom: 25,
	},
	forgetPasswordButton: {
		color: '#3513DD',
		fontSize: 14,
		marginTop: 8,
		marginLeft: 'auto',
		fontWeight: '600',
	},
	submitButton: {
		marginTop: 40,
	},
	loadingButton: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#d3d3d3',
		padding: 12,
		borderRadius: 8,
		marginTop: 40,
	},
})

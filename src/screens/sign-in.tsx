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
		} catch (error) {
			console.log('Error', error)
		} finally {
			setIsLogging(false)
		}
	}
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{
				flex: 1,
			}}
		>
			<ScrollView>
				<AuthHeader title="Sign In" />

				<View style={{ marginHorizontal: 30, marginVertical: 40 }}>
					<InputField
						placeholder="ID/ Passport"
						label="ID/ Passport"
						props={{
							autoFocus: true,
						}}
						styles={{
							marginBottom: 25,
						}}
						onChange={(value) => {
							setIdNumber(value)
						}}
					/>
					<InputField
						placeholder="Enter Password"
						label="Enter Password"
						props={{
							secureTextEntry: true,
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
						<Text
							style={{
								color: '#3513DD',
								fontSize: 14,
								marginTop: 8,
								marginLeft: 'auto',
								fontWeight: '600',
							}}
						>
							Forgot Password?
						</Text>
					</Pressable>

					{!isLogging ? (
						<GradientButton
							title="Login"
							onClick={() => {
								const accessToken = handleLogin(idNumber, password)
								console.log(accessToken)
							}}
							buttonStyle={{
								marginTop: 40,
							}}
						/>
					) : (
						<View
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: '#d3d3d3',
								padding: 12,
								borderRadius: 8,
								marginTop: 40,
							}}
						>
							<ActivityIndicator size="small" color="#7450FE" />
						</View>
					)}
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default SignInScreen

const styles = StyleSheet.create({})

import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AuthHeaderSvg from '../../assets/svg/auth-header.svg'
import { defaultStyles } from '@/styles'
import { LinearGradient } from 'expo-linear-gradient'
import GradientButton from '@/ui/Button'
import InputField from './ui/Input'

type Props = {}

const AuthHeader = (props: Props) => {
	return (
		<View>
			<LinearGradient colors={['#7450FE', '#3513DD']} style={{}}>
				<SafeAreaView
					style={{
						height: 200,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<View
						style={{
							width: '100%',
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								...defaultStyles.text,
								fontWeight: '700',
								fontSize: 24,
								marginBottom: 5,
							}}
						>
							Sign In
						</Text>
						<Text
							style={{
								...defaultStyles.text,
								fontSize: 18,
							}}
						>
							Hii Welcome Back 👋
						</Text>
					</View>
				</SafeAreaView>
			</LinearGradient>

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
				>
					Forgot Password?
				</Text>

				<GradientButton
					title="Login"
					onClick={() => {
						console.log('Clicked')
					}}
					buttonStyle={{
						marginTop: 40,
					}}
				/>
			</View>
		</View>
	)
}

export default AuthHeader

const styles = StyleSheet.create({})

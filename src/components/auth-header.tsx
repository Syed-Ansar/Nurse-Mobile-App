import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AuthHeaderSvg from '../../assets/svg/auth-header.svg'
import { defaultStyles } from '@/styles'
import { LinearGradient } from 'expo-linear-gradient'
import GradientButton from './ui/Button'

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
			<View style={{ marginVertical: 20, marginHorizontal: 30 }}>
				<Text
					style={{
						color: '#1B254B',
						fontSize: 12,
					}}
				>
					ID/ Passport
				</Text>
				<TextInput
					placeholder="Enter ID/ Passport"
					style={{
						width: '100%',
						height: 48,
						borderColor: '#E5E7EB',
						borderWidth: 1,
						borderRadius: 16,
						marginTop: 10,
						paddingHorizontal: 15,
					}}
				/>
			</View>
			<View style={{ marginHorizontal: 30 }}>
				<Text
					style={{
						color: '#1B254B',
						fontSize: 12,
					}}
				>
					Password
				</Text>
				<TextInput
					placeholder="Enter Password"
					style={{
						width: '100%',
						height: 48,
						borderColor: '#E5E7EB',
						borderWidth: 1,
						borderRadius: 16,
						marginTop: 10,
						paddingHorizontal: 15,
					}}
				/>
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
				<View
					style={{
						marginTop: 40,
					}}
				>
					<GradientButton
						title="Login"
						onClick={() => {
							console.log('Clicked')
						}}
					/>
				</View>
			</View>
		</View>
	)
}

export default AuthHeader

const styles = StyleSheet.create({})

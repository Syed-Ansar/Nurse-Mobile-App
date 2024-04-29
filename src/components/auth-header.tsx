import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/styles'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
	title: string
}

const AuthHeader = ({ title }: Props) => {
	return (
		<View>
			<StatusBar barStyle={'light-content'} />
			<LinearGradient colors={['#7450FE', '#3513DD']}>
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
							{title}
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
		</View>
	)
}

export default AuthHeader

const styles = StyleSheet.create({})
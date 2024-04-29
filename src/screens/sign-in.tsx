import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSession } from '@/context/auth-context'
import { router } from 'expo-router'
import AuthHeader from '@/components/auth-header'
import { SafeAreaProvider } from 'react-native-safe-area-context'

type Props = {}

const SignIn = (props: Props) => {
	const { signIn } = useSession()
	return (
		<View>
			<AuthHeader />
			{/* <Text
				onPress={() => {
					signIn()
					router.replace('/')
				}}
			>
				Sign In
			</Text>
			<Text
				onPress={() => {
					router.replace('/forget-password')
				}}
			>
				Forget Password
			</Text>
			<Text
				onPress={() => {
					router.replace('/reset-password')
				}}
			>
				Rest Password
			</Text> */}
		</View>
	)
}

export default SignIn

const styles = StyleSheet.create({})

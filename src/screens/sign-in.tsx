import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSession } from '@/context/auth-context'
import { router } from 'expo-router'

type Props = {}

const SignIn = (props: Props) => {
	const { signIn } = useSession()
	return (
		<View>
			<Text>SignIn Screen</Text>
			<Text
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
			</Text>
		</View>
	)
}

export default SignIn

const styles = StyleSheet.create({})

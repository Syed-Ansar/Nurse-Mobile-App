import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ForgetPassword from '@/screens/Auth/forget-password'
import ResetPassword from '@/screens/Auth/reset-password'
import SignIn from '@/screens/Auth/sign-in'

const AuthStack = createNativeStackNavigator()

const AuthNavigator = () => {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen
				name="SignIn"
				component={SignIn}
				options={{
					headerShown: false,
				}}
			/>
			<AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
			<AuthStack.Screen name="ResetPassword" component={ResetPassword} />
		</AuthStack.Navigator>
	)
}

export default AuthNavigator

const styles = StyleSheet.create({})

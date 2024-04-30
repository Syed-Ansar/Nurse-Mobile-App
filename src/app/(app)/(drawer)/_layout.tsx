import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const DrawerLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="(stacks)" options={{ headerShown: true }} />
		</Stack>
	)
}

export default DrawerLayout

const styles = StyleSheet.create({})

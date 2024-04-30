import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = object

const StackLayout = (props: Props) => {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		/>
	)
}

export default StackLayout

const styles = StyleSheet.create({})

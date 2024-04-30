import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

type Props = {}

const Help = (props: Props) => {
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
			<Button
				title="Go back"
				onPress={() => {
					router.back()
				}}
			/>
			<Text>Help</Text>
		</View>
	)
}

export default Help

const styles = StyleSheet.create({})

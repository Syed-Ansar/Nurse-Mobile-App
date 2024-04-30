import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

type Props = object

const Settings = (props: Props) => {
	const navigation = useNavigation()
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
			<Button
				title="Go back"
				onPress={() => {
					navigation.goBack()
				}}
			/>
			<Text>Settings</Text>
		</View>
	)
}

export default Settings

const styles = StyleSheet.create({})

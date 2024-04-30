import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = object

const Settings = (props: Props) => {
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
			<Text>Settings</Text>
		</View>
	)
}

export default Settings

const styles = StyleSheet.create({})

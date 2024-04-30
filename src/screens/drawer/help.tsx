import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

type Props = object

const Help = (props: Props) => {
	const navigation = useNavigation()
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
			<Button
				title="Go back"
				onPress={() => {
					navigation.goBack()
				}}
			/>
			<Text>Help</Text>
		</View>
	)
}

export default Help

const styles = StyleSheet.create({})

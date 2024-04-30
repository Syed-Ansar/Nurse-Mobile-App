import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

type Props = object

const Wallet = (props: Props) => {
	const navigation = useNavigation()
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
			<Button
				title="Go back"
				onPress={() => {
					navigation.goBack()
				}}
			/>
			<Text>Wallet</Text>
		</View>
	)
}

export default Wallet

const styles = StyleSheet.create({})

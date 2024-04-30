import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = object

const Wallet = (props: Props) => {
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
			<Text>Wallet</Text>
		</View>
	)
}

export default Wallet

const styles = StyleSheet.create({})

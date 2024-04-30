import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ScreenLayout from '../screen-layout'

type Props = object

const Transactions = (props: Props) => {
	return (
		<ScreenLayout>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Transactions</Text>
			</View>
		</ScreenLayout>
	)
}

export default Transactions

const styles = StyleSheet.create({})

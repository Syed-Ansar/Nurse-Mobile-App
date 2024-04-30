import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScreenLayout from '../screen-layout'

type Props = object

const Invoices = (props: Props) => {
	return (
		<ScreenLayout>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Invoices</Text>
			</View>
		</ScreenLayout>
	)
}

export default Invoices

const styles = StyleSheet.create({})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScreenLayout from '../screen-layout'

type Props = object

const Compliance = (props: Props) => {
	return (
		<ScreenLayout>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Compliance</Text>
			</View>
		</ScreenLayout>
	)
}

export default Compliance

const styles = StyleSheet.create({})

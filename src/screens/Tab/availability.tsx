import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ScreenLayout from '../screen-layout'

type Props = object

const Availability = ({ navigation }: any) => {
	return (
		<ScreenLayout navigation={navigation}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Availability</Text>
			</View>
		</ScreenLayout>
	)
}

export default Availability

const styles = StyleSheet.create({})

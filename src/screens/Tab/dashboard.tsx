import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import HomeScreen from '../home'
import ScreenLayout from '../screen-layout'

type Props = object

const Dashboard = ({ navigation }: any) => {
	return (
		<ScreenLayout navigation={navigation}>
			<View
				style={{
					paddingHorizontal: 15,
					paddingVertical: 20,
				}}
			>
				<HomeScreen />
			</View>
		</ScreenLayout>
	)
}

export default Dashboard

const styles = StyleSheet.create({})

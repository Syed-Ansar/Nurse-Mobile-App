import React from 'react'
import { StyleSheet, View } from 'react-native'

import HomeScreen from '@/screens/home'
import { Stack } from 'expo-router'

type Props = object

const Home = (props: Props) => {
	return (
		<View
			style={{
				paddingHorizontal: 15,
				paddingVertical: 20,
			}}
		>
			<HomeScreen />
		</View>
	)
}

export default Home

const styles = StyleSheet.create({})

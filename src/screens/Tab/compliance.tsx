import Constants from 'expo-constants'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'

import ScreenLayout from '../screen-layout'

type Props = object

const Compliance = ({ navigation }: any) => {
	return (
		<ScreenLayout navigation={navigation}>
			{/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Compliance</Text>
			</View> */}
			<SafeAreaView style={{ flex: 1 }}>
				<WebView
					source={{ uri: 'https://reactnative.dev/' }}
					renderLoading={() => {
						return (
							<Text
								style={{
									color: 'black',
								}}
							>
								Loading....
							</Text>
						)
					}}
				/>
			</SafeAreaView>
		</ScreenLayout>
	)
}

export default Compliance

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
	},
})

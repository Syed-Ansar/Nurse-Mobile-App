import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import GradientContainer from '../common/gradientContainer'

const Splash = () => {
	return (
		<GradientContainer containerStyles={{}}>
			<View style={styles.container}>
				<Text>Splash</Text>
			</View>
		</GradientContainer>
	)
}

export default Splash

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
})

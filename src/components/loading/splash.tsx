import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import GradientContainer from '../common/gradientContainer'

const Splash = () => {
	return (
		<GradientContainer containerStyles={styles.gradientStyle}>
			<View style={styles.container}>
				<Image source={require('@/assets/img/logo.png')} style={{}} />
			</View>
		</GradientContainer>
	)
}

export default Splash

const styles = StyleSheet.create({
	gradientStyle: {
		flex: 1,
	},
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
})

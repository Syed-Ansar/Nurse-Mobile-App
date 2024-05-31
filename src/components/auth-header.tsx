import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import GradientContainer from './common/gradientContainer'

type Props = {
	title: string
}

const AuthHeader = ({ title }: Props) => {
	return (
		<GradientContainer
			containerStyles={{
				flex: 1,
			}}
		>
			<SafeAreaView style={styles.container}>
				<View style={styles.headerContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.description}>Hii Welcome Back 👋</Text>
				</View>
			</SafeAreaView>
		</GradientContainer>
	)
}

export default AuthHeader

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerContainer: {
		width: '100%',
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontWeight: '700',
		fontSize: 24,
		marginBottom: 5,
	},
	description: {
		color: 'white',
		fontSize: 18,
	},
})

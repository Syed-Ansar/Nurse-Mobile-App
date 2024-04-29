import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { defaultStyles } from '@/styles'

type Props = {
	title: string
	buttonStyle?: StyleSheet
	titleStyle?: StyleSheet
	onClick?: () => void
}

const GradientButton = ({ title, buttonStyle, titleStyle, onClick }: Props) => {
	return (
		<TouchableWithoutFeedback onPress={onClick}>
			<LinearGradient
				colors={['#7450FE', '#3513DD']}
				style={{
					...buttonStyle,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: 16,
					height: 48,
				}}
			>
				<Text
					style={{
						...titleStyle,
						...defaultStyles.text,
						fontSize: 18,
					}}
				>
					{title}
				</Text>
			</LinearGradient>
		</TouchableWithoutFeedback>
	)
}

export default GradientButton

const styles = StyleSheet.create({})

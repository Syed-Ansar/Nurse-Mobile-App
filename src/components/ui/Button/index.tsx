import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, TextStyle, TouchableWithoutFeedback, ViewStyle } from 'react-native'

type Props = {
	title: string
	titleColor?: string
	buttonBackgroundColor?: string
	buttonStyle?: ViewStyle
	titleStyle?: TextStyle
	onClick?: () => void
	radius?: number
	height?: number
	fontSize?: number
}

const GradientButton = ({
	title,
	buttonStyle,
	titleStyle,
	onClick,
	radius = 16,
	height = 48,
	fontSize = 18,
	titleColor = '#ffffff',
	buttonBackgroundColor,
}: Props) => {
	return (
		<TouchableWithoutFeedback onPress={onClick}>
			<LinearGradient
				colors={buttonBackgroundColor ? [buttonBackgroundColor] : ['#7450FE', '#3513DD']}
				style={{
					...buttonStyle,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: radius,
					height,
				}}
			>
				<Text
					style={{
						...titleStyle,
						fontSize,
						color: titleColor,
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

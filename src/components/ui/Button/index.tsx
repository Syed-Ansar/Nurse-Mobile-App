import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {
	StyleSheet,
	Text,
	TextStyle,
	TouchableWithoutFeedback,
	View,
	ViewStyle,
} from 'react-native'

import { defaultStyles } from '@/styles'

type Props = {
	title: string
	buttonStyle?: ViewStyle
	titleStyle?: TextStyle
	onClick?: () => void
	radius?: number
	height?: number
}

const GradientButton = ({
	title,
	buttonStyle,
	titleStyle,
	onClick,
	radius = 16,
	height = 48,
}: Props) => {
	return (
		<TouchableWithoutFeedback onPress={onClick}>
			<LinearGradient
				colors={['#7450FE', '#3513DD']}
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

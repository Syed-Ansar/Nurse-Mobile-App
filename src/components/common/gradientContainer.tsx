import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode } from 'react'
import { ViewStyle } from 'react-native'

type Props = {
	children: ReactNode
	containerStyles?: ViewStyle
}

const GradientContainer = ({ children, containerStyles }: Props) => {
	return (
		<LinearGradient colors={['#7450FE', '#3513DD']} style={containerStyles}>
			{children}
		</LinearGradient>
	)
}

export default GradientContainer

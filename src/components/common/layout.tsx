import { MaterialIcons } from '@expo/vector-icons'
import React, { ReactNode } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { fontSize } from '@/constants/tokens'
import { horizontalScale, verticalScale } from '@/utils/responsive'

type Props = {
	children: ReactNode
	navigation: any
	headerTitle?: string
}

const Layout = ({ children, navigation, headerTitle }: Props) => {
	const backPressHandler = () => {
		navigation.goBack()
	}

	return (
		<View style={styles.container}>
			{headerTitle ? (
				<View style={styles.header}>
					<Pressable onPress={backPressHandler}>
						<MaterialIcons name="keyboard-backspace" size={24} color="black" />
					</Pressable>
					<Text style={styles.headerTitle}>{headerTitle}</Text>
				</View>
			) : null}
			{children}
		</View>
	)
}

export default Layout

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: horizontalScale(15),
		paddingBottom: 0,
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		gap: 8,
		paddingBottom: verticalScale(14),
	},
	headerTitle: {
		fontSize: fontSize.lg,
		fontWeight: '700',
	},
})

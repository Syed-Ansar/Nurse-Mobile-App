import { Feather } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { fontSize } from '@/constants/tokens'
import { utilsStyles } from '@/styles'
import { NotificationType } from '@/types'
import { SCREEN_WIDTH } from '@/utils/responsive'

type Props = {
	data: NotificationType
	index: number
}

const Notification = ({ data, index }: Props) => {
	const { date, description, title } = data
	return (
		<View style={styles.notificationContainer}>
			<View style={styles.notificationMainContainer}>
				<View style={styles.notificationIndexes}>
					<View style={styles.notificationIndexContent}>
						<Text style={styles.notificationIndexContentText}>{index}</Text>
					</View>
					<View>
						<Text style={styles.notificationTitle}>{title}</Text>
					</View>
				</View>
				<View style={styles.notificationDescription}>
					<View>
						<Text style={styles.descriptionText}>{description}</Text>
					</View>
					<View style={styles.icon}>
						<Feather name="chevron-right" size={24} color="black" />
					</View>
				</View>
				<View>
					<Text style={styles.notificationTime}>{date}</Text>
				</View>
			</View>
		</View>
	)
}

export default Notification

const styles = StyleSheet.create({
	notificationContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		alignSelf: 'flex-start',
		justifyContent: 'flex-start',
		gap: 10,
		width: '100%',
	},
	notificationIndexes: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		gap: 10,
	},
	notificationIndexContent: {
		...utilsStyles.flexRowCenter,
		height: 30,
		width: 30,
		borderWidth: 1.5,
		borderColor: '#E8E8E8',
		borderRadius: 50,
	},
	notificationIndexContentText: {
		fontWeight: '700',
	},
	notificationMainContainer: {
		width: '100%',
	},
	notificationTitle: {
		fontSize: fontSize.xsm,
		fontWeight: '600',
		maxWidth: '90%',
		lineHeight: 20,
	},
	notificationDescription: {
		width: '100%',
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	descriptionText: {
		width: '100%',
		fontSize: fontSize.xxs,
		fontWeight: '400',
		marginRight: 'auto',
		marginLeft: 42,
	},
	notificationTime: {
		fontSize: fontSize.xxs,
		fontWeight: '500',
		marginLeft: 42,
	},
	icon: {
		display: 'flex',
		alignSelf: 'flex-end',
		marginLeft: 'auto',
	},
})

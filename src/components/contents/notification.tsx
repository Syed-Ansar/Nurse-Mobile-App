import { Feather } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import { fontSize } from '@/constants/tokens'
import { utilsStyles } from '@/styles'
import { NotificationType } from '@/types'

type Props = {
	data: NotificationType
	index: number
	navigation: any
	route: any
}

const Notification = ({ data, index, navigation, route }: Props) => {
	const { id, date, description, title } = data

	return (
		<TouchableWithoutFeedback
			style={styles.notificationContainer}
			onPress={() => {
				navigation.navigate('NotificationDetails', {
					id,
					data,
				})
			}}
		>
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
		</TouchableWithoutFeedback>
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

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ScreenLayout from '../screen-layout'

import Layout from '@/components/common/layout'
import { fontSize } from '@/constants/tokens'

type Props = { navigation: any; route: any }

const NotificationDetails = ({ navigation, route }: Props) => {
	const { data } = route.params
	const { date, description, title } = data

	return (
		<ScreenLayout navigation={navigation}>
			<Layout navigation={navigation} headerTitle="Notification Detail">
				<View style={styles.container}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.description}>{description}</Text>
					<Text style={styles.date}>{date}</Text>
				</View>
			</Layout>
		</ScreenLayout>
	)
}

export default NotificationDetails

const styles = StyleSheet.create({
	container: {},
	title: {
		fontSize: fontSize.sm,
		fontWeight: '600',
		marginVertical: 10,
	},
	description: {
		marginVertical: 5,
		fontWeight: '500',
	},
	date: {
		marginVertical: 5,
		fontWeight: '400',
	},
})

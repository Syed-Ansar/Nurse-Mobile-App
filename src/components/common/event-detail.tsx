import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { fontSize } from '@/constants/tokens'

type EventDetailType = {
	startTime: string
	endTime: string
	hospital: string
}

type Props = {
	evenDetail: EventDetailType
}

const EventDetail = ({ evenDetail }: Props) => {
	const { startTime, endTime, hospital } = evenDetail
	return (
		<View
			style={{
				backgroundColor: '#9b84f5',
				borderRadius: 8,
				padding: 10,
				display: 'flex',
				marginVertical: 10,
				gap: 10,
			}}
		>
			<Text
				style={{
					color: 'white',
				}}
			>
				{startTime} -- {endTime} -- 8 hours stamped
			</Text>
			<Text
				style={{
					color: 'white',
					fontSize: fontSize.lg,
				}}
			>
				{hospital}
			</Text>
		</View>
	)
}

export default EventDetail

const styles = StyleSheet.create({})

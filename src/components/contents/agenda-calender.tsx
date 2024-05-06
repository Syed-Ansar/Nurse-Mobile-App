import dayjs from 'dayjs'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Agenda, AgendaEntry, AgendaSchedule } from 'react-native-calendars'

import AgendaItem from './agendaItem'

type Props = {
	data: AgendaSchedule
}

export const renderItem: (reservation: AgendaEntry, isFirst: boolean) => JSX.Element = (
	reservation,
) => <AgendaItem item={reservation} />

const AgendaCalender = ({ data }: Props) => {
	return (
		// <View style={styles.container}>
		<Agenda
			items={data}
			staticHeader
			animateScroll
			showClosingKnob
			scrollEnabled={false}
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
			automaticallyAdjustKeyboardInsets
			renderItem={renderItem}
			renderKnob={() => {
				return <View style={styles.knowStyles} />
			}}
			renderEmptyData={() => {
				return <Text style={styles.itemTextNoEvent}>No event for the day.</Text>
			}}
			theme={{
				selectedDayTextColor: 'white',
				selectedDayBackgroundColor: '#3513DD',
				dotColor: '#3513DD',
				backgroundColor: 'white',
				todayTextColor: '#3513DD',
				dayTextColor: 'black',
			}}
			style={{
				borderRadius: 10,
			}}
		/>
		// </View>
	)
}

export default AgendaCalender

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	itemTextNoEvent: {
		color: 'black',
		marginTop: 30,
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '600',
	},
	knowStyles: {
		backgroundColor: '#00000066',
		height: 3,
		width: 50,
		marginTop: 15,
		borderRadius: 40,
	},
})

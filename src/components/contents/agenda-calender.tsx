import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Agenda, AgendaEntry } from 'react-native-calendars'

import AgendaItem from './agendaItem'

type Props = {
	data: any
}

export const renderItem: (reservation: AgendaEntry, isFirst: boolean) => JSX.Element = (
	reservation,
) => <AgendaItem item={reservation} />

const AgendaCalender = ({ data }: Props) => {
	return (
		<Agenda
			automaticallyAdjustKeyboardInsets
			showClosingKnob
			staticHeader
			animateScroll
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
			renderItem={renderItem}
			renderKnob={() => {
				return <View style={styles.knowStyles} />
			}}
			renderEmptyData={() => {
				return <Text style={styles.itemTextNoEvent}>No event for the day.</Text>
			}}
			stickyHeaderIndices={[1, 7]}
			directionalLockEnabled
			items={data}
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
	)
}

export default AgendaCalender

const styles = StyleSheet.create({
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

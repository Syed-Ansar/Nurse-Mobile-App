import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { CalendarList } from 'react-native-calendars'

import ScreenLayout from '../screen-layout'

import { useStore } from '@/store'

const Availability = ({ navigation }: any) => {
	const { markedAvailabilityDates } = useStore()

	return (
		<ScreenLayout navigation={navigation}>
			<View style={styles.mainContainer}>
				<CalendarList
					hideExtraDays
					horizontal
					pastScrollRange={50}
					futureScrollRange={50}
					animateScroll
					pagingEnabled
					minDate={new Date().toISOString()}
					allowSelectionOutOfRange
					markingType="period"
					markedDates={markedAvailabilityDates}
				/>
			</View>

			<Pressable
				style={styles.floatingButton}
				onPress={() => navigation.navigate('AvailabilityModal')}
			>
				<AntDesign name="plus" size={24} color="white" />
			</Pressable>
		</ScreenLayout>
	)
}

export default Availability

const styles = StyleSheet.create({
	mainContainer: {
		position: 'relative',
	},
	floatingButton: {
		position: 'absolute',
		bottom: 20,
		right: 20,
		backgroundColor: '#7450FE',
		padding: 20,
		borderRadius: 20,
	},
})

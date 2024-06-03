import { AntDesign } from '@expo/vector-icons'
import dayjs from 'dayjs'
import React, { useMemo, useState } from 'react'
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { CalendarList } from 'react-native-calendars'

import ScreenLayout from '../screen-layout'

import { fontSize } from '@/constants/tokens'
import { useStore } from '@/store'
import { horizontalScale, verticalScale } from '@/utils/responsive'
import EventDetail from '@/components/common/event-detail'
import Separator from '@/components/contents/separator'

const availabilityDates = [
	{
		startTime: '12 : 00',
		endTime: '20 : 00',
		hospital: 'ABC Hospital',
		priority: 1,
		date: '2024-06-25',
	},
	{
		startTime: '01 : 30',
		endTime: '22 : 30',
		hospital: 'HSB Hospital',
		priority: 2,
		date: '2024-06-25',
	},
	{
		startTime: '02 : 30',
		endTime: '22 : 30',
		hospital: 'HSB Hospital',
		priority: 2,
		date: '2024-06-25',
	},
	{
		startTime: '12 : 00',
		endTime: '20 : 00',
		hospital: 'ABC Hospital',
		priority: 1,
		date: '2024-06-03',
	},
]

const Availability = ({ navigation }: any) => {
	const { markedAvailabilityDates } = useStore()
	const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString())

	const availabilitiesToday = useMemo(() => {
		return availabilityDates.filter(
			(item) => item.date === dayjs(selectedDate).format('YYYY-MM-DD'),
		)
	}, [selectedDate])

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
					theme={{
						selectedDayTextColor: 'white',
						selectedDayBackgroundColor: '#7450FE',
						dotColor: '#7450FE',
						backgroundColor: 'white',
						todayTextColor: '#3513DD',
						dayTextColor: 'black',
					}}
					onDayPress={(date) => {
						setSelectedDate(date.dateString)
					}}
				/>
				<View style={styles.eventView}>
					<View style={styles.eventDetailContainer}>
						<Text style={styles.eventHeadingText}>Events on -</Text>
						<Text style={styles.eventDate}>{dayjs(selectedDate).format('dddd D MMMM')}</Text>
					</View>

					<FlatList
						data={availabilitiesToday}
						showsVerticalScrollIndicator={false}
						renderItem={({ item, index }) => {
							return <EventDetail evenDetail={item} />
						}}
						ItemSeparatorComponent={() => {
							return (
								<View style={styles.separatorContainer}>
									<Separator />
								</View>
							)
						}}
					/>
				</View>
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
		flex: 1,
	},
	floatingButton: {
		position: 'absolute',
		bottom: 20,
		right: 20,
		backgroundColor: '#7450FE',
		padding: 20,
		borderRadius: 20,
	},
	eventView: {
		padding: horizontalScale(10),
		flex: 1,
	},
	eventDetailContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	eventHeadingText: {
		fontSize: fontSize.base,
		paddingBottom: 10,
	},
	eventDate: { fontSize: fontSize.lg, color: '#3513DD', paddingBottom: 10 },
	separatorContainer: {},
})

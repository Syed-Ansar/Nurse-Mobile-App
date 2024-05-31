import DatePicker from '@/components/common/date-picker'
import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

type Props = {
	navigation: any
}

const AvailabilityModal = ({ navigation }: Props) => {
	const [date, setDate] = useState(new Date())
	const [time, setTime] = useState(new Date())
	const [showDate, setShowDate] = useState(false)
	const [showTime, setShowTime] = useState(false)

	const onDateChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate

		setShowDate(false)
		setDate(currentDate)
		console.log('date', currentDate)
	}
	const onTimeChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate

		setShowTime(false)
		setTime(currentDate)
		console.log('Time', currentDate)
	}

	const showDatePicker = () => {
		setShowDate(true)
	}
	const showTimePicker = () => {
		setShowTime(true)
	}
	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<ScrollView
				style={{
					flex: 1,
				}}
			>
				<View
					style={{
						flex: 1,
						padding: 15,
						paddingBottom: 0,
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '500',
							borderBottomWidth: 1,
							paddingBottom: 5,
						}}
					>
						Add Availability
					</Text>
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<View
						style={{
							margin: 20,
							flex: 1,
						}}
					>
						<View>
							<DatePicker
								label="Start Date"
								date={new Date('2024-10-07')}
								onDateChange={(value) => {
									const dateSelected = dayjs(value).format('dddd D MMMM')
									console.log('Date value', dateSelected)
								}}
							/>
						</View>
					</View>
					<View
						style={{
							margin: 20,
							flex: 1,
						}}
					>
						<Text
							style={{
								marginBottom: 10,
							}}
						>
							Start Time
						</Text>
						<Pressable onPress={showTimePicker}>
							<Text style={{}}>{dayjs(time).format('HH : mm')}</Text>
						</Pressable>
					</View>
				</View>

				{/* <View style={styles.spacer} /> */}
			</ScrollView>

			<View style={styles.container}>
				<View style={[styles.buttonContainer, styles.buttonCancel]}>
					<Pressable onPress={() => navigation.goBack()}>
						<Text style={styles.buttonTextCancel}>Dismiss</Text>
					</Pressable>
				</View>
				<View style={[styles.buttonContainer, styles.buttonConfirm]}>
					<Pressable onPress={() => navigation.goBack()}>
						<Text style={styles.buttonTextConfirm}>Confirm</Text>
					</Pressable>
				</View>
			</View>
		</View>
	)
}

export default AvailabilityModal

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		flex: 1,
		padding: 20,
		borderWidth: 0.5,
	},
	buttonTextCancel: {
		textAlign: 'center',
		color: 'gray',
		fontWeight: '700',
		fontSize: 15,
	},
	buttonTextConfirm: {
		textAlign: 'center',
		color: 'blue',
		fontWeight: '700',
		fontSize: 15,
	},
	spacer: {
		flex: 1,
	},
	buttonConfirm: {},
	buttonCancel: {},
})

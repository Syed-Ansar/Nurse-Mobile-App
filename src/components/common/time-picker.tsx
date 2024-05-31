import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

type Props = {
	date?: Date
	label?: string
	is24Hour?: boolean
	onDateChange: (date: any) => void
}

const TimePicker = ({ onDateChange, is24Hour, label, date }: Props) => {
	const [showDate, setShowDate] = useState(false)
	const [value, setValue] = useState<Date>(date ? new Date(date) : new Date())

	useEffect(() => {
		if (date) {
			setValue(date)
		}
	}, [date])

	const showTimePicker = () => {
		setShowDate(true)
	}

	const handleTimeChange = (event: any, selectedTime: any) => {
		setShowDate(false)
		if (selectedTime && selectedTime !== value) {
			setValue(selectedTime)
			onDateChange(selectedTime)
		}
	}

	return (
		<>
			{label ? <Text style={styles.label}>{label}</Text> : null}
			<Pressable onPress={showTimePicker}>
				<Text style={{}}>{dayjs(value).format('HH : mm')}</Text>
			</Pressable>
			{showDate && (
				<DateTimePicker
					value={value}
					mode="time"
					display="spinner"
					is24Hour={is24Hour}
					onChange={handleTimeChange}
				/>
			)}
		</>
	)
}

export default TimePicker

const styles = StyleSheet.create({
	label: {
		marginBottom: 10,
		fontWeight: '600',
	},
})

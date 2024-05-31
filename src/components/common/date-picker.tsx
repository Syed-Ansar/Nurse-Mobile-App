import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

type Props = {
	label?: string
	onDateChange: (date: any) => void
	is24Hour?: boolean
	date?: Date
}

const DatePicker = ({ onDateChange, is24Hour, label, date }: Props) => {
	const [showDate, setShowDate] = useState(false)
	const [value, setValue] = useState<Date>(date ? new Date(date) : new Date())

	useEffect(() => {
		if (date) {
			setValue(date)
		}
	}, [date])

	const showDatePicker = () => {
		setShowDate(true)
	}

	const handleDateChange = (event: any, selectedDate: any) => {
		setShowDate(false)
		if (selectedDate && selectedDate !== value) {
			setValue(selectedDate)
			onDateChange(selectedDate)
		}
	}

	return (
		<>
			{label ? <Text style={styles.label}>{label}</Text> : null}
			<Pressable onPress={showDatePicker}>
				<Text style={{}}>{dayjs(value).format('dddd D MMMM')}</Text>
			</Pressable>
			{showDate && (
				<DateTimePicker
					testID="date"
					value={value}
					mode="date"
					display="calendar"
					is24Hour={is24Hour}
					onChange={handleDateChange}
				/>
			)}
		</>
	)
}

export default DatePicker

const styles = StyleSheet.create({
	label: {
		marginBottom: 10,
	},
})

import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import React, { useEffect, useMemo, useState } from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

type Props = {
	date?: Date
	label?: string
	is24Hour?: boolean
	onDateChange: (date: any) => void
	setMaxDate?: boolean
	minDate?: Date | undefined
}

const DatePicker = ({ onDateChange, is24Hour, label, date, setMaxDate, minDate }: Props) => {
	const [showDate, setShowDate] = useState(false)
	const [value, setValue] = useState<Date>(date ? new Date(date) : new Date())
	const maximumDate = useMemo(() => {
		return dayjs().add(1, 'month').endOf('month').toDate()
	}, [])

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
					minimumDate={minDate ? minDate : new Date()}
					maximumDate={setMaxDate ? maximumDate : undefined}
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
		fontWeight: '600',
	},
})

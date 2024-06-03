import { AntDesign, Feather } from '@expo/vector-icons'
import dayjs from 'dayjs'
import React, { useMemo, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MarkedDates } from 'react-native-calendars/src/types'

import DatePicker from '@/components/common/date-picker'
import TimePicker from '@/components/common/time-picker'
import { useStore } from '@/store'
import { AvailabilityDates } from '@/types'
import { generateEventData } from '@/utils/marked-dates'
import { SCREEN_WIDTH } from '@/utils/responsive'

type Props = {
	navigation: any
}

const AvailabilityModal = ({ navigation }: Props) => {
	const [showMoreOptions, setShowMoreOptions] = useState(false)
	const {
		selectedAvailabilityDates,
		setSelectedAvailabilityDates,
		markedAvailabilityDates,
		setMarkedAvailabilityDates,
	} = useStore()
	const maximumEndDate = useMemo(() => {
		return dayjs(selectedAvailabilityDates.startDate).add(7, 'day').toDate()
	}, [selectedAvailabilityDates.startDate])

	return (
		<View style={styles.flex}>
			<View style={styles.availabilityContainer}>
				<Text style={styles.availabilityHeaderText}>Add Availability</Text>
			</View>
			<ScrollView style={[styles.flex, styles.scrollViewStyles]}>
				{!showMoreOptions ? (
					<View style={styles.dateContainer}>
						<DatePicker
							label="Date"
							date={selectedAvailabilityDates.startDate}
							onDateChange={(value) => {
								const data: AvailabilityDates = {
									...selectedAvailabilityDates,
									startDate: value,
								}
								setSelectedAvailabilityDates(data)
							}}
						/>
					</View>
				) : null}
				<View style={styles.dateTimeContainer}>
					<View style={styles.dateContainer}>
						<TimePicker
							label="Start Time"
							date={selectedAvailabilityDates.startTime}
							is24Hour
							onDateChange={(value) => {
								const data: AvailabilityDates = {
									...selectedAvailabilityDates,
									startTime: value,
								}
								setSelectedAvailabilityDates(data)
							}}
						/>
					</View>
					<AntDesign style={styles.dateContainer} name="arrowright" size={20} color="gray" />
					<View style={styles.dateContainer}>
						<TimePicker
							label="End Time"
							date={
								selectedAvailabilityDates.endTime ? selectedAvailabilityDates.endTime : new Date()
							}
							is24Hour
							onDateChange={(value) => {
								const data: AvailabilityDates = {
									...selectedAvailabilityDates,
									endTime: value,
								}
								setSelectedAvailabilityDates(data)
							}}
						/>
					</View>
				</View>

				<Pressable
					onPress={() => {
						setShowMoreOptions((prev) => !prev)
						const data: AvailabilityDates = {
							...selectedAvailabilityDates,
							endDate: maximumEndDate,
							endTime: new Date(),
						}
						setSelectedAvailabilityDates(data)
					}}
					style={styles.moreOptionsContainer}
				>
					<Text style={styles.moreOptionsText}>Repeat</Text>

					{showMoreOptions ? (
						<Feather name="chevron-up" size={20} color="gray" />
					) : (
						<Feather name="chevron-down" size={20} color="gray" />
					)}
				</Pressable>
				{showMoreOptions ? (
					<View style={styles.dateTimeContainer}>
						<View style={styles.dateContainer}>
							<DatePicker
								label="Start Date"
								date={selectedAvailabilityDates.startDate}
								onDateChange={(value) => {
									const data: AvailabilityDates = {
										...selectedAvailabilityDates,
										startDate: value,
									}
									setSelectedAvailabilityDates(data)
								}}
							/>
						</View>
						<AntDesign style={styles.dateContainer} name="arrowright" size={20} color="gray" />
						<View style={styles.dateContainer}>
							<View>
								<DatePicker
									label="End Date"
									date={
										new Date(
											selectedAvailabilityDates.endDate
												? selectedAvailabilityDates.endDate
												: maximumEndDate,
										)
									}
									setMaxDate
									minDate={selectedAvailabilityDates.startDate}
									onDateChange={(value) => {
										const data: AvailabilityDates = {
											...selectedAvailabilityDates,
											endDate: value,
										}
										setSelectedAvailabilityDates(data)
									}}
								/>
							</View>
						</View>
					</View>
				) : null}
			</ScrollView>

			<View style={styles.container}>
				<Pressable
					style={[styles.buttonContainer, styles.buttonCancel]}
					onPress={() => navigation.goBack()}
				>
					<View>
						<Text style={styles.buttonTextCancel}>Dismiss</Text>
					</View>
				</Pressable>
				<Pressable
					style={[
						styles.buttonContainer,
						styles.buttonConfirm,
						showMoreOptions &&
							(selectedAvailabilityDates.endDate === null ||
								selectedAvailabilityDates.endTime === null) &&
							styles.buttonConfirmDisabled,
					]}
					onPress={() => {
						const data = generateEventData(
							selectedAvailabilityDates.startDate,
							showMoreOptions ? selectedAvailabilityDates.endDate : null,
						)
						const markedDates: MarkedDates = {
							...markedAvailabilityDates,
							...data,
						}
						setMarkedAvailabilityDates(markedDates)
						navigation.goBack()
					}}
					disabled={
						showMoreOptions &&
						(selectedAvailabilityDates.endDate === null ||
							selectedAvailabilityDates.endTime === null)
					}
				>
					<View>
						<Text style={styles.buttonTextConfirm}>Confirm</Text>
					</View>
				</Pressable>
			</View>
		</View>
	)
}

export default AvailabilityModal

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	scrollViewStyles: {
		padding: 15,
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	availabilityContainer: {
		marginVertical: 10,
	},
	availabilityHeaderText: {
		fontSize: 20,
		fontWeight: '500',
		borderBottomWidth: 1,
		paddingBottom: 5,
		paddingLeft: 10,
	},
	dateTimeContainer: {
		maxWidth: SCREEN_WIDTH - 50,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	dateContainer: {
		marginVertical: 10,
		flex: 1,
	},
	buttonContainer: {
		flex: 1,
		padding: 20,
	},
	buttonTextCancel: {
		textAlign: 'center',
		color: 'black',
		fontWeight: '500',
		fontSize: 15,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 10,
	},
	buttonTextConfirm: {
		textAlign: 'center',
		color: 'white',
		fontWeight: '500',
		fontSize: 15,
		backgroundColor: '#7450FE',
		padding: 10,
		borderRadius: 10,
	},
	spacer: {
		flex: 1,
	},
	moreOptionsContainer: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		gap: 4,
		marginVertical: 10,
	},
	moreOptionsText: {
		color: 'gray',
	},
	buttonConfirm: {
		opacity: 1,
	},
	buttonConfirmDisabled: {
		opacity: 0.6,
	},
	buttonCancel: {
		opacity: 1,
	},
	buttonCancelDisabled: {
		opacity: 0.6,
	},
})

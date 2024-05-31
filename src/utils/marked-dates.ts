import dayjs from 'dayjs'
import { MarkedDates } from 'react-native-calendars/src/types'

export function generateEventData(
	startDate: Date | string,
	endDate?: Date | string | null,
): MarkedDates {
	const startDateTime = dayjs(startDate).toDate()
	const endDateTime = endDate ? dayjs(endDate).toDate() : dayjs(startDate).toDate()

	let diff: number = 0

	if (endDate) {
		diff = dayjs(endDateTime).diff(dayjs(startDateTime), 'day')
	}

	const eventData: MarkedDates = {}

	if (diff > 0) {
		for (
			let currentDate = new Date(startDateTime.getTime());
			currentDate < endDateTime;
			currentDate.setDate(currentDate.getDate() + 1)
		) {
			const dateString = currentDate.toISOString().split('T')[0]
			const isStartingDay = currentDate.getDate() === startDateTime.getDate()
			const isEndingDay = false // It will be handled after the loop

			eventData[dateString] = {
				selected: true,
				startingDay: isStartingDay,
				endingDay: isEndingDay,
				color: '#7450FE',
				textColor: 'white',
				disabled: false,
			}
		}

		// Handle the endDate separately to ensure it is included
		const endDateString = endDateTime.toISOString().split('T')[0]
		eventData[endDateString] = {
			selected: true,
			startingDay: false,
			endingDay: true,
			color: '#7450FE',
			textColor: 'white',
			disabled: false,
		}
	} else {
		const dateString = startDateTime.toISOString().split('T')[0]

		eventData[dateString] = {
			selected: true,
			startingDay: true,
			endingDay: true,
			color: 'blue',
			textColor: 'white',
			disabled: false,
		}
	}

	return eventData
}

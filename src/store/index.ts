import dayjs from 'dayjs'
import { create } from 'zustand'

import { AvailabilityDates, MarkedAvailabilityDatesType, NurseUserInfo } from '@/types'
import { MarkedDates } from 'react-native-calendars/src/types'

interface UserState {
	nurse: NurseUserInfo | null
	setNurse: (data: NurseUserInfo) => void
	selectedAvailabilityDates: AvailabilityDates
	setSelectedAvailabilityDates: (data: AvailabilityDates) => void
	markedAvailabilityDates: MarkedDates
	setMarkedAvailabilityDates: (data: MarkedDates) => void
}

export const useStore = create<UserState>((set) => ({
	nurse: null,
	setNurse: (data) => set(() => ({ nurse: data })),
	selectedAvailabilityDates: {
		startDate: new Date() ?? undefined,
		startTime: new Date() ?? undefined,
		endDate: null,
		endTime: null,
	},
	setSelectedAvailabilityDates: (data) =>
		set(() => ({
			selectedAvailabilityDates: data,
		})),
	markedAvailabilityDates: {},
	setMarkedAvailabilityDates: (data) =>
		set(() => ({
			markedAvailabilityDates: data,
		})),
}))

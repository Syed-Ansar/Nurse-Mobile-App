import { TimelineEventProps, CalendarUtils } from 'react-native-calendars'

import ClockInTIme from '@/assets/svg/clock-in-time.svg'
import ClockOutTIme from '@/assets/svg/clock-out-time.svg'

export const JobData = [
	{
		id: 1,
		posted: 'today',
		status: 'Upcoming',
		facility: 'A Nurse required for ABC hospital',
		estimatedPaymentDate: '07/08/2023',
		facilityDetails: {
			ward: 'Nurse',
			workPeriod: 'Jul 08th 23',
			workHours: 12,
		},
		clockInTime: '2:00 PM',
		clockOutTime: '3:00 PM',
		avatar: '',
		name: 'Emily Ava',
		review: 5,
	},
	{
		id: 2,
		posted: 'yesterday',
		status: 'Upcoming',
		facility: 'A Nurse required for ABC hospital',
		estimatedPaymentDate: '07/08/2023',
		facilityDetails: {
			ward: 'Nurse',
			workPeriod: 'Jul 08th 23',
			workHours: 12,
		},
		clockInTime: '2:00 PM',
		clockOutTime: '3:00 PM',
		avatar: '',
		name: 'Emily Ava',
		review: 5,
	},
	{
		id: 3,
		posted: 'today',
		status: 'Pending',
		facility: 'A Nurse required for ABC hospital',
		estimatedPaymentDate: '07/08/2023',
		facilityDetails: {
			ward: 'Nurse',
			workPeriod: 'Jul 08th 23',
			workHours: 12,
		},

		clockInTime: '2:00 PM',
		clockOutTime: '3:00 PM',
		avatar: '',
		name: 'Emily Ava',
		review: 5,
	},
	{
		id: 4,
		posted: '23/04/2023',
		status: 'Completed',
		facility: 'CAB hospital',
		estimatedPaymentDate: '07/08/2023',
		facilityDetails: {
			ward: 'Nurse',
			workPeriod: 'Jul 08th 23',
			workHours: 12,
		},

		clockInTime: '2:00 PM',
		clockOutTime: '3:00 PM',
		avatar: '',
		name: 'Emily Ava',
		review: 5,
	},
	{
		id: 5,
		posted: '28/04/2023',
		facility: ' ABC hospital',
		status: 'Pending',
		estimatedPaymentDate: '07/08/2023',
		facilityDetails: {
			ward: 'Nurse',
			workPeriod: 'Jul 08th 23',
			workHours: 12,
		},

		clockInTime: '2:00 PM',
		clockOutTime: '3:00 PM',
		avatar: '',
		name: 'Emily Ava',
		review: 5,
	},
	{
		id: 6,
		posted: '01/05/2023',
		facility: 'DSD hospital',
		status: 'Upcoming',
		estimatedPaymentDate: '07/08/2023',
		facilityDetails: {
			ward: 'Nurse',
			workPeriod: 'Jul 08th 23',
			workHours: 12,
		},

		clockInTime: '2:00 PM',
		clockOutTime: '3:00 PM',
		avatar: '',
		name: 'Emily Ava',
		review: 5,
	},
	{
		id: 7,
		posted: '10/04/2023',
		status: 'Completed',
		facility: 'SAS hospital',
		estimatedPaymentDate: '07/08/2023',
		facilityDetails: {
			ward: 'Nurse',
			workPeriod: 'Jul 08th 23',
			workHours: 12,
		},

		clockInTime: '2:00 PM',
		clockOutTime: '3:00 PM',
		avatar: '',
		name: 'Emily Ava',
		review: 5,
	},
]

const EVENT_COLOR = '#e6add8'
const today = new Date()
export const getDate = (offset = 0) =>
	CalendarUtils.getCalendarDateString(new Date().setDate(today.getDate() + offset))

export const timelineEvents: TimelineEventProps[] = [
	{
		start: `${getDate(-1)} 09:20:00`,
		end: `${getDate(-1)} 12:00:00`,
		title: 'Merge Request to React Native Calendars',
		summary: 'Merge Timeline Calendar to React Native Calendars',
	},
	{
		start: `${getDate()} 01:15:00`,
		end: `${getDate()} 02:30:00`,
		title: 'Meeting A',
		summary: 'Summary for meeting A',
		color: EVENT_COLOR,
	},
	{
		start: `${getDate()} 01:30:00`,
		end: `${getDate()} 02:30:00`,
		title: 'Meeting B',
		summary: 'Summary for meeting B',
		color: EVENT_COLOR,
	},
	{
		start: `${getDate()} 01:45:00`,
		end: `${getDate()} 02:45:00`,
		title: 'Meeting C',
		summary: 'Summary for meeting C',
		color: EVENT_COLOR,
	},
	{
		start: `${getDate()} 02:40:00`,
		end: `${getDate()} 03:10:00`,
		title: 'Meeting D',
		summary: 'Summary for meeting D',
		color: EVENT_COLOR,
	},
	{
		start: `${getDate()} 02:50:00`,
		end: `${getDate()} 03:20:00`,
		title: 'Meeting E',
		summary: 'Summary for meeting E',
		color: EVENT_COLOR,
	},
	{
		start: `${getDate()} 04:30:00`,
		end: `${getDate()} 05:30:00`,
		title: 'Meeting F',
		summary: 'Summary for meeting F',
		color: EVENT_COLOR,
	},
	{
		start: `${getDate(1)} 00:30:00`,
		end: `${getDate(1)} 01:30:00`,
		title: 'Visit Grand Mother',
		summary: 'Visit Grand Mother and bring some fruits.',
		color: 'lightblue',
	},
	{
		start: `${getDate(1)} 02:30:00`,
		end: `${getDate(1)} 03:20:00`,
		title: 'Meeting with Prof. Behjet Zuhaira',
		summary: 'Meeting with Prof. Behjet at 130 in her office.',
		color: EVENT_COLOR,
	},
	{
		start: `${getDate(1)} 04:10:00`,
		end: `${getDate(1)} 04:40:00`,
		title: 'Tea Time with Dr. Hasan',
		summary: 'Tea Time with Dr. Hasan, Talk about Project',
	},
	{
		start: `${getDate(1)} 01:05:00`,
		end: `${getDate(1)} 01:35:00`,
		title: 'Dr. Mariana Joseph',
		summary: '3412 Piedmont Rd NE, GA 3032',
	},
	{
		start: `${getDate(1)} 14:30:00`,
		end: `${getDate(1)} 16:30:00`,
		title: 'Meeting Some Friends in ARMED',
		summary: 'Arsalan, Hasnaat, Talha, Waleed, Bilal',
		color: 'pink',
	},
	{
		start: `${getDate(2)} 01:40:00`,
		end: `${getDate(2)} 02:25:00`,
		title: 'Meet Sir Khurram Iqbal',
		summary: 'Computer Science Dept. Comsats Islamabad',
		color: 'orange',
	},
	{
		start: `${getDate(2)} 04:10:00`,
		end: `${getDate(2)} 04:40:00`,
		title: 'Tea Time with Colleagues',
		summary: 'WeRplay',
	},
	{
		start: `${getDate(2)} 00:45:00`,
		end: `${getDate(2)} 01:45:00`,
		title: 'Lets Play Apex Legends',
		summary: 'with Boys at Work',
	},
	{
		start: `${getDate(2)} 11:30:00`,
		end: `${getDate(2)} 12:30:00`,
		title: 'Dr. Mariana Joseph',
		summary: '3412 Piedmont Rd NE, GA 3032',
	},
	{
		start: `${getDate(4)} 12:10:00`,
		end: `${getDate(4)} 13:45:00`,
		title: 'Merge Request to React Native Calendars',
		summary: 'Merge Timeline Calendar to React Native Calendars',
	},
]

const dataItem = [
	{
		facility: 'ABC Hospital',
		startTime: '2:00 PM',
		endTime: '10:30 PM',
		color: 'red',
	},
	{
		facility: 'CSA Hospital',
		startTime: '9:00 PM',
		endTime: '12:30 AM',
		color: 'blue',
	},
]

export const calenderData = {
	'2024-05-01': [
		{ name: 'ABC Hospital', day: JSON.stringify(dataItem[0]), height: 10 },
		{ name: 'Running', day: JSON.stringify(dataItem[0]), height: 10 },
	],
	'2024-05-02': [
		{ name: 'Cycling', day: JSON.stringify(dataItem[1]), height: 10 },
		{ name: 'Walking', day: JSON.stringify(dataItem[1]), height: 10 },
		{ name: 'Running', day: JSON.stringify(dataItem[1]), height: 10 },
	],
}

export const profileData = {
	'ID/ Passport': 123456789,
	'Professional Category': 'XYZ',
	'SANC/ Practice Number': 'XYZ',
	'Specialization Selector': 'XYZ',
	'Called Rank': 12,
	'RWOP Number': 'XYZ',
}

export const jobHistoryData = {
	Ward: '2 Ward',
	Date: '07/08/2023',
	'Work Period ': '19 May',
}

export const Clock = [
	{
		name: 'Clock in Time',
		time: '2:00PM',
		color: '#EAB308',
		icon: ClockInTIme,
	},
	{
		name: 'Clock Out Time',
		time: '6:00AM',
		color: '#3513DD',
		icon: ClockOutTIme,
	},
]

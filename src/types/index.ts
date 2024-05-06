export type JobDetails = {
	Ward: string
	Date: string
	Work_Period: string
}

export enum JobStatus {
	Completed = 'Completed',
	OnGoing = 'On Going',
}

export type JobData = {
	name: string
	reviews: number
	jobDetails: JobDetails
	ClockInTIme: string
	ClockOutTIme: string
	status: JobStatus
}

export type NotificationType = {
	id: number
	title: string
	description: string
	date: string
}

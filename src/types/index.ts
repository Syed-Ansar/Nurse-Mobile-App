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

export type AuthLogin = {
	idNumber: string
	password: string
}

export type ResponseToken = {
	token: string
	expiresAt: number
}

export type AuthLoginResponse = {
	refreshToken: ResponseToken
	accessToken: ResponseToken
}

type Specialization = {
	name: string
	scorePercentage: number
}
type Address = {
	city: string
	country: string
	streetAddress: string
}
type AssignedTo = {
	id: string
	idNumber: string
	name: string
	role: string
	createdOnMilli: number
	updatedOnMilli: number | null
}
type AssessmentReports = {
	assessmentId: string
	assessmentType: string
	passScore: number
	specializations: Specialization[] | []
	yourScore: number
}
type GovernmentId = {
	documentNumber: string
	countryOfIssue: string
	idType: string
	issuedOnMilli: number
	expiresOnMilli: number | null
}
type ProfessionalCategory = {
	id: string
	name: string
	description: string
	createdOnMillis: number
	updatedOnMillis: number | null
}

export type AdditionalNursingQualification = {
	id: string
	description: string
	additionalQualification: string
}

export interface NurseDocument {
	id: string
	documentType: string
	metaData: MetaData[]
	assignedTo: null | AssignedTo
	nurse: null | NurseUserInfo
	requirement?: null | string
	assignedByName?: null | string
	issuedOnMilli: null | number
	expiresOnMilli: null | number
	createdOnMilli: number
	updatedOnMilli: null | number
}
export interface Status {
	id: string
	status: string
	note: string | null
	createdOnMilli: number
	updatedOnMilli: number | null
}

export type NurseUserInfo = {
	id: string
	name: string
	assessmentReports: AssessmentReports[] | any
	blacklist: Status | any
	flag: Status | any
	employeeCode: string
	surname: string
	email: string
	phoneNumber: string
	secondaryPhoneNumber: string
	practiceNumber: string
	governmentId: GovernmentId
	progressStatus: string
	assignedTo: AssignedTo | any
	professionalCategory: ProfessionalCategory
	isPermanentWithDOH: boolean
	isPermanentWithPrivate: boolean
	isLocum: boolean
	permanentWithDOHStartDate: number
	permanentWithDOHEndDate: number
	additionalNursingQualifications: AdditionalNursingQualification[]
	createdOnMilli: number
	updatedOnMilli: number | any
	statuses: Status[] | any
	address: Address | any // You might want to define an Address type if possible
	shouldRefreshInfo?: boolean | any // You might want to define an Address type if possible
}

export interface MetaData {
	id: string
	name: string
	value: string
	createdOnMilli: number
	updatedOnMilli: null | number
}

export type ProfileDataType = {
	'ID/ Passport': string
	'Professional Category': string
	'SANC/ Practice Number': string
	'Specialization Selector': string | undefined
	'Called Rank': string
	'RWOP Number': string
}

export type NotificationRequest = { playerId: string }

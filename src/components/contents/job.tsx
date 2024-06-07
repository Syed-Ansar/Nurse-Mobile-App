import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import JobTimings from './job-timings'
import GradientButton from '../ui/Button'

import Avatar from '@/assets/svg/avatar.svg'
import Star from '@/assets/svg/star.svg'
import { colors, fontSize } from '@/constants/tokens'
import { utilsStyles } from '@/styles'
import { JobType } from '@/types'

type Props = {
	type?: 'UPCOMMING'
	job: JobType
	navigation: any
}

const Job = ({ job, type, navigation }: Props) => {
	const {
		posted,
		avatar,
		clockInTime,
		clockOutTime,
		estimatedPaymentDate,
		facility,
		name,
		review,
		facilityDetails,
	} = job
	const { ward, workHours, workPeriod } = facilityDetails

	const onJobClick = () => {
		navigation.navigate('JobDetails', {
			id: 1,
			data: job,
		})
	}
	return (
		<View style={styles.mainContainer}>
			<Pressable onPress={onJobClick}>
				<Text style={styles.postedContainer}>Posted {posted}</Text>
				<Text style={styles.facilityText}>{facility}</Text>
				<View style={styles.estimatedPaymentContainer}>
					<Text style={styles.estimatedPaymentText}>Estimated Payment Date:</Text>
					<Text style={styles.estimatedPaymentValue}>{estimatedPaymentDate}</Text>
				</View>
				<View style={styles.JobDetails}>
					<View style={styles.jobSeparator} />
					<View style={styles.jobDetailContainer}>
						<View>
							<View style={styles.jobDetailSection}>
								<View style={styles.detailSpacer}>
									<Text style={styles.jobDetailHeadingContainer}>Ward</Text>
									<View style={styles.jobDetailHeaderValueWrapper}>
										<Text style={styles.jobDetailTextValue}>{ward}</Text>
									</View>
								</View>
							</View>
						</View>
						<View>
							<View style={styles.jobDetailSection}>
								<View style={styles.detailSpacer}>
									<Text style={styles.jobDetailHeadingContainer}>Work Period</Text>
									<View style={styles.jobDetailHeaderValueWrapper}>
										<Text style={styles.jobDetailTextValue}>{workPeriod}</Text>
									</View>
								</View>
							</View>
						</View>
						<View>
							<View style={styles.jobDetailSection}>
								<View style={styles.detailSpacer}>
									<Text style={styles.jobDetailHeadingContainer}>Work Hours</Text>
									<View style={styles.jobDetailHeaderValueWrapper}>
										<Text style={styles.jobDetailTextValue}>{workHours}</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View>
						<View style={styles.jobSeparator} />
						<JobTimings startTime={clockInTime} endTime={clockOutTime} />
						<View style={styles.jobSeparator} />
					</View>
					<View>
						<View style={styles.userContainer}>
							<View style={styles.userWrapper}>
								<Avatar width={30} height={30} />
								<Text style={styles.userName}>{name}</Text>
							</View>
							<View style={styles.reviewContainer}>
								{Array.from({ length: review }).map((_, index) => {
									return <Star key={index} width={16} height={16} />
								})}
							</View>
						</View>
						<View style={styles.actionContainer}>
							<GradientButton
								title="Accept"
								radius={6}
								height={36}
								fontSize={14}
								buttonStyle={{
									flex: 1,
									marginRight: 8,
								}}
								titleStyle={{
									fontWeight: '600',
								}}
							/>

							<View style={styles.declineAction}>
								<Text style={styles.declineActionText}>Decline</Text>
							</View>
						</View>
					</View>
				</View>
			</Pressable>
		</View>
	)
}

export default Job

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: 'white',
		borderRadius: 12,
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginVertical: 10,
		borderWidth: 1,
		borderColor: '#F1F3F5',
	},
	postedContainer: {
		color: colors.secondaryText,
		fontSize: fontSize.xxs,
		lineHeight: 15,
	},
	facilityText: {
		color: colors.text,
		fontSize: fontSize.sm,
		lineHeight: 15,
		marginVertical: 8,
		fontWeight: '600',
	},
	estimatedPaymentContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 2,
	},
	estimatedPaymentText: {
		color: colors.secondaryText,
		fontSize: fontSize.xxs,
		lineHeight: 15,
	},
	estimatedPaymentValue: {
		color: colors.text,
		fontSize: fontSize.xxs,
		lineHeight: 15,
	},
	JobDetails: {
		marginVertical: 12,
	},
	jobSeparator: {
		...utilsStyles.itemSeparator,
		borderWidth: 0.4,
	},
	jobDetailContainer: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 10,
	},
	jobDetailSection: {
		gap: 15,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	detailSpacer: {
		gap: 4,
	},
	jobDetailHeadingContainer: {
		fontSize: fontSize.xxs,
		fontWeight: '400',
		textAlign: 'center',
	},
	jobDetailHeaderValueWrapper: {
		backgroundColor: '#F5F5F5',
		width: '100%',
		paddingVertical: 2,
		paddingHorizontal: 10,
		borderRadius: 12,
	},
	jobDetailTextValue: {
		fontSize: fontSize.xs,
		fontWeight: '600',
		textAlign: 'center',
	},
	userContainer: {
		marginVertical: 12,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	userWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	userName: {
		fontSize: fontSize.xsm,
		fontWeight: '600',
	},
	reviewContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	actionContainer: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
	},
	declineAction: {
		flex: 1,
		height: 36,
		display: 'flex',
		borderRadius: 6,
		borderWidth: 1.5,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#F97066',
	},
	declineActionText: {
		fontSize: fontSize.xsm,
		fontWeight: '600',
		color: '#F97066',
	},
})

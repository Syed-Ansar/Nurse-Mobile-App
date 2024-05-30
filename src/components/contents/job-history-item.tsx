import { View, Text, StyleSheet, Pressable } from 'react-native'

import Avatar from '@/assets/svg/avatar.svg'
import JobTimings from '@/components/contents/job-timings'
import Separator from '@/components/contents/separator'
import Star from '@/components/contents/star'
import { colors, fontSize } from '@/constants/tokens'
import { JobData, JobStatus } from '@/types'

type Props = {
	data: JobData
	navigation: any
}
const JobHistoryItem = ({ data, navigation }: Props) => {
	const { ClockInTIme, ClockOutTIme, jobDetails, name, reviews, status } = data

	const onJobHistoryClick = () => {
		navigation.navigate('JobHistoryDetails', {
			id: 1,
			data: {
				name,
				status,
			},
		})
	}
	return (
		<Pressable onPress={onJobHistoryClick}>
			<View style={styles.container}>
				<View style={styles.jobContainer}>
					<View style={styles.jobHeader}>
						<View style={styles.jobTitle}>
							<Avatar width={34} height={34} />
							<View style={styles.userContainer}>
								<Text style={styles.userName}>{name}</Text>
								<Star numberOfTimes={reviews} />
							</View>
						</View>
						<View
							style={[
								styles.status,
								{ backgroundColor: JobStatus.Completed === status ? '#12B76A' : '#E5BA0D' },
							]}
						>
							<Text style={styles.statusText}>{status}</Text>
						</View>
					</View>
					<View style={styles.jobDetailsContainer}>
						{Object.entries(jobDetails).map(([key, value]) => (
							<View key={key} style={styles.itemContainer}>
								<Text style={styles.itemDataKey}>{key} :-</Text>
								<Text style={styles.itemData}>{value}</Text>
							</View>
						))}
					</View>
					<Separator />
					<View>
						<JobTimings
							startTime={ClockInTIme}
							endTime={ClockOutTIme}
							containerStyles={styles.jobStyleContainer}
						/>
					</View>
				</View>
			</View>
		</Pressable>
	)
}

export default JobHistoryItem

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#F1F3F5',
	},
	jobTitle: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	jobHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#FAFAFA',
		padding: 16,
		borderTopStartRadius: 12,
		borderTopEndRadius: 12,
	},
	userContainer: {
		gap: 4,
	},
	userName: {
		fontSize: fontSize.xsm,
		fontWeight: '600',
	},
	status: {
		height: 27,
		width: 82,
		display: 'flex',
		justifyContent: 'center',
		borderRadius: 18,
	},
	statusText: {
		fontSize: fontSize.xxs,
		color: 'white',
		fontWeight: '600',
		textAlign: 'center',
		letterSpacing: 0.8,
	},
	jobContainer: {},
	jobDetailsContainer: {
		gap: 5,
		paddingVertical: 20,
	},
	itemContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 16,
	},
	itemDataKey: {
		fontSize: fontSize.xs,
		fontWeight: '400',
		color: colors.secondaryText,
	},
	itemData: {
		fontSize: fontSize.xsm,
		fontWeight: '600',
	},
	jobStyleContainer: {
		marginVertical: 10,
	},
})

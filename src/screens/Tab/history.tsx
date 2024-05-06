import { View, Text, StyleSheet } from 'react-native'

import ScreenLayout from '../screen-layout'

import Avatar from '@/assets/svg/avatar.svg'
import Layout from '@/components/common/layout'
import Star from '@/components/contents/star'
import { colors, fontSize } from '@/constants/tokens'
import { jobHistoryData } from '@/libs/dummyData'
import Separator from '@/components/contents/separator'

import ClockInTIme from '@/assets/svg/clock-in-time.svg'
import ClockOutTIme from '@/assets/svg/clock-out-time.svg'
import { utilsStyles } from '@/styles'
import JobTimings from '@/components/contents/job-timings'

const Clock = [
	{
		name: 'Clock in Time',
		time: '2:00PM',
		color: '#EAB308',
		icon: <ClockInTIme />,
	},
	{
		name: 'Clock Out Time',
		time: '6:00AM',
		color: '#3513DD',
		icon: <ClockOutTIme />,
	},
]

export default function History({ navigation }: any) {
	return (
		<ScreenLayout navigation={navigation}>
			<Layout navigation={navigation} headerTitle="Job History">
				<View style={styles.container}>
					<View style={styles.jobContainer}>
						<View style={styles.jobHeader}>
							<View style={styles.jobTitle}>
								<Avatar width={34} height={34} />
								<View style={styles.userContainer}>
									<Text style={styles.userName}>Emily Ava</Text>
									<Star />
								</View>
							</View>
							<View style={styles.status}>
								<Text style={styles.statusText}>Completed</Text>
							</View>
						</View>
						<View style={styles.jobDetailsContainer}>
							{Object.entries(jobHistoryData).map(([key, value]) => (
								<View key={key} style={styles.itemContainer}>
									<Text style={styles.itemDataKey}>{key} :-</Text>
									<Text style={styles.itemData}>{value}</Text>
								</View>
							))}
						</View>
						<Separator />
						<View>
							<JobTimings
								startTime="2:00 PM"
								endTime="8:00 PM"
								containerStyles={styles.jobStyleContainer}
							/>
						</View>
					</View>
				</View>
			</Layout>
		</ScreenLayout>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderRadius: 12,
		marginVertical: 10,
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
		backgroundColor: '#12B76A',
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

import 'core-js/stable/atob'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import {
	Pressable,
	RefreshControl,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import WelcomeHand from '@/assets/svg/welcome-hand.svg'
import Job from '@/components/contents/job'
import { fontSize } from '@/constants/tokens'
import { JobData } from '@/libs/dummyData'
import { getNurse } from '@/network/auth'
import { useNurseStore } from '@/store'
import { utilsStyles } from '@/styles'
import { SCREEN_WIDTH, verticalScale } from '@/utils/responsive'

type Props = {
	navigation: any
}

enum JOB_STATUS {
	Upcoming = 'Upcoming',
	Completed = 'Completed',
	Pending = 'Pending',
}

const jobTabs = [JOB_STATUS.Upcoming, JOB_STATUS.Pending]

const HomeScreen = ({ navigation }: Props) => {
	const [activeTab, setActiveTab] = useState(JOB_STATUS.Upcoming)
	const [jobs, setJobs] = useState(JobData.filter((item) => item.status === JOB_STATUS.Upcoming))
	const { nurse, setNurse } = useNurseStore()
	const drawerNavigation = useNavigation()

	const [refreshing, setRefreshing] = useState(false)

	const onRefresh = useCallback(() => {
		setRefreshing(true)
		setTimeout(() => {
			setRefreshing(false)
		}, 2000)
	}, [])

	const getUserInfo = useCallback(async () => {
		try {
			if (!nurse) {
				const nurseInfo = await getNurse()
				if (nurseInfo.data) {
					setNurse(nurseInfo.data)
				}
			}
		} catch (error) {
			console.log('Error Get User', error)
		}
	}, [nurse, setNurse])

	useLayoutEffect(() => {
		getUserInfo()
		drawerNavigation.dispatch(DrawerActions.closeDrawer())
	}, [drawerNavigation, getUserInfo])

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<View style={styles.topGap}>
					<View style={styles.welcomeContainer}>
						<Text style={styles.welcomeText}>Welcome !</Text>
						<WelcomeHand />
					</View>
					<Text style={styles.userName}>
						{nurse ? `${nurse.name} ${nurse.surname}` : 'Nurse Name'}
					</Text>
				</View>

				<View style={styles.jobsContainer}>
					{jobTabs.map((item, index) => {
						return (
							<React.Fragment key={item}>
								<Pressable
									key={item}
									onPress={() => {
										setActiveTab(item)
										setJobs(JobData.filter((job) => job.status === item))
									}}
									style={[
										styles.tab,
										{
											borderColor: item === activeTab ? '#3513DD' : '#F2F4F7',
										},
									]}
								>
									<Text
										style={[
											styles.tabText,
											{
												color: item === activeTab ? '#3513DD' : '#828998',
												fontWeight: item === activeTab ? '700' : '400',
											},
										]}
									>
										{item} Jobs
									</Text>
								</Pressable>
								{index !== 2 ? <View style={styles.tabSeparator} /> : null}
							</React.Fragment>
						)
					})}
				</View>
				<View style={styles.jobViewContainer}>
					<ScrollView
						refreshControl={
							<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#3513DD']} />
						}
						showsVerticalScrollIndicator={false}
						contentInsetAdjustmentBehavior="never"
						centerContent
						contentContainerStyle={styles.flatListContainer}
					>
						{jobs.map((item) => {
							return <Job key={item.id} job={item} navigation={navigation} />
						})}
					</ScrollView>
				</View>
			</SafeAreaView>
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		paddingVertical: 20,
		backgroundColor: 'white',
	},
	topGap: {
		gap: 2,
	},
	welcomeContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	welcomeText: {
		fontSize: 24,
		fontWeight: '700',
	},
	userName: {
		fontSize: 12,
		fontWeight: '500',
	},
	jobsContainer: {
		maxWidth: SCREEN_WIDTH,
		backgroundColor: '#F2F4F7',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		borderRadius: 8,
		marginTop: verticalScale(15),
	},
	tab: {
		flex: 1,
		borderWidth: 1,
		borderRadius: 6,
		margin: 8,
	},
	tabText: {
		paddingVertical: 8,
		paddingHorizontal: 10,
		fontSize: fontSize.xs,
		textAlign: 'center',
	},
	tabSeparator: {
		...utilsStyles.itemSeparator,
		borderWidth: 0.5,
		height: '60%',
	},
	jobViewContainer: {
		borderRadius: 10,
		marginTop: 10,
	},
	flatListContainer: {
		paddingBottom: 400,
	},
})

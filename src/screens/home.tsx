import React, { useState } from 'react'
import {
	Pressable,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import TotalHours from '@/assets/svg/timer.svg'
import TotalEarnings from '@/assets/svg/total-earnings.svg'
import WelcomeHand from '@/assets/svg/welcome-hand.svg'
import Job from '@/components/contents/job'
import { fontSize } from '@/constants/tokens'
import { JobData } from '@/libs/dummyData'
import { utilsStyles } from '@/styles'
import { SCREEN_WIDTH } from '@/utils/responsive'

type Props = {
	navigation: any
}

enum JOB_STATUS {
	Upcoming = 'Upcoming',
	Completed = 'Completed',
	Pending = 'Pending',
}

const jobTabs = [JOB_STATUS.Upcoming, JOB_STATUS.Completed, JOB_STATUS.Pending]

const HomeTab = [
	{
		name: 'Total Earning',
		amount: '$200',
		time: '/ per week',
		color: '#EAB308',
		icon: <TotalEarnings />,
		route: 'TotalEarnings',
	},
	{
		name: 'Total Hours',
		amount: '2hr',
		time: '/ per week',
		color: '#3513DD',
		icon: <TotalHours />,
		route: 'TotalHours',
	},
]

const HomeScreen = ({ navigation }: Props) => {
	const [activeTab, setActiveTab] = useState(JOB_STATUS.Upcoming)
	const [jobs, setJobs] = useState(JobData.filter((item) => item.status === JOB_STATUS.Upcoming))
	return (
		<SafeAreaView
			style={{
				paddingHorizontal: 15,
				paddingVertical: 20,
				backgroundColor: 'white',
			}}
		>
			<View
				style={{
					gap: 2,
				}}
			>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						gap: 4,
					}}
				>
					<Text
						style={{
							fontSize: 24,
							fontWeight: '700',
						}}
					>
						Welcome !
					</Text>
					<WelcomeHand />
				</View>
				<Text
					style={{
						fontSize: 12,
						fontWeight: '500',
					}}
				>
					Emily Ava
				</Text>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					marginVertical: 20,
				}}
			>
				{HomeTab.map((item) => {
					return (
						<Pressable
							onPress={() => {
								navigation.navigate(item.route)
							}}
							key={item.name}
							style={{
								borderWidth: 0,
								padding: 10,
								alignSelf: 'flex-start',
								borderRadius: 8,
								borderLeftWidth: 2,
								borderColor: item.color || '#000',
							}}
						>
							<View
								style={{
									gap: 15,
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
								}}
							>
								<View>{item.icon}</View>
								<View
									style={{
										gap: 5,
									}}
								>
									<Text
										style={{
											fontSize: 16,
											fontWeight: '500',
										}}
									>
										{item.name}
									</Text>
									<View
										style={{
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'center',
											gap: 2,
										}}
									>
										<Text
											style={{
												fontSize: 12,
												fontWeight: '700',
											}}
										>
											{item.amount}
										</Text>
										<Text
											style={{
												fontSize: 12,
												fontWeight: '400',
											}}
										>
											{item.time}
										</Text>
									</View>
								</View>
							</View>
						</Pressable>
					)
				})}
			</View>
			<View
				style={{
					maxWidth: SCREEN_WIDTH,
					backgroundColor: '#F2F4F7',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					borderRadius: 8,
				}}
			>
				{jobTabs.map((item, index) => {
					return (
						<React.Fragment key={item}>
							<Pressable
								key={item}
								onPress={() => {
									setActiveTab(item)
									setJobs(JobData.filter((job) => job.status === item))
								}}
								style={{
									borderWidth: 1,
									borderColor: item === activeTab ? '#3513DD' : '#F2F4F7',
									borderRadius: 6,
									margin: 5,
								}}
							>
								<Text
									style={{
										paddingVertical: 8,
										paddingHorizontal: 10,
										fontSize: fontSize.xxs,
										color: item === activeTab ? '#3513DD' : '#828998',
									}}
								>
									{item} Jobs
								</Text>
							</Pressable>
							{index !== 2 ? (
								<View
									style={{
										...utilsStyles.itemSeparator,
										borderWidth: 0.5,
										height: '60%',
									}}
								/>
							) : null}
						</React.Fragment>
					)
				})}
			</View>
			<View
				style={{
					borderRadius: 10,
					marginTop: 10,
				}}
			>
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentInsetAdjustmentBehavior="never"
					centerContent
					contentContainerStyle={{
						paddingBottom: 350,
					}}
				>
					{jobs.map((item) => {
						return <Job key={item.id} job={item} />
					})}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})

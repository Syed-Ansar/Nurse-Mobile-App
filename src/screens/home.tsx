import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import TotalHours from '@/assets/svg/timer.svg'
import TotalEarnings from '@/assets/svg/total-earnings.svg'
import WelcomeHand from '@/assets/svg/welcome-hand.svg'
import Job from '@/components/contents/job'
import { JobData } from '@/libs/dummyData'
import { SCREEN_HEIGHT } from '@/utils/responsive'

type Props = {
	navigation: any
}

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
	return (
		<View
			style={{
				paddingHorizontal: 15,
				paddingVertical: 20,
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
					borderRadius: 10,
				}}
			>
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentInsetAdjustmentBehavior="never"
					centerContent
					contentContainerStyle={{
						paddingBottom: 270,
					}}
				>
					{JobData.map((item) => {
						return <Job key={item.id} job={item} />
					})}
				</ScrollView>
			</View>
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})

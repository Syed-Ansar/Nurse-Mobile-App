import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import GradientButton from '../ui/Button'

import Avatar from '@/assets/svg/avatar.svg'
import ClockInTIme from '@/assets/svg/clock-in-time.svg'
import ClockOutTIme from '@/assets/svg/clock-out-time.svg'
import Star from '@/assets/svg/star.svg'
import { colors, fontSize } from '@/constants/tokens'
import { utilsStyles } from '@/styles'
import { SCREEN_WIDTH } from '@/utils/responsive'

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
const facilityDetails = [
	{
		name: 'Ward',
	},
	{
		name: 'Work Period',
	},
	{
		name: 'Work Hours',
	},
]

type Facility = {
	ward: string
	workPeriod: string
	workHours: number
}
type Job = {
	posted: string
	facility: string
	estimatedPaymentDate: string
	facilityDetails: Facility
	clockInTime: string
	clockOutTime: string
	avatar: string
	name: string
	review: number
}
type Props = {
	type?: 'UPCOMMING'
	job: Job
}

const Job = ({ job, type }: Props) => {
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
	return (
		<View
			style={{
				backgroundColor: 'white',
				borderRadius: 12,
				paddingHorizontal: 20,
				paddingVertical: 10,
				marginVertical: 10,
			}}
		>
			<Text
				style={{
					color: colors.secondaryText,
					fontSize: fontSize.xxs,
					lineHeight: 15,
				}}
			>
				Posted {posted}
			</Text>
			<Text
				style={{
					color: colors.text,
					fontSize: fontSize.sm,
					lineHeight: 15,
					marginVertical: 8,
					fontWeight: '600',
				}}
			>
				{facility}
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
						color: colors.secondaryText,
						fontSize: fontSize.xxs,
						lineHeight: 15,
					}}
				>
					Estimated Payment Date:
				</Text>
				<Text
					style={{
						color: colors.text,
						fontSize: fontSize.xxs,
						lineHeight: 15,
					}}
				>
					{estimatedPaymentDate}
				</Text>
			</View>
			<View
				style={{
					marginVertical: 12,
				}}
			>
				<View
					style={{
						...utilsStyles.itemSeparator,
						borderWidth: 0.4,
					}}
				/>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						width: '100%',
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingVertical: 10,
					}}
				>
					<View>
						<View
							style={{
								gap: 15,
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									gap: 4,
								}}
							>
								<Text
									style={{
										fontSize: fontSize.xxs,
										fontWeight: '400',
										textAlign: 'center',
									}}
								>
									{'Ward'}
								</Text>
								<View
									style={{
										backgroundColor: '#F5F5F5',
										width: '100%',
										paddingVertical: 2,
										paddingHorizontal: 10,
										borderRadius: 12,
									}}
								>
									<Text
										style={{
											fontSize: fontSize.xs,
											fontWeight: '600',
											textAlign: 'center',
										}}
									>
										{ward}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View>
						<View
							style={{
								gap: 15,
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									gap: 4,
								}}
							>
								<Text
									style={{
										fontSize: fontSize.xxs,
										fontWeight: '400',
										textAlign: 'center',
									}}
								>
									{'Work Period'}
								</Text>
								<View
									style={{
										backgroundColor: '#F5F5F5',
										width: '100%',
										paddingVertical: 2,
										paddingHorizontal: 10,
										borderRadius: 12,
									}}
								>
									<Text
										style={{
											fontSize: fontSize.xs,
											fontWeight: '600',
											textAlign: 'center',
										}}
									>
										{workPeriod}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View>
						<View
							style={{
								gap: 15,
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									gap: 4,
								}}
							>
								<Text
									style={{
										fontSize: fontSize.xxs,
										fontWeight: '400',
										textAlign: 'center',
									}}
								>
									{'Work Hours'}
								</Text>
								<View
									style={{
										backgroundColor: '#F5F5F5',
										width: '100%',
										paddingVertical: 2,
										paddingHorizontal: 10,
										borderRadius: 12,
									}}
								>
									<Text
										style={{
											fontSize: fontSize.xs,
											fontWeight: '600',
											textAlign: 'center',
										}}
									>
										{workHours}
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View>
					<View
						style={{
							...utilsStyles.itemSeparator,
							borderWidth: 0.4,
						}}
					/>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'space-between',
							paddingVertical: 12,
						}}
					>
						<View key={Clock[0].name}>
							<View
								style={{
									gap: 15,
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
								}}
							>
								<View>{Clock[0].icon}</View>
								<View
									style={{
										gap: 2,
									}}
								>
									<Text
										style={{
											fontSize: fontSize.xxs,
											fontWeight: '400',
										}}
									>
										{Clock[0].name}
									</Text>
									<View
										style={{
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'center',
											gap: 1,
										}}
									>
										<Text
											style={{
												fontSize: 12,
												fontWeight: '600',
											}}
										>
											{Clock[0].time}
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								...utilsStyles.itemSeparator,
								borderWidth: 0.4,
							}}
						/>
						<View key={Clock[1].name}>
							<View
								style={{
									gap: 15,
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
								}}
							>
								<View>{Clock[1].icon}</View>
								<View
									style={{
										gap: 2,
									}}
								>
									<Text
										style={{
											fontSize: fontSize.xxs,
											fontWeight: '400',
										}}
									>
										{Clock[1].name}
									</Text>
									<View
										style={{
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'center',
											gap: 1,
										}}
									>
										<Text
											style={{
												fontSize: 12,
												fontWeight: '600',
											}}
										>
											{Clock[1].time}
										</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						style={{
							...utilsStyles.itemSeparator,
							borderWidth: 0.4,
						}}
					/>
				</View>
				<View>
					<View
						style={{
							marginVertical: 12,
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								gap: 10,
							}}
						>
							<Avatar width={30} height={30} />
							<Text
								style={{
									fontSize: fontSize.xsm,
									fontWeight: '600',
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
								gap: 5,
							}}
						>
							{[1, 2, 3, 4, 5].map((_, index) => {
								return <Star key={index} width={16} height={16} />
							})}
						</View>
					</View>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							width: '100%',
							justifyContent: 'space-between',
						}}
					>
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

						<View
							style={{
								flex: 1,
								height: 36,
								marginRight: 8,
								display: 'flex',
								borderRadius: 6,
								borderWidth: 1.5,
								alignItems: 'center',
								justifyContent: 'center',
								borderColor: '#F97066',
							}}
						>
							<Text
								style={{
									fontSize: fontSize.xsm,
									fontWeight: '600',
									color: '#F97066',
								}}
							>
								Decline
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}

export default Job

const styles = StyleSheet.create({})

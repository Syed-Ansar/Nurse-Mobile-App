import { AntDesign, Entypo, Feather, Fontisto } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import ScreenLayout from '../screen-layout'

import JobDetailInfo from '@/components/common/job-detail-info'
import Layout from '@/components/common/layout'
import { showToast } from '@/components/common/toast'
import GradientButton from '@/components/ui/Button'
import { fontSize } from '@/constants/tokens'
import { acceptNurseInvite } from '@/network/notification'
import { JobType } from '@/types'

type Props = { navigation: any; route: any }

const JobDetails = ({ navigation, route }: Props) => {
	const { data }: { data: JobType } = route.params
	const [status, setStatus] = useState<'ACCEPTED' | 'DECLINED' | 'NULL'>('NULL')

	return (
		<ScreenLayout navigation={navigation}>
			<Layout navigation={navigation} headerTitle="Job Detail">
				<ScrollView showsVerticalScrollIndicator={false}>
					<View>
						<Text style={styles.facilityName}>{data?.facility}</Text>
					</View>
					<View style={styles.infoWrapper}>
						<JobDetailInfo
							data={{
								infoKey: 'Estimated payment date',
								infoValue: 'Jul 18, 2024',
								icon: <Fontisto name="date" size={24} color="black" />,
							}}
						/>
					</View>
					<Text style={styles.details}>Details</Text>
					<JobDetailInfo
						data={{
							infoKey: 'Ward',
							infoValue: 'Ward 1',
							icon: <Entypo name="location-pin" size={24} color="black" />,
						}}
					/>
					<JobDetailInfo
						data={{
							infoKey: 'Work Period',
							infoValue: 'Jul 25 - Aug 20',
							icon: <Fontisto name="date" size={24} color="black" />,
						}}
					/>
					<JobDetailInfo
						data={{
							infoKey: 'Work Hours',
							infoValue: '10:00 - 22:00',
							icon: <AntDesign name="clockcircleo" size={24} color="black" />,
						}}
					/>
					<Text style={styles.review}>Reviews</Text>
					<JobDetailInfo
						data={{
							infoKey: '4.8',
							icon: <Feather name="star" size={24} color="black" />,
						}}
					/>
				</ScrollView>
				<View style={styles.actionContainer}>
					{status === 'DECLINED' || status === 'NULL' ? (
						<Pressable
							pointerEvents={status === 'DECLINED' ? 'none' : 'auto'}
							style={[
								styles.declineAction,
								{ borderColor: status === 'DECLINED' ? 'gray' : 'black' },
							]}
							onPress={() => {
								setStatus('DECLINED')
							}}
						>
							<Text style={styles.declineActionText}>
								{status === 'DECLINED' ? 'Declined' : 'Decline'}
							</Text>
						</Pressable>
					) : null}
					{status === 'ACCEPTED' || status === 'NULL' ? (
						<GradientButton
							title={status === 'ACCEPTED' ? 'Accepted' : 'Accept'}
							radius={6}
							height={40}
							fontSize={18}
							titleStyle={{
								fontWeight: '600',
							}}
							onClick={async () => {
								try {
									const response = await acceptNurseInvite()
									if (response.status === 200) {
										showToast('You have accepted the Invitation Successfully!')
										setStatus('ACCEPTED')
									}
								} catch (error) {
									console.log('Error', error)
								}
							}}
						/>
					) : null}
				</View>
			</Layout>
		</ScreenLayout>
	)
}

export default JobDetails

const styles = StyleSheet.create({
	facilityName: {
		fontSize: fontSize.xl,
		fontWeight: '600',
	},
	details: {
		fontSize: fontSize.lg,
		fontWeight: '600',
		marginBottom: 10,
	},
	infoWrapper: {
		marginVertical: 10,
	},
	review: {
		fontSize: fontSize.lg,
		fontWeight: '600',
		marginVertical: 10,
	},
	actionContainer: {
		gap: 10,
		marginTop: 'auto',
		marginBottom: 8,
	},
	declineAction: {
		height: 36,
		display: 'flex',
		borderRadius: 6,
		borderWidth: 1.5,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'black',
	},
	declineActionText: {
		fontSize: fontSize.sm,
	},
})

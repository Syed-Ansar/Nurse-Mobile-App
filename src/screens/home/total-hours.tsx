import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import Layout from '@/components/common/layout'
import AgendaCalender from '@/components/contents/agenda-calender'
import { fontSize } from '@/constants/tokens'
import { calenderData } from '@/libs/dummyData'
import { horizontalScale, moderateScale, verticalScale } from '@/utils/responsive'

type Props = {
	navigation: any
}

const TotalHours = ({ navigation }: Props) => {
	return (
		<Layout navigation={navigation} headerTitle="Hours">
			<View style={styles.container}>
				<View style={styles.card}>
					<Text style={styles.totalEarningsCard}>Earnings Available</Text>
					<View style={styles.amount}>
						<View style={styles.amountContainer}>
							<Text style={styles.amountText}>6 Hours</Text>
							<Text style={styles.subScript}>/week</Text>
						</View>
						<Text style={styles.balance}>Your This Week Working Hours</Text>
					</View>
				</View>
				<View>
					<Text style={styles.listHeader}>Time Stamps</Text>
				</View>
				<SafeAreaView style={styles.container}>
					<AgendaCalender data={calenderData} />
				</SafeAreaView>
			</View>
		</Layout>
	)
}

export default TotalHours

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: moderateScale(15),
	},
	card: {
		backgroundColor: 'white',
		paddingHorizontal: horizontalScale(20),
		paddingVertical: verticalScale(20),
		borderWidth: 1,
		borderRadius: 12,
		borderColor: '#F1F3F5',
		alignSelf: 'flex-start',
	},
	totalEarningsCard: {
		fontSize: fontSize.xs,
		fontWeight: '600',
	},
	amountContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
	amount: {
		paddingHorizontal: moderateScale(10),
		paddingTop: verticalScale(16),
	},
	amountText: {
		fontSize: 34,
		fontWeight: '600',
		color: '#3513DD',
	},
	balance: {
		marginTop: verticalScale(5),
		fontSize: fontSize.xxs,
		fontWeight: '400',
	},
	subScript: {
		fontSize: 14,
		marginBottom: verticalScale(4),
		marginLeft: verticalScale(1),
		alignSelf: 'flex-end',
		color: '#3513DD',
	},
	listHeader: {
		marginVertical: verticalScale(14),
		fontSize: fontSize.lg,
		fontWeight: '700',
	},
})

import React, { memo } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
	Agenda,
	AgendaEntry,
	AgendaSchedule,
	Timeline,
	TimelineEventProps,
} from 'react-native-calendars'

import Layout from '@/components/common/layout'
import { fontSize } from '@/constants/tokens'
import { horizontalScale, moderateScale, verticalScale } from '@/utils/responsive'
import { timelineEvents } from '@/libs/dummyData'

type Props = {
	navigation: any
}

interface Item {
	name: string
	day: string
	height: number
}

interface AgendaItemProps {
	item: Item | undefined
}

const AgendaItem: React.FC<AgendaItemProps> = memo(({ item }) => {
	if (!item) return null

	return (
		<TouchableOpacity style={styles.item}>
			<Text style={styles.itemText}>{item.name ? item.name : 'No Item'}</Text>
		</TouchableOpacity>
	)
})

const renderItem: (reservation: AgendaEntry, isFirst: boolean) => JSX.Element = (reservation) => (
	<AgendaItem item={reservation} />
)

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
					<Agenda
						items={{
							'2024-05-01': [
								{ name: 'Walking', day: '', height: 10 },
								{ name: 'Running', day: '', height: 10 },
							],
							'2024-05-02': [
								{ name: 'Cycling', day: '', height: 10 },
								{ name: 'Walking', day: '', height: 10 },
								{ name: 'Running', day: '', height: 10 },
							],
							'2024-05-03': [
								{ name: 'Jogging', day: '', height: 10 },
								{ name: 'Walking', day: '', height: 10 },
								{ name: 'Running', day: '', height: 10 },
							],
							'2024-05-30': [{ name: 'Writing', height: 10, day: '2022-05-02' }],
							'2024-06-10': [{ name: 'Writing', height: 10, day: '2022-05-02' }],
							'2024-06-30': [{ name: 'Writing', height: 10, day: '2022-05-02' }],
							'2024-07-30': [{ name: 'Writing', height: 10, day: '2022-05-02' }],
						}}
						showClosingKnob
						staticHeader
						showSixWeeks={false}
						showOnlySelectedDayItems
						animateScroll
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						renderItem={renderItem}
						renderEmptyData={() => {
							return <Text style={styles.itemText}>{'No Event'}</Text>
						}}
					/>
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
	item: {
		backgroundColor: 'white',
		flex: 1,
		borderRadius: 5,
		padding: 10,
		marginRight: 10,
		marginTop: 17,
	},
	itemText: {
		color: '#888',
		fontSize: 16,
	},
})

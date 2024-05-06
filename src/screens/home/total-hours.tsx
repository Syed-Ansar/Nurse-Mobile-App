import React, { memo } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Agenda, AgendaEntry } from 'react-native-calendars'

import Layout from '@/components/common/layout'
import { fontSize } from '@/constants/tokens'
import { horizontalScale, moderateScale, verticalScale } from '@/utils/responsive'

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
		<TouchableOpacity
			style={[
				styles.item,
				{ backgroundColor: JSON.parse(item.day).color ? JSON.parse(item.day).color : 'white' },
			]}
		>
			<Text
				style={[
					styles.itemText1,
					{ color: JSON.parse(item.day).color ? 'white' : JSON.parse(item.day).color },
				]}
			>
				{`${JSON.parse(item.day)?.startTime} - ${JSON.parse(item.day)?.endTime} - 4 hours stamped`}
			</Text>
			<Text
				style={[
					styles.itemText,
					{ color: JSON.parse(item.day).color ? 'white' : JSON.parse(item.day).color },
				]}
			>
				{item.name ? item.name : 'No Item'}
			</Text>
		</TouchableOpacity>
	)
})

const renderItem: (reservation: AgendaEntry, isFirst: boolean) => JSX.Element = (reservation) => (
	<AgendaItem item={reservation} />
)

const dataItem = [
	{
		facility: 'ABC Hospital',
		startTime: '2:00 PM',
		endTime: '10:30 PM',
		color: 'red',
	},
	{
		facility: 'CSA Hospital',
		startTime: '9:00 PM',
		endTime: '12:30 AM',
		color: 'blue',
	},
]
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
						automaticallyAdjustKeyboardInsets
						showClosingKnob
						staticHeader
						animateScroll
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						renderItem={renderItem}
						renderKnob={() => {
							return <View style={styles.knowStyles} />
						}}
						renderEmptyData={() => {
							return <Text style={styles.itemTextNoEvent}>No event for the day.</Text>
						}}
						stickyHeaderIndices={[1, 7]}
						directionalLockEnabled
						items={{
							'2024-05-01': [
								{ name: 'ABC Hospital', day: JSON.stringify(dataItem[0]), height: 10 },
								{ name: 'Running', day: JSON.stringify(dataItem[0]), height: 10 },
							],
							'2024-05-02': [
								{ name: 'Cycling', day: JSON.stringify(dataItem[1]), height: 10 },
								{ name: 'Walking', day: JSON.stringify(dataItem[1]), height: 10 },
								{ name: 'Running', day: JSON.stringify(dataItem[1]), height: 10 },
							],
						}}
						theme={{
							selectedDayTextColor: 'white',
							selectedDayBackgroundColor: '#3513DD',
							dotColor: '#3513DD',
							backgroundColor: 'white',
							todayTextColor: '#3513DD',
							dayTextColor: 'black',
						}}
						style={{
							borderRadius: 10,
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
	itemText1: {
		color: '#888',
		marginBottom: 5,
		fontSize: 12,
	},
	itemTextNoEvent: {
		color: 'black',
		marginTop: 30,
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '600',
	},
	knowStyles: {
		backgroundColor: '#00000066',
		height: 3,
		width: 50,
		marginTop: 15,
		borderRadius: 40,
	},
})

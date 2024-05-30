import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import ScreenLayout from '../screen-layout'

import { fontSize } from '@/constants/tokens'
import { horizontalScale, moderateScale, verticalScale } from '@/utils/responsive'

type Props = {
	navigation: any
}

const data = [
	{
		id: 1,
		facility: 'Hospital',
		date: '29/May/2024',
		amount: '-$21.00',
	},
	{
		id: 2,
		facility: 'Hospital',
		date: '29/May/2024',
		amount: '-$21.00',
	},
	{
		id: 3,
		facility: 'Hospital',
		date: '29/May/2024',
		amount: '-$21.00',
	},
	{
		id: 4,
		facility: 'ABC Hospital',
		date: '20/May/2024',
		amount: '-$31.00',
	},
	{
		id: 5,
		facility: 'ABC Hospital',
		date: '20/May/2024',
		amount: '-$31.00',
	},
	{
		id: 6,
		facility: 'ABC Hospital',
		date: '20/May/2024',
		amount: '-$31.00',
	},
	{
		id: 7,
		facility: 'ABC Hospital',
		date: '20/May/2024',
		amount: '-$31.00',
	},
	{
		id: 8,
		facility: 'ABC Hospital',
		date: '20/May/2024',
		amount: '-$31.00',
	},
	{
		id: 9,
		facility: 'ABC Hospital',
		date: '20/May/2024',
		amount: '-$31.00',
	},
]

const TotalEarnings = ({ navigation }: Props) => {
	return (
		<ScreenLayout navigation={navigation}>
			<View style={styles.container}>
				<View style={styles.card}>
					<Text style={styles.totalEarningsCard}>Earnings Available</Text>
					<View style={styles.amount}>
						<Text style={styles.amountText}>$1,000.00</Text>
						<Text style={styles.balance}>Your Balance</Text>
					</View>
				</View>
				<View style={styles.listContainer}>
					<Text style={styles.listHeader}>Transaction</Text>
					<FlatList
						data={data}
						centerContent
						showsVerticalScrollIndicator={false}
						keyExtractor={(item) => item.id.toString()}
						ItemSeparatorComponent={() => <View style={styles.listItemSeparator} />}
						contentContainerStyle={styles.flatListContainer}
						renderItem={({ item }) => (
							<View style={styles.listItem}>
								<View>
									<Text style={styles.listItemFacility}>{item.facility}</Text>
									<Text style={styles.listItemDate}>{item.date}</Text>
								</View>
								<View style={styles.listItemPriceContainer}>
									<Text style={styles.listItemPrice}>{item.amount}</Text>
								</View>
							</View>
						)}
					/>
				</View>
			</View>
		</ScreenLayout>
	)
}

export default TotalEarnings

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: moderateScale(15),
		paddingTop: verticalScale(15),
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
	listContainer: {
		flex: 1,
	},
	listHeader: {
		marginVertical: verticalScale(14),
		fontSize: fontSize.lg,
		fontWeight: '700',
	},
	listItem: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	listItemSeparator: {
		marginTop: verticalScale(16),
	},
	listItemFacility: {
		fontSize: fontSize.lg,
		fontWeight: '600',
	},
	listItemDate: {
		fontSize: fontSize.xs,
		fontWeight: '500',
		color: '#8A8A8A',
		marginTop: verticalScale(4),
	},
	listItemPriceContainer: {
		marginRight: horizontalScale(6),
	},
	listItemPrice: {
		fontSize: fontSize.xsm,
		fontWeight: '600',
	},
	flatListContainer: {
		paddingBottom: verticalScale(15),
	},
})

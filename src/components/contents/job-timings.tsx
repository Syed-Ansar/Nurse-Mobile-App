import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

import ClockInTime from '@/assets/svg/clock-in-time.svg'
import ClockOutTime from '@/assets/svg/clock-out-time.svg'
import { fontSize } from '@/constants/tokens'
import { utilsStyles } from '@/styles'

type Props = {
	startTime: string
	endTime: string
	containerStyles?: ViewStyle
}

const JobTimings = ({ endTime, startTime, containerStyles }: Props) => {
	return (
		<View style={[{ ...containerStyles }, styles.timingContainer]}>
			<View key="Clock In Time">
				<View style={styles.clockItem}>
					<ClockInTime />
					<View style={styles.clockItemGap}>
						<Text style={styles.clockHeaderText}>Clock In Time</Text>
						<View style={styles.clockTimeContainer}>
							<Text style={styles.clockTime}>{startTime}</Text>
						</View>
					</View>
				</View>
			</View>
			<View
				style={{
					...utilsStyles.itemSeparator,
					borderWidth: 0.4,
					height: '100%',
				}}
			/>
			<View key="Clock Out Time">
				<View style={styles.clockItem}>
					<ClockOutTime />
					<View style={styles.clockItemGap}>
						<Text style={styles.clockHeaderText}>Clock Out Time</Text>
						<View style={styles.clockTimeContainer}>
							<Text style={styles.clockTime}>{endTime}</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}

export default JobTimings

const styles = StyleSheet.create({
	timingContainer: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
	clockItem: {
		gap: 15,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	clockItemGap: {
		gap: 2,
	},
	clockHeaderText: {
		fontSize: fontSize.xxs,
		fontWeight: '400',
	},
	clockTimeContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 1,
	},
	clockTime: {
		fontSize: 12,
		fontWeight: '600',
	},
})

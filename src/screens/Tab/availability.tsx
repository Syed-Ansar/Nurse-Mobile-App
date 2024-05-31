import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CalendarList } from 'react-native-calendars'

import ScreenLayout from '../screen-layout'

type Props = object

const Availability = ({ navigation }: any) => {
	return (
		<ScreenLayout navigation={navigation}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Availability</Text>
			</View>
			<CalendarList
				// Callback which gets executed when visible months change in scroll view. Default = undefined
				onVisibleMonthsChange={(months) => {
					console.log('now these months are visible', months)
				}}
				// Max amount of months allowed to scroll to the past. Default = 50
				pastScrollRange={50}
				// Max amount of months allowed to scroll to the future. Default = 50
				futureScrollRange={50}
				// Enable or disable scrolling of calendar list
				// scrollEnabled={true}
				// Enable or disable vertical scroll indicator. Default = false
				showScrollIndicator
			/>
		</ScreenLayout>
	)
}

export default Availability

const styles = StyleSheet.create({})

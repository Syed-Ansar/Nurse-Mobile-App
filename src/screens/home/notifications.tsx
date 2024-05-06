import React, { useCallback, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'

import ScreenLayout from '../screen-layout'

import Layout from '@/components/common/layout'
import Notification from '@/components/contents/notification'
import Separator from '@/components/contents/separator'
import { notificationsData } from '@/libs/dummyData'
import { NotificationType } from '@/types'
import { SCREEN_WIDTH, verticalScale } from '@/utils/responsive'

type Props = {
	navigation: any
	notifications?: NotificationType
	route: any
}

const Notifications = ({ route, navigation }: Props) => {
	const [refreshing, setRefreshing] = useState(false)

	const onRefresh = useCallback(() => {
		setRefreshing(true)
		setTimeout(() => {
			setRefreshing(false)
		}, 2000)
	}, [])

	return (
		<ScreenLayout navigation={navigation}>
			<Layout navigation={navigation} headerTitle="Notification">
				<View>
					<FlatList
						data={notificationsData}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={styles.notificationsContainer}
						refreshControl={
							<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#3513DD']} />
						}
						renderItem={({ item, index }) => {
							return (
								<Notification data={item} index={index} navigation={navigation} route={route} />
							)
						}}
						ItemSeparatorComponent={() => {
							return (
								<View style={styles.separatorContainer}>
									<Separator />
								</View>
							)
						}}
					/>
				</View>
			</Layout>
		</ScreenLayout>
	)
}

export default Notifications

const styles = StyleSheet.create({
	notificationsContainer: {
		flex: 1,
		maxWidth: SCREEN_WIDTH,
		marginVertical: verticalScale(20),
	},
	separatorContainer: {
		marginVertical: verticalScale(20),
	},
})

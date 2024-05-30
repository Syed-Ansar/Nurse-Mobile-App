import { useCallback, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'

import ScreenLayout from '../screen-layout'

import Layout from '@/components/common/layout'
import JobHistoryItem from '@/components/contents/job-history-item'
import { jobsHistory } from '@/libs/dummyData'

export default function History({ navigation }: any) {
	const [refreshing, setRefreshing] = useState(false)

	const onRefresh = useCallback(() => {
		setRefreshing(true)
		setTimeout(() => {
			setRefreshing(false)
		}, 2000)
	}, [])

	return (
		<ScreenLayout navigation={navigation}>
			<Layout navigation={navigation} headerTitle="Job History">
				<FlatList
					data={jobsHistory}
					renderItem={({ item }) => {
						return <JobHistoryItem data={item} />
					}}
					ItemSeparatorComponent={() => {
						return <View style={styles.itemSeparator} />
					}}
					contentContainerStyle={styles.flatListContainer}
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#3513DD']} />
					}
				/>
			</Layout>
		</ScreenLayout>
	)
}

const styles = StyleSheet.create({
	itemSeparator: {
		marginVertical: 6,
	},
	flatListContainer: {
		marginBottom: 100,
	},
})

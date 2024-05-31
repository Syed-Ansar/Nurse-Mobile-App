import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ScreenLayout from '../screen-layout'

import Layout from '@/components/common/layout'

type Props = { navigation: any; route: any }

const JobHistoryDetails = ({ navigation, route }: Props) => {
	const { data } = route.params

	return (
		<ScreenLayout navigation={navigation}>
			<Layout navigation={navigation} headerTitle={data.name || 'Job Title'}>
				<View>
					<Text>{data.name}</Text>
					<Text>{data.status}</Text>
				</View>
			</Layout>
		</ScreenLayout>
	)
}

export default JobHistoryDetails

const styles = StyleSheet.create({})

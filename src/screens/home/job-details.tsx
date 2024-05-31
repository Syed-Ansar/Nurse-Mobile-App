import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ScreenLayout from '../screen-layout'

import Layout from '@/components/common/layout'

type Props = { navigation: any; route: any }

const JobDetails = ({ navigation, route }: Props) => {
	const { data } = route.params

	return (
		<ScreenLayout navigation={navigation}>
			<Layout navigation={navigation} headerTitle={data.facility || 'Job Title'}>
				<View>
					<Text>{data.id}</Text>
					<Text>{data.name}</Text>
					<Text>{data.facility}</Text>
				</View>
			</Layout>
		</ScreenLayout>
	)
}

export default JobDetails

const styles = StyleSheet.create({})

import React, { ReactNode } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import Header from '@/components/common/header'
import { SCREEN_WIDTH } from '@/utils/responsive'

type Props = {
	children: ReactNode
	navigation: Navigator
}

const ScreenLayout = ({ children, navigation }: Props) => {
	return (
		<SafeAreaView style={{ width: SCREEN_WIDTH, maxWidth: SCREEN_WIDTH, height: '100%' }}>
			<Header navigation={navigation} />
			{children}
		</SafeAreaView>
	)
}

export default ScreenLayout

const styles = StyleSheet.create({})

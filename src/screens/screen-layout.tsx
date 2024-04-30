import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import Header from '@/components/common/header'

type Props = {
	children: ReactNode
	navigation: Navigator
}

const ScreenLayout = ({ children, navigation }: Props) => {
	return (
		<SafeAreaView>
			<Header navigation={navigation} />
			{children}
		</SafeAreaView>
	)
}

export default ScreenLayout

const styles = StyleSheet.create({})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonHeader from '@/components/common/header'
import { Drawer } from 'expo-router/drawer'
import DrawerContent from '@/components/common/drawer-content'
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Stack } from 'expo-router'

type Props = {}

const DrawerLayout = (props: Props) => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	)
}

export default DrawerLayout

const styles = StyleSheet.create({})

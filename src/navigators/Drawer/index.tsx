import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import DrawerContent from '@/components/common/drawer-content'
import Dashboard from '@/screens/Tab/dashboard'
import Help from '@/screens/drawer/help'
import Settings from '@/screens/drawer/settings'
import Wallet from '@/screens/drawer/wallet'
import MainNavigator from '@/navigators/Main'
import { HomeNavigator } from '../Home'

type Props = object

const Drawer = createDrawerNavigator()

const DrawerNavigator = (props: Props) => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
				drawerLabelStyle: {
					marginLeft: -20,
				},
			}}
			drawerContent={DrawerContent}
		>
			<Drawer.Screen
				name="HomeNavigator"
				component={HomeNavigator}
				options={{
					drawerLabel: 'Dashboard',
					drawerItemStyle: { height: 0 },
				}}
			/>
			<Drawer.Screen
				name="Wallet"
				component={Wallet}
				options={{
					drawerLabel: 'Wallet',
					drawerIcon(props) {
						return <Entypo name="wallet" size={24} color="#667085" />
					},
				}}
			/>
			<Drawer.Screen
				name="Settings"
				component={Settings}
				options={{
					drawerLabel: 'Settings',
					drawerIcon(props) {
						return <Ionicons name="settings-sharp" size={24} color="#667085" />
					},
				}}
			/>
			<Drawer.Screen
				name="Help"
				component={Help}
				options={{
					drawerLabel: 'Help',
					drawerIcon(props) {
						return <MaterialCommunityIcons name="message-question" size={24} color="#667085" />
					},
				}}
			/>
		</Drawer.Navigator>
	)
}

export default DrawerNavigator

const styles = StyleSheet.create({})

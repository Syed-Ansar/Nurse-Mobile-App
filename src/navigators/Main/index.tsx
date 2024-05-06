import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ComplianceIcon from '@/assets/svg/compliance.svg'
import DashboardIcon from '@/assets/svg/dashboard.svg'
import HistoryIcon from '@/assets/svg/history.svg'
import InvoicesIcon from '@/assets/svg/invoices.svg'
import TransactionsIcon from '@/assets/svg/tansactions.svg'
import Compliance from '@/screens/Tab/compliance'
import Dashboard from '@/screens/Tab/dashboard'
import History from '@/screens/Tab/history'
import Invoices from '@/screens/Tab/invoices'
import Transactions from '@/screens/Tab/transactions'

const MainTab = createBottomTabNavigator()

const MainNavigator = () => {
	return (
		<SafeAreaProvider
			style={{
				backgroundColor: 'white',
			}}
		>
			<MainTab.Navigator
				initialRouteName="Dashboard"
				screenOptions={{
					tabBarActiveTintColor: 'blue',
					headerShown: false,
					tabBarInactiveTintColor: '#667085',
					tabBarStyle: {
						borderTopLeftRadius: 24,
						borderTopRightRadius: 24,
						paddingVertical: 20,
					},
					tabBarLabelStyle: {
						marginTop: 10,
						minHeight: 20,
					},
				}}
			>
				<MainTab.Screen
					name="Dashboard"
					component={Dashboard}
					options={{
						title: 'Dashboard',

						tabBarIcon: ({ color }) => <DashboardIcon color={color} fill={color} />,
					}}
				/>
				<MainTab.Screen
					name="Transactions"
					component={Transactions}
					options={{
						title: 'Transactions',
						tabBarIcon: ({ color }) => <TransactionsIcon color={color} fill={color} />,
					}}
				/>
				<MainTab.Screen
					name="Invoices"
					component={Invoices}
					options={{
						title: 'Invoices',
						tabBarIcon: ({ color }) => <InvoicesIcon color={color} fill={color} />,
					}}
				/>
				<MainTab.Screen
					name="History"
					component={History}
					options={{
						title: 'History',
						tabBarIcon: ({ color }) => <HistoryIcon color={color} fill={color} />,
					}}
				/>
				<MainTab.Screen
					name="Compliance"
					component={Compliance}
					options={{
						title: 'Compliance',
						tabBarIcon: ({ color }) => <ComplianceIcon color={color} fill={color} />,
					}}
				/>
			</MainTab.Navigator>
		</SafeAreaProvider>
	)
}

export default MainNavigator

const styles = StyleSheet.create({})

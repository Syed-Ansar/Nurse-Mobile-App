import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ComplianceIcon from '@/assets/svg/compliance.svg'
import DashboardIcon from '@/assets/svg/dashboard.svg'
import HistoryIcon from '@/assets/svg/history.svg'
import TotalEarningsIcon from '@/assets/svg/invoices.svg'
import AvailabilityIcon from '@/assets/svg/tansactions.svg'
import Availability from '@/screens/Tab/availability'
import Compliance from '@/screens/Tab/compliance'
import Dashboard from '@/screens/Tab/dashboard'
import History from '@/screens/Tab/history'
import TotalEarnings from '@/screens/Tab/total-earnings'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
	return (
		<SafeAreaProvider>
			<Tab.Navigator
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
				<Tab.Screen
					name="Dashboard"
					component={Dashboard}
					options={{
						title: 'Dashboard',

						tabBarIcon: ({ color }) => <DashboardIcon color={color} fill={color} />,
					}}
				/>
				<Tab.Screen
					name="Availability"
					component={Availability}
					options={{
						title: 'Availability',
						tabBarIcon: ({ color }) => <AvailabilityIcon color={color} fill={color} />,
					}}
				/>
				<Tab.Screen
					name="Total Earnings"
					component={TotalEarnings}
					options={{
						title: 'Total Earnings',
						tabBarIcon: ({ color }) => <TotalEarningsIcon color={color} fill={color} />,
					}}
				/>
				<Tab.Screen
					name="History"
					component={History}
					options={{
						title: 'History',
						tabBarIcon: ({ color }) => <HistoryIcon color={color} fill={color} />,
					}}
				/>
				<Tab.Screen
					name="Compliance"
					component={Compliance}
					options={{
						title: 'Compliance',
						tabBarIcon: ({ color }) => <ComplianceIcon color={color} fill={color} />,
					}}
				/>
			</Tab.Navigator>
		</SafeAreaProvider>
	)
}

export default MainNavigator

const styles = StyleSheet.create({})

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ForgetPassword from '@/screens/Auth/forget-password'
import ResetPassword from '@/screens/Auth/reset-password'
import SignIn from '@/screens/Auth/sign-in'
import Dashboard from '@/screens/Tab/dashboard'
import Transactions from '@/screens/Tab/transactions'
import Invoices from '@/screens/Tab/invoices'
import Compliance from '@/screens/Tab/compliance'
import Assessments from '@/screens/Tab/assessments'

import AssessmentsIcon from '@/assets/svg/assessments.svg'
import ComplianceIcon from '@/assets/svg/compliance.svg'
import DashboardIcon from '@/assets/svg/dashboard.svg'
import InvoicesIcon from '@/assets/svg/invoices.svg'
import TransactionsIcon from '@/assets/svg/tansactions.svg'
import { HomeNavigator } from '../Home'

const MainTab = createBottomTabNavigator()

const MainNavigator = () => {
	return (
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
				name="Assessments"
				component={Assessments}
				options={{
					title: 'Assessments',
					tabBarIcon: ({ color }) => <AssessmentsIcon color={color} fill={color} />,
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
	)
}

export default MainNavigator

const styles = StyleSheet.create({})

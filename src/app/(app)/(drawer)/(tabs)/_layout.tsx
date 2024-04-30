import { Tabs } from 'expo-router'
import React from 'react'

import Assessments from '@/assets/svg/assessments.svg'
import Compliance from '@/assets/svg/compliance.svg'
import Dashboard from '@/assets/svg/dashboard.svg'
import Invoices from '@/assets/svg/invoices.svg'
import Transactions from '@/assets/svg/tansactions.svg'

export default function TabLayout() {
	return (
		<Tabs
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
			<Tabs.Screen
				name="index"
				options={{
					title: 'Dashboard',
					tabBarIcon: ({ color }) => <Dashboard color={color} fill={color} />,
				}}
			/>
			<Tabs.Screen
				name="transactions"
				options={{
					title: 'Transactions',
					tabBarIcon: ({ color }) => <Transactions color={color} fill={color} />,
				}}
			/>
			<Tabs.Screen
				name="invoices"
				options={{
					title: 'Invoices',
					tabBarIcon: ({ color }) => <Invoices color={color} fill={color} />,
				}}
			/>
			<Tabs.Screen
				name="assessments"
				options={{
					title: 'Assessments',
					tabBarIcon: ({ color }) => <Assessments color={color} fill={color} />,
				}}
			/>
			<Tabs.Screen
				name="compliance"
				options={{
					title: 'Compliance',
					tabBarIcon: ({ color }) => <Compliance color={color} fill={color} />,
				}}
			/>
		</Tabs>
	)
}
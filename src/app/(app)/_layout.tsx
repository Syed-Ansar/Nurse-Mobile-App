import { Redirect, Stack } from 'expo-router'
import { Text, View } from 'react-native'
import { useSession } from '../../context/auth-context'
import CommonHeader from '@/components/common/header'
import { Drawer } from 'expo-router/drawer'
import DrawerContent from '@/components/common/drawer-content'
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

export default function AppLayout() {
	const { session, isLoading } = useSession()

	// You can keep the splash screen open, or render a loading screen like we do here.
	if (isLoading) {
		return <Text>Loading...</Text>
	}

	// Only require authentication within the (app) group's layout as users
	// need to be able to access the (auth) group and sign in again.
	if (!session) {
		// On web, static rendering will stop here as the user is not authenticated
		// in the headless Node process that the pages are rendered in.
		return <Redirect href="/sign-in" />
	}

	// This layout can be deferred because it's not the root layout.
	return (
		<Drawer
			drawerContent={DrawerContent}
			screenOptions={{
				header() {
					return <CommonHeader />
				},
				drawerLabelStyle: {
					// marginLeft: -20,
				},
				drawerActiveTintColor: '#667085',
				drawerInactiveTintColor: '#667085',
			}}
		>
			<Drawer.Screen
				name="(drawer)"
				options={{
					drawerLabel: 'Home',
					drawerItemStyle: { height: 0 },
				}}
			/>
			{/* <Drawer.Screen
				name="index"
				options={{
					drawerLabel: 'Home',
					drawerItemStyle: { height: 0 },
				}}
			/>
			<Drawer.Screen
				name="drawer/wallet"
				options={{
					drawerLabel: 'Wallet',
					drawerIcon(props) {
						return <Entypo name="wallet" size={24} color="#667085" />
					},
				}}
			/>
			<Drawer.Screen
				name="drawer/settings"
				options={{
					drawerLabel: 'Settings',
					drawerIcon(props) {
						return <Ionicons name="settings-sharp" size={24} color="#667085" />
					},
				}}
			/>
			<Drawer.Screen
				name="drawer/help"
				options={{
					drawerLabel: 'Help',
					drawerIcon(props) {
						return <MaterialCommunityIcons name="message-question" size={24} color="#667085" />
					},
				}}
			/> */}
		</Drawer>
	)
}

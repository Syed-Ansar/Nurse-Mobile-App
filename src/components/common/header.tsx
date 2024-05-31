import { EvilIcons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'

import Avatar from '@/assets/svg/avatar.svg'
import Bell from '@/assets/svg/bell-icon.svg'

const deviceDisplay = Dimensions.get('screen')

const Header = ({ navigation }: any) => {
	const drawerNavigation = useNavigation()
	return (
		<SafeAreaView>
			<LinearGradient colors={['#7450FE', '#3513DD']} style={styles.linearGradientContainer}>
				<View style={styles.container}>
					<View style={styles.hamburgerContainer}>
						<Pressable
							onPress={() => {
								drawerNavigation.dispatch(DrawerActions.openDrawer())
							}}
						>
							<EvilIcons name="navicon" size={28} color="white" />
						</Pressable>
						<Image source={require('@/assets/img/logo.png')} style={styles.logo} />
					</View>

					<View style={styles.rightActionContainer}>
						<Pressable
							onPress={() => {
								navigation.navigate('Notifications')
							}}
						>
							<Bell width={24} height={24} />
						</Pressable>
						<Pressable
							onPress={() => {
								navigation.navigate('Profile')
							}}
						>
							<Avatar width={30} height={30} />
						</Pressable>
					</View>
				</View>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default Header

const styles = StyleSheet.create({
	linearGradientContainer: {
		height: 55,
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		maxWidth: deviceDisplay.width,
		width: deviceDisplay.width,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		marginRight: 15,
	},
	hamburgerContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 15,
	},
	logo: { width: 150, height: '100%' },
	rightActionContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 15,
	},
})

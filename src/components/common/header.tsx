import { EvilIcons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { router, useNavigation } from 'expo-router'
import React from 'react'
import { Dimensions, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'

import Avatar from '@/assets/svg/avatar.svg'
import Bell from '@/assets/svg/bell-icon.svg'
import Logo from '@/assets/svg/logo.svg'

const deviceDisplay = Dimensions.get('screen')

const Header = () => {
	const navigation = useNavigation()
	return (
		<SafeAreaView>
			<LinearGradient
				colors={['#7450FE', '#3513DD']}
				style={{
					height: 55,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<View
					style={{
						maxWidth: deviceDisplay.width,
						width: deviceDisplay.width,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingHorizontal: 15,
						marginRight: 15,
					}}
				>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: 15,
						}}
					>
						<Pressable
							onPress={() => {
								navigation.dispatch(DrawerActions.openDrawer())
							}}
						>
							<EvilIcons name="navicon" size={28} color="white" />
						</Pressable>
						<Logo key="Logo 1" />
					</View>

					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: 15,
						}}
					>
						<Pressable
							onPress={() => {
								router.navigate('/(app)/(drawer)/(stacks)/notifications')
							}}
						>
							<Bell width={24} height={24} />
						</Pressable>
						<Pressable
							onPress={() => {
								router.navigate('/(app)/(drawer)/(stacks)/profile')
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

const styles = StyleSheet.create({})

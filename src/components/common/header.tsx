import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import Logo from '@/assets/svg/logo.svg'
import Bell from '@/assets/svg/bell-icon.svg'
import Avatar from '@/assets/svg/avatar.svg'

type Props = {}

const deviceDisplay = Dimensions.get('screen')

const Header = (props: Props) => {
	return (
		<SafeAreaView style={{}}>
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
						<EvilIcons name="navicon" size={28} color="white" />
						<Logo />
					</View>

					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: 15,
						}}
					>
						<Bell width={24} height={24} />
						<Avatar width={28} height={28} />
					</View>
				</View>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default Header

const styles = StyleSheet.create({})

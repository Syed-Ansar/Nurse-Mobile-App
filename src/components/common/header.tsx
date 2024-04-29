import {
	Dimensions,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import Logo from '@/assets/svg/logo.svg'
import Bell from '@/assets/svg/bell-icon.svg'
import Avatar from '@/assets/svg/avatar.svg'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

type Props = {}

const deviceDisplay = Dimensions.get('screen')

const Header = (props: Props) => {
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
						<Logo key={'Logo 1'} />
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
						<Avatar width={30} height={30} />
					</View>
				</View>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default Header

const styles = StyleSheet.create({})

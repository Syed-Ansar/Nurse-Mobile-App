import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import GradientButton from '@/ui/Button'
import Logout from '@/assets/svg/logout.svg'

type Props = {}

const DrawerContent = (props: any) => {
	return (
		<View
			style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'space-between' }}
		>
			<DrawerContentScrollView {...props}>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
			<View style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
				<View
					style={{
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#FAF8FE',
						paddingVertical: 18,
						marginLeft: 40,
						borderWidth: 2,
						borderColor: '#EAECF0',
						borderRadius: 12,
					}}
				>
					<Text
						style={{
							color: '#1B254B',
							textAlign: 'center',
							fontWeight: '700',
							fontSize: 14,
							width: 100,
							lineHeight: 20,
						}}
					>
						Letter for Confirmation
					</Text>
					<View
						style={{
							alignSelf: 'stretch',
							borderColor: '#EAECF0',
							borderWidth: StyleSheet.hairlineWidth,
							marginTop: 20,
						}}
					/>
					<Text
						style={{
							textAlign: 'center',
							color: '#667085',
							fontWeight: '400',
							fontSize: 12,
							marginTop: 20,
							marginBottom: 20,
							width: 160,
						}}
					>
						Please download the letter of confirmation from here
					</Text>
					<GradientButton
						title="Download"
						radius={4}
						height={36}
						buttonStyle={{
							width: 130,
						}}
					/>
				</View>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					gap: 2,
					paddingHorizontal: 20,
					marginTop: 20,
					marginBottom: 40,
				}}
			>
				<Logout />
				<Button title="Logout" color={'#667085'} />
			</View>
		</View>
	)
}

export default DrawerContent

const styles = StyleSheet.create({})

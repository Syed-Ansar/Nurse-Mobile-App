import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import * as Linking from 'expo-linking'
import React, { useEffect, useState } from 'react'
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import InputField from '@/components/ui/Input'
import { colors, fontSize } from '@/constants/tokens'
import { useNurseStore } from '@/store'
import { ProfileDataType } from '@/types'
import { SCREEN_WIDTH } from '@/utils/responsive'

type Props = {
	navigation: any
}

const Profile = ({ navigation }: Props) => {
	const { nurse } = useNurseStore()
	const route = useNavigation()

	const [profileData, setProfileData] = useState<ProfileDataType | null>(null)
	const [specializations, setSpecializations] = useState<string | null>(null)

	useEffect(() => {
		const findSpecialized: any = nurse?.assessmentReports.find((item: any) => {
			return item?.assessmentType === 'specialized'
		})
		if (findSpecialized) {
			const values = findSpecialized?.specializations
				?.map((item: any) => {
					return item.name
				})
				.join(', ')
			setSpecializations(values[0])
		}
		const ProfileData: ProfileDataType = {
			'ID/ Passport': nurse?.governmentId.documentNumber ?? 'Na',
			'Professional Category': nurse?.professionalCategory.name ?? 'Na',
			'SANC/ Practice Number': nurse?.practiceNumber ?? 'Na',
			'Specialization Selector': specializations ?? 'Na',
			'Called Rank': nurse?.professionalCategory.name ?? 'Na',
			'RWOP Number': nurse?.practiceNumber ?? 'Na',
		}
		setProfileData(ProfileData)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [nurse])

	useEffect(() => {
		;(() => {
			console.log('Linking', route.getState())
		})()
	}, [])

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{
				flex: 1,
			}}
		>
			<ScrollView>
				<LinearGradient colors={['#7450FE', '#3513DD']}>
					<SafeAreaView
						style={{
							height: 200,
							marginLeft: 16,
						}}
					>
						<View
							style={{
								width: '100%',
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								paddingVertical: 10,
								gap: 10,
							}}
						>
							<Pressable
								onPress={() => {
									navigation.goBack()
								}}
							>
								<Feather name="arrow-left" size={24} color="white" />
							</Pressable>
							<Text
								style={{
									fontWeight: '700',
									fontSize: 18,
									color: 'white',
								}}
							>
								Profile
							</Text>
						</View>
					</SafeAreaView>
				</LinearGradient>

				<View
					style={{
						display: 'flex',
						alignSelf: 'center',
						borderWidth: 5,
						borderRadius: 50,
						borderColor: 'white',
						marginTop: -55,
					}}
				>
					<Image
						source={{
							uri: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
							height: 87,
							width: 87,
						}}
						style={{
							borderRadius: 50,
						}}
					/>
				</View>
				<Text
					style={{
						width: '100%',
						textAlign: 'center',
						fontSize: 18,
						fontWeight: '600',
					}}
				>
					{nurse ? `${nurse.name} ${nurse.surname}` : 'Nurse Name'}
				</Text>
				<View
					style={{
						margin: 16,
					}}
				>
					<View
						style={{
							maxWidth: SCREEN_WIDTH,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'flex-start',
							borderRadius: 12,
							gap: 10,
							padding: 16,
							borderWidth: 1.2,
							borderColor: '#3513DD',
						}}
					>
						{profileData
							? Object.entries(profileData).map(([key, value]) => (
									<View
										key={key}
										style={{
											display: 'flex',
											flexDirection: 'row',
											justifyContent: 'space-between',
											width: '100%',
										}}
									>
										<Text
											style={{
												fontSize: fontSize.xs,
												fontWeight: '400',
												color: colors.secondaryText,
											}}
										>
											{key} :-
										</Text>
										<Text
											style={{
												fontSize: fontSize.xsm,
												fontWeight: '600',
											}}
										>
											{value}
										</Text>
									</View>
								))
							: null}
					</View>
					<View style={{ marginVertical: 28 }}>
						<InputField
							placeholder="Email/SANC"
							label="Enter Email/SANC"
							value={nurse?.email ?? ''}
							styles={{
								marginBottom: 25,
							}}
						/>
						<InputField
							placeholder="Enter Phone Number"
							label="Phone Number"
							keyboardType="phone-pad"
							value={nurse?.phoneNumber ?? ''}
							styles={{
								marginBottom: 25,
							}}
						/>
						<InputField
							placeholder="Enter Address"
							label="Address"
							value={nurse?.address ?? ''}
							styles={{
								marginBottom: 25,
							}}
						/>
						<InputField
							placeholder="Enter Change Password"
							label="Change Password"
							styles={{
								marginBottom: 25,
							}}
						/>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default Profile

const styles = StyleSheet.create({})

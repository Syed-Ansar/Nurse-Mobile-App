import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
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
			style={styles.keyboardAvoidingViewStyles}
		>
			<ScrollView>
				<LinearGradient colors={['#7450FE', '#3513DD']}>
					<SafeAreaView style={styles.safeAreaView}>
						<View style={styles.mainContainer}>
							<Pressable
								onPress={() => {
									navigation.goBack()
								}}
							>
								<Feather name="arrow-left" size={24} color="white" />
							</Pressable>
							<Text style={styles.heading}>Profile</Text>
						</View>
					</SafeAreaView>
				</LinearGradient>

				<View style={styles.container}>
					<Image
						source={{
							uri: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
							height: 87,
							width: 87,
						}}
						style={styles.imgStyles}
					/>
				</View>
				<Text style={styles.nurseName}>
					{nurse ? `${nurse.name} ${nurse.surname}` : 'Nurse Name'}
				</Text>
				<View style={styles.dataContainerTop}>
					<View style={styles.dataContainer}>
						{profileData
							? Object.entries(profileData).map(([key, value]) => (
									<View key={key} style={styles.dataKeyContainer}>
										<Text style={styles.dataKey}>{key} :-</Text>
										<Text style={styles.dataValue}>{value}</Text>
									</View>
								))
							: null}
					</View>
					<View style={{ marginVertical: 28 }}>
						<InputField
							placeholder="Email/SANC"
							label="Enter Email/SANC"
							value={nurse?.email ?? ''}
							styles={styles.inputStyle}
						/>
						<InputField
							placeholder="Enter Phone Number"
							label="Phone Number"
							keyboardType="phone-pad"
							value={nurse?.phoneNumber ?? ''}
							styles={styles.inputStyle}
						/>
						<InputField
							placeholder="Enter Address"
							label="Address"
							value={nurse?.address ?? ''}
							styles={styles.inputStyle}
						/>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default Profile

const styles = StyleSheet.create({
	keyboardAvoidingViewStyles: {
		flex: 1,
	},
	safeAreaView: {
		height: 200,
		marginLeft: 16,
	},
	mainContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
		gap: 10,
	},
	heading: {
		fontWeight: '700',
		fontSize: 18,
		color: 'white',
	},
	container: {
		display: 'flex',
		alignSelf: 'center',
		borderWidth: 5,
		borderRadius: 50,
		borderColor: 'white',
		marginTop: -55,
	},
	imgStyles: {
		borderRadius: 50,
	},
	nurseName: {
		width: '100%',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '600',
	},
	dataContainerTop: {
		margin: 16,
	},
	dataContainer: {
		maxWidth: SCREEN_WIDTH,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		borderRadius: 12,
		gap: 10,
		padding: 16,
		borderWidth: 1.2,
		borderColor: '#3513DD',
	},
	dataKeyContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	dataKey: {
		fontSize: fontSize.xs,
		fontWeight: '400',
		color: colors.secondaryText,
	},
	dataValue: {
		fontSize: fontSize.xsm,
		fontWeight: '600',
	},
	inputStyle: {
		marginBottom: 25,
	},
})

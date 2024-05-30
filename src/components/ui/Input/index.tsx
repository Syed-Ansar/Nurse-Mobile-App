import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
	KeyboardType,
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	TextStyle,
	View,
} from 'react-native'

type Props = {
	props?: TextInputProps
	inputStyles?: TextStyle
	labelStyles?: TextStyle
	styles?: TextStyle
	placeholder: string
	label?: string
	value?: string
	keyboardType?: KeyboardType
	onChange?: (value: string) => void
}

const InputField = ({
	props,
	inputStyles,
	labelStyles,
	styles,
	placeholder,
	keyboardType,
	value,
	label,
	onChange,
}: Props) => {
	const [showPassword, setShowPassword] = useState(!!props?.secureTextEntry)

	const toggleShowPassword = () => {
		setShowPassword(!showPassword)
	}

	return (
		<View
			style={{
				...styles,
				gap: 10,
			}}
		>
			{label ? (
				<Text
					style={{
						...labelStyles,
						color: '#1B254B',
						fontSize: 12,
						fontWeight: '600',
					}}
				>
					{label}
				</Text>
			) : null}
			<View style={inputCompStyle.mainContainer}>
				<View style={inputCompStyle.container}>
					<TextInput
						keyboardType={keyboardType ? keyboardType : 'default'}
						{...(value !== undefined ? { value } : {})}
						placeholder={placeholder || ''}
						onChangeText={(text) => {
							onChange?.(text)
						}}
						autoCapitalize="none"
						style={[
							{
								...inputStyles,
							},
							inputCompStyle.input,
						]}
						{...props}
						secureTextEntry={!!showPassword}
					/>
					{props?.secureTextEntry ? (
						<MaterialCommunityIcons
							name={showPassword ? 'eye-off' : 'eye'}
							size={24}
							color="#aaa"
							style={inputCompStyle.icon}
							onPress={toggleShowPassword}
						/>
					) : null}
				</View>
				<View />
			</View>
		</View>
	)
}

export default InputField

const inputCompStyle = StyleSheet.create({
	mainContainer: {
		position: 'relative',
		height: 48,
		borderColor: '#E5E7EB',
		borderWidth: 1,
		borderRadius: 16,
		paddingHorizontal: 10,
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f3f3f3',
		borderRadius: 8,
		paddingHorizontal: 14,
	},
	input: {
		paddingVertical: 10,
		paddingRight: 10,
		fontSize: 16,
		width: '100%',
	},
	icon: {
		position: 'absolute',
		right: 6,
	},
	heading: {
		alignItems: 'center',
		fontSize: 20,
		color: 'green',
		marginBottom: 20,
	},
})

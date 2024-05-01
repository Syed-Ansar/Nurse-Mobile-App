import React from 'react'
import { KeyboardType, StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'

type Props = {
	props?: TextInput
	inputStyles?: TextStyle
	labelStyles?: TextStyle
	styles?: TextStyle
	placeholder: string
	label?: string
	value?: string
	keyboardType?: KeyboardType
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
}: Props) => {
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
			<TextInput
				keyboardType={keyboardType ? keyboardType : 'default'}
				placeholder={placeholder || ''}
				{...(value !== undefined ? { value } : {})}
				style={{
					...inputStyles,
					width: '100%',
					height: 48,
					borderColor: '#E5E7EB',
					borderWidth: 1,
					borderRadius: 16,
					paddingHorizontal: 15,
				}}
			/>
		</View>
	)
}

export default InputField

const styles = StyleSheet.create({})

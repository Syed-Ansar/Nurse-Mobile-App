import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

import { utilsStyles } from '@/styles'

type Props = {
	separatorStyle?: ViewStyle
}

const Separator = ({ separatorStyle }: Props) => {
	return <View style={[{ ...separatorStyle }, styles.separator]} />
}

export default Separator

const styles = StyleSheet.create({
	separator: {
		...utilsStyles.itemSeparator,
		borderWidth: 0.2,
		marginHorizontal: 16,
	},
})

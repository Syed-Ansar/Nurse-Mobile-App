import React, { memo } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Item {
	name: string
	day: string
	height: number
}

interface AgendaItemProps {
	item: Item | undefined
}

const AgendaItem: React.FC<AgendaItemProps> = memo(({ item }) => {
	if (!item) return null

	return (
		<TouchableOpacity
			style={[
				styles.item,
				{ backgroundColor: JSON.parse(item.day).color ? JSON.parse(item.day).color : 'white' },
			]}
		>
			<Text
				style={[
					styles.itemText1,
					{ color: JSON.parse(item.day).color ? 'white' : JSON.parse(item.day).color },
				]}
			>
				{`${JSON.parse(item.day)?.startTime} - ${JSON.parse(item.day)?.endTime} - 4 hours stamped`}
			</Text>
			<Text
				style={[
					styles.itemText,
					{ color: JSON.parse(item.day).color ? 'white' : JSON.parse(item.day).color },
				]}
			>
				{item.name ? item.name : 'No Item'}
			</Text>
		</TouchableOpacity>
	)
})

export default AgendaItem

const styles = StyleSheet.create({
	item: {
		backgroundColor: 'white',
		flex: 1,
		borderRadius: 5,
		padding: 10,
		marginRight: 10,
		marginTop: 17,
	},
	itemText: {
		color: '#888',
		fontSize: 16,
	},
	itemText1: {
		color: '#888',
		marginBottom: 5,
		fontSize: 12,
	},
})

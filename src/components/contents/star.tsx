import React from 'react'
import { StyleSheet, View } from 'react-native'

import StarIcon from '@/assets/svg/star.svg'

type Props = {
	numberOfTimes?: number
}

const Star = ({ numberOfTimes }: Props) => {
	return (
		<View style={styles.starContainer}>
			{Array.from({ length: numberOfTimes ?? 5 }).map((_, index) => {
				return <StarIcon key={index} width={14} height={14} />
			})}
		</View>
	)
}

export default Star

const styles = StyleSheet.create({
	starContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
})

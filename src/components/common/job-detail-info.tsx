import React, { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { fontSize } from '@/constants/tokens'

type Props = {
	data: {
		infoKey?: string
		infoValue?: string
		icon: ReactNode
	}
}

const JobDetailInfo = ({ data }: Props) => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.container}>{data.icon}</View>
			<View style={styles.spacer}>
				{data.infoKey ? <Text style={styles.infoKey}>{data.infoKey}</Text> : null}
				{data.infoValue ? <Text style={styles.infoValue}>{data.infoValue}</Text> : null}
			</View>
		</View>
	)
}

export default JobDetailInfo

const styles = StyleSheet.create({
	mainContainer: {
		marginVertical: 14,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
	},
	container: {
		backgroundColor: '#D3D3D3',
		padding: 10,
		borderRadius: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 50,
		height: 50,
	},
	spacer: {
		gap: 5,
	},
	infoKey: {
		fontSize: fontSize.sm,
		fontWeight: '600',
	},
	infoValue: {
		fontSize: fontSize.xsm,
		fontWeight: '400',
		color: 'gray',
	},
})

import { Button, StyleSheet, Text, View } from 'react-native'

import { useSession } from '../../context/auth-context'
import GradientButton from '@/components/ui/Button'
import Logout from '@/assets/svg/logout.svg'

export default function Index() {
	const { signOut } = useSession()
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text
				onPress={() => {
					signOut()
				}}
			>
				Sign Out
			</Text>
		</View>
	)
}

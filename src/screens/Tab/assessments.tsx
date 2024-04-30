import { View, Text } from 'react-native'

import ScreenLayout from '../screen-layout'

export default function Assessments({ navigation }: any) {
	return (
		<ScreenLayout navigation={navigation}>
			<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
				<Text>Assessments</Text>
			</View>
		</ScreenLayout>
	)
}

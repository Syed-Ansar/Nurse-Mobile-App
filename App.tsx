import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'

import Main from '@/app/main'
import { SessionProvider } from '@/context/auth-context'

const App = () => {
	return (
		<SafeAreaView style={styles.AndroidSafeArea}>
			<SessionProvider>
				<Main />
			</SessionProvider>
		</SafeAreaView>
	)
}

export default App

const styles = StyleSheet.create({
	AndroidSafeArea: {
		flex: 1,
		paddingTop: Platform.OS === 'android' && Platform.Version > 29 ? StatusBar.currentHeight : 0,
	},
})

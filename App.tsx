import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

import Main from '@/app/main'
import { SessionProvider } from '@/context/auth-context'

const App = () => {
	return (
		<SafeAreaView style={styles.AndroidSafeArea}>
			<StatusBar barStyle="light-content" />
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
	},
})

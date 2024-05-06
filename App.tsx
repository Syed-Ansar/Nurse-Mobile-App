import { StatusBar, StyleSheet, View } from 'react-native'

import Main from '@/app/main'
import { SessionProvider } from '@/context/auth-context'

const App = () => {
	return (
		<View style={styles.container}>
			<SessionProvider>
				<StatusBar barStyle="dark-content" backgroundColor={'white'} />
				<Main />
			</SessionProvider>
		</View>
	)
}

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

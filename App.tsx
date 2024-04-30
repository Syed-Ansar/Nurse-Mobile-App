import Main from '@/app/main'
import { SessionProvider } from '@/context/auth-context'

const App = () => {
	return (
		<SessionProvider>
			<Main />
		</SessionProvider>
	)
}

export default App

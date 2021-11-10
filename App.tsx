import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Routes from './src/routes';

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<Routes />
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	)
};

export default App;
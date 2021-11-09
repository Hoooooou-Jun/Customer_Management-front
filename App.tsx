import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Navigation from './src/routes';

const App = () => {
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<NavigationContainer>
					<Navigation />
				</NavigationContainer>
			</Provider>
		</SafeAreaProvider>
	)
};

export default App;
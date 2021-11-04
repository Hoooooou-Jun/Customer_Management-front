import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import SignNavi from './src/routes';

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SignNavi />
			</NavigationContainer>
		</Provider>
	)
};

export default App;

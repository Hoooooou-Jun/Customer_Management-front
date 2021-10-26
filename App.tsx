import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignNavi from './src/routes';

const App = () => {
	return (
		<NavigationContainer>
			<SignNavi />
		</NavigationContainer>
	)
};

export default App;

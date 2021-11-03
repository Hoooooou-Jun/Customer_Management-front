import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignNavi from './src/routes';

// redux 상태 값에 따른 렌더처리 해야함.

const App = () => {
	return (
		<NavigationContainer>
			<SignNavi />
		</NavigationContainer>
	)
};

export default App;

import { Route, Routes } from 'react-router';
import React from 'react';
import { HOME } from './Constants/Routes/RoutesConstant';
import Home from './Views/AppView/Home/Home';

function App() {
	return (
		<Routes>
			<Route path={`${HOME}`} element={<Home />} />
		</Routes>
	);
}

export default App;

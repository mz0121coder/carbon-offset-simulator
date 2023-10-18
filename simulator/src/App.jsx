import React from 'react';
import logo from './assets/mz-tech-logo.png';
import { useRecoilState } from 'recoil';
import { loggedInState } from './utils/atoms.js';
import GetStarted from './pages/GetStarted';
import HomePage from './pages/HomePage';

const App = () => {
	const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
	const loginUser = () => setLoggedIn(true);
	const logoutUser = () => setLoggedIn(false);
	return !loggedIn ? <GetStarted loginUser={loginUser} /> : <HomePage />;
};

export default App;

import './App.css';
import React from 'react';
import useTranslate from './Hooks/useTranslate';

function App() {
	const { t } = useTranslate();
	return (
		<div>
			<h1>{t('welcome')}</h1>
			<p>{t('greeting', { name: 'John' })}</p>
		</div>
	);
}

export default App;

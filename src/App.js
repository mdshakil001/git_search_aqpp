import React from 'react';
import './App.css';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	console.log('rendering test');
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/login" element={<Login />} />

			<Route
				path="*"
				element={
					<main style={{ padding: '10rem', color: '#8D3624' }}>
						<h2>There's nothing here!!</h2>
						<Link to="/">back to home ?</Link>
					</main>
				}
			/>
		</Routes>
	);
}

export default App;
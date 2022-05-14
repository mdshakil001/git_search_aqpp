import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GithubProvider } from './context/context';

// domain
// dev-43f1k5cn.us.auth0.com

// client_id
// l2jmJRDw3AZBAdJDhz3wBiT8zLJoGsfB

// http://localhost:3000

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<GithubProvider>
			<App />
		</GithubProvider>
	</BrowserRouter>
);

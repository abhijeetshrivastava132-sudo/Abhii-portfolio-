import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/reset.css';
import './styles/tokens.css';
import './styles/globals.css';
import './styles/loader.css';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  
import { store } from './store';         
import App from '../App.jsx';
import styles from '../../styles.css';

let root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
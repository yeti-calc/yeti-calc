import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App.jsx';
import styles from '../../styles.css'
import { Provider } from 'react-redux';
// import { store } from './store'

let root = createRoot(document.getElementById('root'))


root.render(
    <Provider>
          <App />
    </Provider>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <Provider store={store}>
//         <App />
//     </Provider>
// )
// //

import React from 'react';
import { Provider } from 'react-redux';
import { useState } from 'react';
import Login from './src/Login.jsx';
import Calculator from './Calculator.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleInputChange, handleCalcSubmit } from './src/mortgageActions';

const App = () => {
  // const dispatch = useDispatch();
  // const counter = useSelector(state => state.counter);
  // const { mortgageInputs } = useSelector(state => state.mortgage);

  const [login, setLogin] = useState(false);

  const loginfunc = () => {
    setLogin((pastState) => !pastState);
    //console.log(login);
  };

  if (!login) {
    return (
      <div>
        <button onClick={loginfunc}>Go To Login </button>
        <Calculator />
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={loginfunc}>Back to Homepage </button>
        <Login />
      </div>
    );
  }
};

// ! 'npm install @reduxjs/toolkit react-redux' installs redux toolkit

//^ Redux Store -- contains slices of state for app
// -- stores values of the above input fields for our app? -- usually in index.js

//^ Actions -- tell Redux what to do to the state
// -- notified by specified "type:" action, with "payload: " which sends data to slice

//^ Reducers -- take actions and apply them to to slices in our Redux store
// immutability means reducers will never change state of the Redux store, instead make copy of state and make changes to that copy, and then replace state of whole with copy. REDUX DOESN'T WORK IF YOU MAKE CHANGE TO ACTUAL STATE

//^ Dispatch -- used to send actions to update the data

// import { Provider } from "react-redux" //* allows us to connect redux store to our React App, works w/ redux context API, allows us to use store in any React component
// import { store } from "./state/store.ts" //*

// ReactDOM.createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

export default App;

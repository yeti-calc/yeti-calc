import React from 'react';
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';
import Login from './src/Login.jsx';
import Calculator from './Calculator.jsx';
//import RenderSched from 'frontend/RenderSched.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleInputChange, handleCalcSubmit } from './src/mortgageActions';
import SignIn from './SignIn.jsx';

const App = () => {
  const dispatch = useDispatch(); // Redux code that isn't used
  // const counter = useSelector(state => state.counter);
  const { mortgageInputs, savedCalculations } = useSelector(state => state.mortgage);// Redux code that isn't used

  const [page, setPage] = useState(1); // using React useState conditional logic to re-render Sign-Up, Login, and Calculator page

  const loginfunc = (num) => {
    setPage(num); // setter func on line 16
    console.log(page);
  };

  if (page === 1) { // if page is set to 1, returns following navbar and Calc page
    return (
      <div>
        <button
          onClick={() => {
            loginfunc(1);
          }}
        >
          Back to Homepage{' '}
        </button>
        <button
          onClick={() => {
            loginfunc(2);
          }}
        >
          Sign Up{' '}
        </button>
        <button
          onClick={() => {
            loginfunc(3);
          }}
        >
          Sign In!
        </button>
        <Calculator />
      </div>
    );
  } else if (page === 2) { // if page is set to 2, returns following navbar and Login page
    return (
      <div>
        <button
          onClick={() => {
            loginfunc(1);
          }}
        >
          Back to Homepage{' '}
        </button>
        <button
          onClick={() => {
            loginfunc(2);
          }}
        >
          Sign Up{' '}
        </button>
        <button
          onClick={() => {
            loginfunc(3);
          }}
        >
          Sign In!
        </button>
        <Login />
      </div>
    );
  } else if (page === 3) { // if page is set to 3, returns following navbar and Sign-in page
    return (
      <div>
        <button
          onClick={() => {
            loginfunc(1);
          }}
        >
          Back to Homepage{' '}
        </button>
        <button
          onClick={() => {
            loginfunc(2);
          }}
        >
          Sign Up{' '}
        </button>
        <button
          onClick={() => {
            loginfunc(3);
          }}
        >
          Sign In!
        </button>
        <SignIn />
      </div>
    );
  } else {
    return <h1>An Error Happened!</h1>; // error handler
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

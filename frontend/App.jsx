import React from 'react';
import handleSubmit from '../backend/request';
import { useDispatch, useSelector } from 'react-redux';
import { handleInputChange, handleCalcSubmit } from './src/mortgageDispatches';

const App = () => {
  const dispatch = useDispatch();
  //const counter = useSelector(state => state.counter);
  const { mortgageInputs } = useSelector(state => state.mortgage)

  return (
    <main>
      <h1>Yeti Crab Mortgage Calculator</h1>
      <div>
        <input
          id='loanAmt'
          type='number'
          name='loanAmount'
          placeholder='Loan Amount'
        ></input>
      </div>
      <br></br>
      <div>
        <select name='loanTerm' id='loanTerm'>
          <option value=''>Select Loan Term</option>
          <option value='15'>15 Years</option>
          <option value='20'>20 Years</option>
          <option value='30'>30 Years</option>
        </select>
      </div>
      <br></br>
      <div>
        <input
          type='number'
          name='interestRate'
          placeholder='Interest Rate'
          id='interestRate'
        ></input>
      </div>
      <br></br>
      <div>
        <input
          type='number'
          name='homeInsurance'
          placeholder='Home Insurance'
          id='homeInsurance'
        ></input>
      </div>
      <br></br>
      <button type='submit' className='button' onClick={handleSubmit}>
        {' '}
        Submit{' '}
      </button>
    </main>
  );
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

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import calaculateMortgagePayments from './src/calaculateMortgagePayments';

const App = () => {
  const handleSubmit = async (e) => {
    // get the user's values
    let loan_amount = Number(document.querySelector('#loanAmmount').value);
    //console.log(loan_amount)

    let loan_term = Number(document.querySelector('#loanTerm').value);
    //console.log(loan_term)

    let interest =  Number(document.querySelector('#interestRate').value);
    //console.log(interest)

    let home_insurance = Number(document.querySelector('#homeInsurance').value);
    //console.log(home_insurance)

    //send user data to be saved in database
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const promise = await fetch('/api/savevalues', {
        method: 'POST',
        body: JSON.stringify({ loan_amount, loan_term, interest }),
        headers: myHeaders
      });
      const data = await response.json();
      console.log('data returned: ', data);
    } catch (error) {
      console.log('Error in handleSubmit function in the App.jsx', error);
    }

    // invoke the formula
    let array = calaculateMortgagePayments(loan_amount, interest, loan_term);
    //console.log(array);

    return;
  };

  return (
    <main>
      <h1>Yeti Crab Mortgage Calculator</h1>
      <div>
        <input
          id='loanAmmount'
          type='number'
          name='loanAmt'
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

// ReactDOM.createRoot(document.getElementById("root")!).render(
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import handleSubmit from '../backend/request';
import { useState } from 'react';

const App = () => {
  const [login, setLogin] = useState(true);

  const loginfunc = () => {
    setLogin((pastState) => !pastState);
    console.log(login);
  };

  const newUserEntry = () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    console.log(username, password);
  };

  if (!login) {
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
        <button onClick={loginfunc}>Go To Login </button>
      </main>
    );
  } else {
    return (
      <div className='pageContianer'>
        <div id='titleContainer'>
          <div id='icon'></div>
          <h3>Yeti Crab Mortgage Calculator</h3>
        </div>

        <div className='loginContainer'>
          <h2>Create An Account</h2>

          <div className='userlogin'>
            <label for='username'>Enter Your New Username</label>
            <br></br>
            <input
              id='username'
              name='username'
              placeholder="Ex: 'Jayson123'/'Goku' "
            ></input>
          </div>
          <div className='passlogin'>
            <label for='password'>Enter Your New Password</label>
            <br></br>
            <input
              id='password'
              name='password'
              placeholder='Numbers & Characters'
            ></input>
            <br></br>
            <button className='userSubmit' onClick={newUserEntry}>
              {' '}
              Become a new User
            </button>
          </div>

          <button onClick={loginfunc}>Back to Homepage </button>
        </div>
        <div className='mortgageImage'></div>
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

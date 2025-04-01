import React from 'react';
import { useState, useEffect } from 'react';
import handleSubmit from '../backend/request';
import RenderSched from './RenderSched.jsx';

const Calculator = () => {
  const [data, setData] = useState([]);

  const Principle = async () => {
    const promise = await handleSubmit(); // handleSubmit returns amortization array, request to diff file returns a promise (data would contain amortization array)
    let amortization = await promise; // transfers res data into var labelled amortization in this file
    //console.log('data:', data)

    setData((data) => { // saves + updates amortization table to current state
      // let array = [...data];
      // array.push(amortization);
      return amortization; // returns array of obj
    });

    //console.log("newdata: ", data)
    //console.log('calculator: ', amortization);
    return;
  };

  return (
    <main id='main'>
      <div className='one'>
      <h1>Yeti Crab Mortgage Calculator</h1>
      <div className='input-container'>
        <input
          id='loanAmmount'
          type='number'
          name='loanAmt'
          placeholder='Loan Amount'
        ></input>
      </div>
      <br></br>
      <div className='input-container'>
        <select name='loanTerm' id='loanTerm'>
          <option value=''>Select Loan Term</option>
          <option value='15'>15 Years</option>
          <option value='20'>20 Years</option>
          <option value='30'>30 Years</option>
        </select>
      </div>
      <br></br>
      <div className='input-container'>
        <input
          type='number'
          name='interestRate'
          placeholder='Interest Rate'
          id='interestRate'
        ></input>
      </div>
      <br></br>
      <div className='input-container'>
        <input
          type='number'
          name='homeInsurance'
          placeholder='Home Insurance'
          id='homeInsurance'
        ></input>
      </div>
      <br></br>
      <button type='submit' className='button' onClick={Principle}>
        {' '}
        Submit{' '}
      </button>
      </div>
      <div className='two'> <RenderSched schedule={data} /></div> 
     
    </main>
  );
};

// {data} coming from useState here, set to var schedule, passed as a prop to RenderSched

export default Calculator;

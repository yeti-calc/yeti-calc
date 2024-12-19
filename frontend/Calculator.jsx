import React from 'react';
import { useState, useEffect } from 'react';
import handleSubmit from '../backend/request';
import RenderSched from './RenderSched.jsx';

const Calculator = () => {
  const [data, setData] = useState([]);

  const Principle = async () => {
    const promise = await handleSubmit();
    let amortization = await promise;
    //console.log('data:', data)

    setData((data) => {
      // let array = [...data];
      // array.push(amortization);
      return amortization;
    });

    //console.log("newdata: ", data)
    //console.log('calculator: ', amortization);
    return;
  };

  return (
    <main>
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
      <RenderSched schedule={data} />
    </main>
  );
};

export default Calculator;

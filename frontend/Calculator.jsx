import React from "react";
import handleSubmit from '../backend/request';

const Calculator = () => {
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

}

export default Calculator
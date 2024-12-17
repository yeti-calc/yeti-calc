import React from "react"
import { createSlice } from '@reduxjs/toolkit'  // imports react components?

const App = () => {
    return (
        <main>
            <h1>Yeti Crab Mortgage Calculator</h1>
        <div>
            <input type='number' name='principle' placeholder='Principle Amt'></input>
        </div>
        <br></br>
        <div>            
            <select
                name='loanTerm'
                value=''
                onChange=''
            >
            <option value=''>Select Loan Term</option>
            <option value='15'>15 Years</option>
            <option value='20'>20 Years</option>
            <option value='30'>30 Years</option>
            </select>
        </div>
        <br></br>
        <div>
            <input type='number' name='loanAmt' placeholder='Loan Amt'></input>
        </div>
        <br></br>
        <div>
            <input type='number' name='homeInsurance' placeholder='Home Insurance'></input>
        </div>
        </main>
    )
}

// ! 'npm install @reduxjs/toolkit react-redux' installs redux toolkit

export default App


    
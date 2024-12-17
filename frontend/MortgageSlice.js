import { createSlice } from '@reduxjs/toolkit'; // imports react components? //*W  why createSlice and not configureStore?

const initialState = {
    mortgageInputs: {
        principle: '',
        loanTerm: '',
        loanAmount: '',
        homeInsurance: '',
    },
    savedCalcs: []
};

const mortgageSlice = createSlice({
    name: 'mortgage',
    initialState,
    reducers: {
        
    }
})
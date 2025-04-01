// REDUX code that eventually was left unfinished and unused

import { createSlice } from '@reduxjs/toolkit'; //* defines reducers and actions in concise way

const initialState = {
    mortgageInputs: {
        loanAmount: '',
        loanTerm: '',
        interestRate: '',
        homeInsurance: ''
    },
    savedCalculations: []
};

const mortgageSlice = createSlice({
    name: 'mortgage',
    initialState,
    reducers: {
        // ~ Save user inputs
        saveFormInputs(state, action) {
            state.mortgageInputs = {
                ...state.mortgageInputs, //spread operator saves input values
                ...action.payload // spread new values from dispatch into state
            };
        },
        // ~ Save new mortgage calculation
        saveCalc(state, action) {
            const newCalculation = {
                id: Date.now(), // id was going to be date + time of entry
                ...state.mortgageInputs,
                monthlyPayment: action.payload.monthlyPayment, // RESEARCH: does it require ... before action.payload.
                date: new Date().toISOString()
            };
          state.savedCalculations.push(newCalculation);
        },
        // ~ Load saved calculations (from db)
        loadCalc(state, action) {
            state.savedCalculations = action.payload;
        },
        // ~ Update calculations (ternary syntax: condition ? exprIfTrue : exprIfFalse)
        updateCalc(state, action) {
            const { id, updates } = action.payload;
            state.savedCalculations = state.savedCalculations.map(calc =>
                calc.id === id ? { ...calc, ...updates } : calc
                );
        },
        // ~ Delete calculations (DELETE_ITEM: (state, action) => ({ ...state, items: state.items.filter(item => action.payload !== item)lastUpdated: Date.now()}))
        deleteCalc(state, action) {
            // const { id } = action.payload
            state.savedCalculations = state.savedCalculations.filter(
                calc => calc.id !== action.payload // implicit return, returning everything except for id we're looking for in new reassigned array
            );
        }
    }
});

export const {
    saveFormInputs,
    saveCalc,
    updateCalc,
    deleteCalc
} = mortgageSlice.actions;

export default mortgageSlice.reducer;
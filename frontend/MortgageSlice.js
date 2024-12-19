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
        // ~ Save new mortgage calculation
        saveCalculation(state, action) {
            const newCalculation = {
                id: Date.now(),
                ...state.mortgageInputs,
                monthlyPayment: action.payload.monthlyPayment,
                date: new Date().toISOString()
            };
          state.savedCalculations.push(newCalculation);
        },
        // ~ Load saved calculations (from db)
        loadCalculation(state, action) {
            state.savedCalculations = action.payload;
        },
        // ~ Update calculations
        updateCalculation(state, action) {

        },
        // ~ Delete calculations
        deleteCalculation(state, action) {
            state.savedCalculations = 
        }
    }
});

export const {
    saveCalculation,
    loadCalculation,
    updateCalculation,
    deleteCalculation
} = mortgageSlice.actions;

export default mortgageSlice.reducer;
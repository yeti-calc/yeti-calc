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
                id: Date.now(),
                ...state.mortgageInputs,
                monthlyPayment: action.payload.monthlyPayment,
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
                calc => calc.id !== action.payload
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
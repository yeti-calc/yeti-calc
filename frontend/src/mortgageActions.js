import calculateMortgagePayments from './calaculateMortgagePayments';
import {
    saveFormInputs,
    saveCalc,
    updateCalc,
    deleteCalc
} from './mortgageSlice';
// import { useDispatch } from 'react-redux';

export const handleInputChange = (dispatch) => (e) => {
    const { name, value } = e.target;
    dispatch(saveFormInputs({
        [name]: value
    }));
};

export const handleCalcSubmit = (dispatch) => (mortgageInputs) => {
    const { loanAmount, loanTerm, interestRate } = mortgageInputs;

    const amortizationTable = calculateMortgagePayments(
        Number(loanAmount),
        Number(interestRate),
        Number(loanTerm)
    );

    dispatch(saveCalc({
        amortizationTable,
        date: new Date().toISOString()
    }));
};

export const handleUpdates = (dispatch) => (id, updates) => {
    dispatch(updateCalc({
        id,
        updates
    }));
};

export const handleDelete = (dispatch) => (id) => {
    dispatch(deleteCalc(id));
};

//test
// document
// .getElementsByClassName('button')
// .addEventListener("click", function () {
//     // saving inputs from fields
//     store.dispatch({type: "form entry"})
// })

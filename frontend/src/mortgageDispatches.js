import calculateMortgagePayments from './calculateMortgagePayments';
import {
    saveFormInputs,
    saveCalc,
    updateCalc,
    deleteCalc
} from './src/mortgageSlice';
import { useDispatch } from 'react-redux';

export const handleInputChange = (dispatch) => (e) => {
    const { name, value } = e.target;
    dispatch(saveFormInputs({
        [name]: value
    }));
};

export const calcSubmit = (dispatch) => (mortgageInputs) => {
    const { loanAmount, loanTerm, interestRate } = mortgageInputs;

    const amortizationTable = calculateMortgagePayments(
        Number(loanAmount),
        Number(interestRate),
        Number(loanTerm)
    );

    dispatch(saveCalc({
        amortizationTable
    }));
};




// document
// .getElementsByClassName('button')
// .addEventListener("click", function () {
//     // saving inputs from fields
//     store.dispatch({type: "form entry"})
// })
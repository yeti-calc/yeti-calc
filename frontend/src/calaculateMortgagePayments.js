// import React from 'react';

// the formula for amortization table:

function calaculateMortgagePayments(
  loanAmount,
  annualInterestRate,
  loanTermYears
) {
  const amortization = [];

  const monthlyInterestRate = annualInterestRate / 12 / 100; //I
  const totalPayments = loanTermYears * 12;


  // calculated formula for monthly payments
  const numerator = 
    monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments);
  const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
  const monthlyPayment = loanAmount * (numerator / denominator);
  //const principal = monthlyPayment - monthlyInterestRate; //P

  let remainingBalance = loanAmount;

  //iterating through each month to show the monthly payments from month 1 to (term size 15, 20 or 30):
  for (let month = 1; month <= totalPayments; month++) {
    const interestPayment = remainingBalance * monthlyInterestRate; // Interest portion
    const principalPayment = monthlyPayment - interestPayment; // Principal portion
    remainingBalance -= principalPayment; // decrements principal payment each month
    
    amortization.push({ // pushing each month's payment info into an object that goes into an array
      interestPayment: interestPayment.toFixed(2), // saving to 2 decimal points
      principalPayment: principalPayment.toFixed(2),
      remainingBalance: remainingBalance.toFixed(2),
      month,
    });
  }

  // console.log(`Loan Amount: $${loanAmount}`);
  // console.log(`Interest Rate: ${annualInterestRate}%`);
  // console.log(`Loan Term: ${loanTermYears} years`);
  // console.log(`Monthly Payment(PI): $${monthlyPayment.toFixed(2)}`);
  // console.log(remainingBalance.toFixed(2));

  return amortization; // returning an array of objects
}

// const array = calaculateMortgagePayments(300000, 4, 30);
// console.log(array)

export default calaculateMortgagePayments;

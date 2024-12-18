// import React from 'react';

function calaculateMortgagePayments(
  loanAmount,
  annualInterestRate,
  loanTermYears
) {
  const monthlyInterestRate = annualInterestRate / 12 / 100; //I
  const totalPayments = loanTermYears * 12;

  const numerator =
    monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments);
  const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
  const monthlyPayment = loanAmount * (numerator / denominator);
  //const principal = monthlyPayment - monthlyInterestRate; //P

  let remainingBalance = loanAmount;

  for (let month = 1; month <= totalPayments; month++) {
    const interestPayment = remainingBalance * monthlyInterestRate; // Interest portion
    const principalPayment = monthlyPayment - interestPayment; // Principal portion
    remainingBalance -= principalPayment;
  }

  console.log(`Loan Amount: $${loanAmount}`);
  console.log(`Interest Rate: ${annualInterestRate}%`);
  console.log(`Loan Term: ${loanTermYears} years`);
  console.log(`Monthly Payment(PI): $${monthlyPayment.toFixed(2)}`);
  console.log(remainingBalance.toFixed(2));
}

calaculateMortgagePayments(300000, 4, 30);

//export default calaculateMortgagePayments;

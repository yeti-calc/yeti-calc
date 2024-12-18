import calaculateMortgagePayments from '../frontend/src/calaculateMortgagePayments';

const handleSubmit = async (e) => {
  // get the user's values
  let loan_amount = Number(document.querySelector('#loanAmmount').value);
  console.log('loan Amount: ', loan_amount);

  let loan_term = Number(document.querySelector('#loanTerm').value);
  console.log('load Term: ', loan_term);

  let interest = Number(document.querySelector('#interestRate').value);
  console.log('load Interest: ', interest);

  let home_insurance = Number(document.querySelector('#homeInsurance').value);
  console.log('home Insurance: ', home_insurance);

  //send user data to be saved in database
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const promise = await fetch('/api/savevalues', {
      method: 'POST',
      body: JSON.stringify({ loan_amount, loan_term, interest }),
      headers: myHeaders,
    });
    const data = await response.json();
    console.log('data returned: ', data);
  } catch (error) {
    console.log('Error in handleSubmit function in the App.jsx', error);
  }

  // invoke the formula
  let array = calaculateMortgagePayments(loan_amount, interest, loan_term);
  console.log('amortization: ', array);

  return;
};

export default handleSubmit;

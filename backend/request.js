import calaculateMortgagePayments from '../frontend/src/calaculateMortgagePayments';

const handleSubmit = async (e) => {
    // get the user's values
    let loan_amount = Number(document.querySelector('#loanAmmount').value);
    //console.log('loan Amount: ', loan_amount)

    let loan_term = Number(document.querySelector('#loanTerm').value);
    //console.log('load Term: ', loan_term)

    let interest =  Number(document.querySelector('#interestRate').value);
    //console.log('load Interest: ', interest)

    let home_insurance = Number(document.querySelector('#homeInsurance').value); // handleSubmit is listening for these values to be inputted
    //console.log('home Insurance: ', home_insurance)

    //send user data to be saved in database
    try {
      const myHeaders = new Headers(); // fetch request with headers
      myHeaders.append('Content-Type', 'application/json'); // specifies what type fo file to be expected

      const promise = await fetch('/api/savevalues', { // /savedvalues is a root in the server, can be changed, but needs to match api router to send query to db
        method: 'POST',
        body: JSON.stringify({ loan_amount, loan_term, interest }),
        headers: myHeaders // specifies that file received is a JSON
      });
      const data = await response.json();
      console.log('data returned: ', data);
    } catch (error) {
      console.log('Error in handleSubmit function in the App.jsx', error);
    }

    // invoke the formula that we imported earlier and utilizing these saved amounts
    let array = calaculateMortgagePayments(loan_amount, interest, loan_term);
    //console.log('amortization: ', array);

    return array;
  };

  export default handleSubmit
  // we export handleSubmit in Calculator.jsx
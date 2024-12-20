import React from 'react';

const RenderSched = ({ schedule }) => { // destructured schedule is {data} from Calculator.jsx, passed via parent child relationship as a prop
  if (!schedule || schedule.length === 0) { // error handling line
    return <p>No schedule available</p>; 
  }

  return ( // returns JSX
    <div>
      <h1>Amortization Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Principal Payment</th>
            <th>Interest Payment</th>
            <th>Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((month) => ( // taking schedule array to make a row with 1 month, containing relevant data, and mapping over every, map invokes fnc on each elem on array which creates a new row with relevant info
            <tr key={month.month}>
              <td>{month.month}</td>
              <td>${month.principalPayment}</td>
              <td>${month.interestPayment}</td>
              <td>${month.remainingBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenderSched;

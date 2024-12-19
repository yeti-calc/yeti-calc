import React from 'react';

const RenderSched = ({ schedule }) => {
  if (!schedule || schedule.length === 0) {
    return <p>No schedule available</p>;
  }

  return (
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
          {schedule.map((month) => (
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

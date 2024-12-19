import React from 'react';

const Monthlypay = ({ props }) => {
  console.log('in monthlypay: ',  props[0]);


    if (props[0]) {
        let single = props[0][0];
        console.log('one element: ', single)

        return <p>{`month: ${single.month}, interest: ${single.interestPayment}, principal: ${single.principalPayment}, remainingBalance: ${single.remainingBalance}`}</p>;
 
    }

    return <p>test</p>

  /*
Monthly Priniclple 
Taxes/Insurance 
Home Owner Insurance 

*/

  
};

export default Monthlypay;

const renderComp = () => {

return 
<div>
<table>
  <thead>
    <tr>
        <th>Month</th>
        <th>PrinciplePayment</th>
        <th>InterestPayment</th>
        <th>RemainingBalance</th>
    </tr>
 </thead>

  <tbody>  
   { prop[0].map((month) => (
    <tr key={month.row}>
      <td>{month.month}</td>
      <td>{month.principlePayment}</td>
      <td>{month.interestPayment}</td>
      <td>{month.remainingBalance}</td>
    </tr>

    ))
    }
    </tbody>
  </table>
</div>

}

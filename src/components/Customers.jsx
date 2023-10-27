import React from 'react'
import "../style/customers.css"

const Customers = () => {
  return (
    <div className='customer-table'>
      <table cellSpacing={50} className='a'>
            <tr className='customer-row1'>
                <th>9,313</th>
                <th>8,492</th>
                <th>100</th>
                <th>120</th>
            </tr>
            <tr className='customer-row2'>
                <td>No. of Travels</td>
                <td>No. of Clients</td>
                <td>No. of Employees</td>
                <td>No. of Countries</td>
            </tr>
      </table>
    </div>
  )
}

export default Customers

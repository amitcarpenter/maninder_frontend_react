import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [amortizationData, setAmortizationData] = useState([]);

  const calculateMonthlyPayment = () => {
    const loanAmount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 100;
    const monthlyInterestRate = interestRate / 12;
    const lengthOfMortgage = parseInt(document.getElementById('term-months').value);

    const topVal = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, lengthOfMortgage);
    const botVal = Math.pow(1 + monthlyInterestRate, lengthOfMortgage) - 1;
    const monthlyMortgage = parseFloat(loanAmount * (topVal / botVal)).toFixed(2);

    const amortizationData = [];

    let loanBalance = loanAmount;
    let totalMortgage = 0;
    let totalPrincipal = 0;
    let totalInterest = 0;

    for (let i = lengthOfMortgage; i > 0; i--) {
      const monthlyInterest = parseFloat(loanBalance * monthlyInterestRate).toFixed(2);
      const monthlyPrincipal = (monthlyMortgage - monthlyInterest).toFixed(2);

      totalMortgage += parseFloat(monthlyMortgage);
      totalPrincipal += parseFloat(monthlyPrincipal);
      totalInterest += parseFloat(monthlyInterest);

      amortizationData.push({
        month: i,
        balance: parseFloat(loanBalance).toFixed(2),
        payment: monthlyMortgage,
        principal: monthlyPrincipal,
        interest: monthlyInterest
      });

      loanBalance -= parseFloat(monthlyPrincipal);
    }

    setMonthlyPayment(monthlyMortgage);
    setTotalInterest(totalInterest);
    setAmortizationData(amortizationData.reverse());
  };

  // Function to convert month number to month name
  const getMonthName = (month) => {
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return monthNames[month - 1];
  };


  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="mt-12">
        <h1 className="text-3xl font-bold">Mortgage Calculator</h1>
        <p>Fill in the form below to figure out your mortgage!</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Loan Information</h2>

        <form id="mortgageForm" className="mt-4">
          <label>Select the start date:</label>
          <div className='flex gap-2'>
            <select
              className=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 "
              id="month">
              {/* Options for months */}
              <option value="1">January</option>
              <option value="2">February</option>
              {/* Add other months */}
            </select>
            <select
              class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 "
              id="year">
              {/* Options for years */}
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              {/* Add other years */}
            </select>

          </div>


          <div className='flex gap-2 w-full '>
            <div>
              <label>Enter the loan amount:</label>

              <div class="relative w-full mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <span className="add-on">$</span>
                </div>
                <input
                  type="text"
                  id="amount"
                  class="border   border-gray-300 text-sm rounded-lg  focus:outline-none block w-full ps-10 p-2.5  "
                  placeholder="Loan Amount"
                  onChange={calculateMonthlyPayment}
                />
              </div>
            </div>

            <div>
              <label>Enter the annual interest rate:</label>

              <div class="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <span className="add-on">%</span>
                </div>

                <input

                  className="border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full ps-10 p-2.5  "
                  id="interest"
                  type="text"
                  placeholder="Interest Rate"
                  onChange={calculateMonthlyPayment}
                />
              </div>

            </div>

          </div>


          <label>Enter the term months of the loan:</label>
          <div className="input-append">
            <input
              className=""
              id="term-months"
              type="text"
              placeholder="Term"
              onChange={calculateMonthlyPayment}
            />
            <span className="add-on">Months</span>
          </div>

          <label>Disable Rounding of Trailing Digits?</label>
          <div id="precision-field">
            <input className="" id="precision" type="checkbox" />
          </div>



        </form>
      </div>

      <div className="flex mt-8">
        {/* Monthly Payment */}
        <div className="flex-1 mr-4">
          <h3 className="text-xl font-semibold mb-2">Monthly Payment</h3>
          <input
            className="w-full py-2 px-4 mb-4 bg-gray-200 rounded"
            type="text"
            value={monthlyPayment}
            readOnly
          />
        </div>

        {/* Total Interest */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Interest Paid</h3>
          <input
            className="w-full py-2 px-4 mb-4 bg-gray-200 rounded"
            type="text"
            value={totalInterest}
            readOnly
          />
        </div>
      </div>

      {/* Amortization Table */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Amortization Schedule</h3>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Month
                </th>
                <th scope="col" className="px-6 py-3">
                  Balance
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment
                </th>
                <th scope="col" className="px-6 py-3">
                  Principal
                </th>
                <th scope="col" className="px-6 py-3">
                  Interest
                </th>
              </tr>
            </thead>
            <tbody>
              {amortizationData.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? 'bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                      : 'bg-gray-100 border-b dark:bg-gray-700 dark:border-gray-600'
                  }
                >
                  <td className="px-6 py-4">{getMonthName(item.month)}</td>
                  <td className="px-6 py-4">${item.balance}</td>
                  <td className="px-6 py-4">${item.payment}</td>
                  <td className="px-6 py-4">${item.principal}</td>
                  <td className="px-6 py-4">${item.interest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>



      <footer className="mt-12 border-t pt-6">
        <p className="text-center">Written by Joel Vasallo</p>
      </footer>
    </div>
  );
};

export default MortgageCalculator;

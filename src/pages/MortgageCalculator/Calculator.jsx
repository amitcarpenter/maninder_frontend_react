import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

function MortgageCalculator() {
  const [principal, setPrincipal] = useState(6000000);
  const [years, setYears] = useState(30);
  const [interest, setInterest] = useState(5.49);
  const [inflation, setInflation] = useState(2.19);
  const [insurance, setInsurance] = useState(0);
  const [mortgageData, setMortgageData] = useState([]);
  const [selectedSaveSpot, setSelectedSaveSpot] = useState(1);
  const [savedValues, setSavedValues] = useState([null, null, null, null]);
  const [totalInterestPaidEachYear, setTotalInterestPaidEachYear] = useState([]);
  const [remainingBalanceEachYear, setRemainingBalanceEachYear] = useState([]);
  const [interestRatesEachYear, setInterestRatesEachYear] = useState([]);
  let mortgageChart = null;

  useEffect(() => {
    performCalculation();
  }, [principal, years, interest, inflation, insurance]);

  const formatCurrency = (value) => {
    if (Math.abs(value) < 0.0001) return '0';
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format(value).replace(/,/g, ' ');
  };

  const formatCurrencySigned = (value) => {
    if (value < 0) {
      return formatCurrency(value);
    } else if (value > 0) {
      return "+" + formatCurrency(value);
    }
    return value;
  };

  const adjustForInflation = (amount, years, inflationRate) => {
    return amount / Math.pow(1 + inflationRate, years);
  };

  const prepareSavingTable = () => {
    // Implement prepareSavingTable function logic here...
  };

  // Define other helper functions here...

  return (
    <div className="content-container">
      <div className="header-container">
        <h1 id="headline">Casa Calc</h1>
        <img src="hypoicon.png" style={{ float: 'right', padding: '10px' }} width="150px" alt="Hypoicon" />
      </div>
      {/* Add your JSX for input fields, buttons, chart container, and mortgage table here */}
    </div>
  );
}

export default MortgageCalculator;

 const calculateCashflow = (startingSavings = 0, savingPerYear = 0, cashflowPerHouse = 0, houseCount = 0, numYears = 10, cashDownPerHouse = 20000) => {
  let currYear = 1;
  let currCash = startingSavings;
  let valueEachHouse = cashDownPerHouse * 4;

  

  let annualRealEstateCashFlow = 0;


  let years = []
  while(currYear <= numYears){
    annualRealEstateCashFlow = cashflowPerHouse * houseCount;
    currCash = currCash + savingPerYear + annualRealEstateCashFlow;

    let numHousesToBuy = Math.floor(currCash / cashDownPerHouse);
    if(currCash > cashDownPerHouse) {
      houseCount += numHousesToBuy;
      currCash -= cashDownPerHouse * numHousesToBuy;
    }
    const portfolioValue = valueEachHouse * 0.75 * houseCount
    const currYearStats = {currYear, currCash, houseCount, portfolioValue, annualRealEstateCashFlow};
    years.push(currYearStats)
    currYear++;
  }

  return years;
  
}

export {
  calculateCashflow
}
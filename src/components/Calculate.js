import React from 'react'
import Loading from './Loading'
import {calculateCashflow} from '../util/index'



class Calculate extends React.Component {
  constructor () {
    super()
    this.state = {
      

      startingSavings: '',
      savingPerYear: '',
      cashflowPerHouse: '',
      houseCount: '',
      numYears: '',
      cashDownPerHouse: '',

      loading: true,
      yearsArr: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount () {
    this.setState({loading: false});
  }
  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.houseCount)
  }
  async handleSubmit (event) {
    event.preventDefault()
    const {startingSavings, savingPerYear, cashflowPerHouse, houseCount, numYears, cashDownPerHouse} = this.state;
    const newYearsArr = calculateCashflow(startingSavings, savingPerYear, cashflowPerHouse, houseCount, numYears, cashDownPerHouse)
    console.log(newYearsArr)
    this.setState({
      

      startingSavings: '',
      savingPerYear: '',
      cashflowPerHouse: '',
      houseCount: '',
      numYears: '',
      cashDownPerHouse: '',
      yearsArr: newYearsArr
    })
  }
  render () {
    console.log(this.state.yearsArr)
    if (this.state.loading) {
      return (
        <Loading />
      );
    }
    return (
      <div>

        {this.state.yearsArr.length 
          ? ( this.state.yearsArr.map(year => (
            <div className="row h5" key={year.currYear}>
              <div className="col text-center">Current Cash: 
                ${year.currCash}
              </div>
              <div className="col text-center">House Count: 
                {year.houseCount}
              </div>
              <div className="col text-center">Portfolio Value: 
                ${year.portfolioValue}
              </div>
              <div className="col text-center">Annual Real Estate Cash Flow at end of year {year.currYear}: ${year.annualRealEstateCashFlow}
              </div>
            </div>
            )))
          : ''
        }
          
        <h3>Calculate Your Cashflow</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid justify-content-center">
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="startingSavings">startingSavings: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="startingSavings" placeholder="Enter startingSavings" value={this.state.startingSavings} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                
              </div>
            </div>
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="savingPerYear">savingPerYear: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="savingPerYear" placeholder="Enter savingPerYear" value={this.state.savingPerYear} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                {this.state.savingPerYear === '' ? <span className="alert alert-warning" role="alert">(Apart from RE Investing)</span> : ''}
              </div>
            </div>
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="cashflowPerHouse">cashflowPerHouse: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="cashflowPerHouse" placeholder="Enter cashflowPerHouse" value={this.state.cashflowPerHouse} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                {this.state.cashflowPerHouse === '' ? <span className="alert alert-warning">(Net you expect to make)</span> : ''}
              </div>
            </div>
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="houseCount">houseCount: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="houseCount" placeholder="Enter houseCount" value={this.state.houseCount} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                
              </div>
            </div>
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="numYears">numYears: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="numYears" placeholder="Enter numYears" value={this.state.numYears} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                
              </div>
            </div>
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="cashDownPerHouse">cashDownPerHouse: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="cashDownPerHouse" placeholder="Enter cashDownPerHouse" value={this.state.cashDownPerHouse} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                
              </div>
            </div>
            
          </div>
          <button type="submit" className="btn btn-primary">Add Campus</button>
        </form>
      
        
      </div>
    )
  }
}

export default Calculate

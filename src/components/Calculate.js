import React from 'react'
import Loading from './Loading'
import {calculateCashflow} from '../util/index'

console.log('test function')
console.log(calculateCashflow(20000, 12000, 3000, 2, 20, 20000))
const yearsOfData = calculateCashflow(20000, 12000, 3000, 2, 20, 20000)

class CampusAdd extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      imageURL: '',
      address: '',
      description: '',
      loading: true
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
  }
  async handleSubmit (event) {
    event.preventDefault()
    try {
      this.props.postCampus(this.state)
    } catch (err){
      console.log(err)
    }
    this.setState({
      name: '',
      imageURL: '',
      address: '',
      description: ''
    })
  }
  render () {
    if (this.state.loading) {
      return (
        <Loading />
      );
    }
    return (
      <div>

        <div>
        {yearsOfData.map(year => (
            <div className="row h5" key={year.currYear}>
              <div className="col text-center">Current Cash: 
                ${year.currCash}
              </div>
              <div className="col text-center">House Count: 
                ${year.houseCount}
              </div>
              <div className="col text-center">Portfolio Value: 
                ${year.portfolioValue}
              </div>
              <div className="col text-center">Annual Real Estate Cash Flow at end of year {year.currYear}: ${year.annualRealEstateCashFlow}
              </div>
            </div>
            ))
          }
        </div>
        <h3>Add a Campus:</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid justify-content-center">
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="name">Name: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="name" placeholder="Enter campus name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                {this.state.name === '' ? <span className="alert alert-warning" role="alert">Required</span> : ''}
              </div>
            </div>
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="address">Address: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="address" placeholder="Enter campus address" value={this.state.address} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                {this.state.address === '' ? <span className="alert alert-warning" role="alert">Required</span> : ''}
              </div>
            </div>
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="description">Description: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="description" placeholder="Enter campus description" value={this.state.description} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                {this.state.description === '' ? <span className="note">Optional, but we'd love a description.</span> : ''}
              </div>
            </div>
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="imageURL">Image URL: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="imageURL" placeholder="Enter campus image URL" value={this.state.imageURL} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                {this.state.imageURL === '' ? <span className="note">We'll choose one for you if you don't.</span> : ''}
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Add Campus</button>
        </form>
      </div>
    )
  }
}

export default CampusAdd

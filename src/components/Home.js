import React from 'react'
import {Link} from 'react-router-dom';


const Home = (props) => {
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">RE-Calc</h1>
          <h2>A Real Estate Cashflow Calculator</h2>
          <p></p>
          <p><button className="btn btn-outline-primary btn-lg" type="button"><Link to="/calculate/">Try It Out &raquo;</Link></button></p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          
            <div className="col-md-4">
              
            </div>
        </div>
      </div>
    </div>
  )
}




export default Home

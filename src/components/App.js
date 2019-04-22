import React, { Component } from 'react';
import '../App.css';
import {Route, Switch, Link, Redirect} from 'react-router-dom';

import Home from './Home'
import NotFound from './NotFound'
import Calculate from './Calculate'
import Nav from './Nav'


class App extends Component {
  render() {
    return (
      <div>
      
        <Nav />

        <div className="justify-content-center">
          <div className="col text-center"> 
            <Switch>
              <Route exact path='/calculate' component={Calculate} />
              <Route exact path='/' component={Home} />
              <Route exact path="*" render={() => <Redirect to="/"/>}/>
              {/* <Route path="*" component={NotFound} /> */}
            </Switch>
          </div>
        </div>
    </div>
    );
  }
}

export default App;

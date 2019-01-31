import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>        
        <Switch>
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={Products} />
          <Route component={Default} />
          
        </Switch>
      </div>
    );
  }
}

export default App;

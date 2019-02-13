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
import { ProductProvider } from './context';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ProductProvider>
      <Navbar />
        <header className="App-header">
          <Switch>
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route exact path="/" component={Products} />
            <Route component={Default} />
          </Switch>
        </header>                
        </ ProductProvider>
        <footer> Last imperor </footer>
      </div>
    );
  }
}

export default App;

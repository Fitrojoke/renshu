import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar_comm">
      <Link to="/">
      <div className="inline">
        <div>
          <i className="fab fa-pied-piper-alt pr-3"></i>
        </div>
        <div>
          <p>Navbar</p>
        </div>
      </div>
      </ Link>
      <Link to="/cart">
      <div className="float-right">
        <i className="fas fa-shopping-cart"></i>
      </div>
      </ Link>
      </div>
    );
  }
}
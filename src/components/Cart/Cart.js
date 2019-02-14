import React, { Component } from 'react';
import Title from '../Title';
import CartColums from './CartColums';

export default class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <p>Cart</p>
        <Title name="title" title="title of element" />
        <CartColums />
      </div>
    );
  }
}
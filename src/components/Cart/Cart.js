import React, { Component } from 'react';
import Title from '../Title';
import CartColums from './CartColums';
import { ProductConsumer } from '../../context';
import CartList from './CartList';

export default class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if (cart.length > 0) {
              return (
                <div>
                <Title name="Your Cart" title="title of element" />
                <div className="colums">
                  <CartColums />
                  <CartList value={value} />
                </div>
                </div>
              )
            } else {
              return (
              <div>
                <h3>Your cart is empty!</h3>
              </div>
            )}
          }}
        </ProductConsumer>        
      </div>
    );
  }
}
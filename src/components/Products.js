import React, { Component } from 'react';
import Title from './Title';
import Product from './Product';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context'

export default class ProductsList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <div className="products">
      <Title name="Gian" title="Poiei" />
        <p>Every Product</p>
        
        <div>
          <div className="allelement">
            <ProductConsumer>
              {value => {
                return value.products.map ( product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ ProductConsumer>
          </div>
        </div>
      </div>
    );
  }
}
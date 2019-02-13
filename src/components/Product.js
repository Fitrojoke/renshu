import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart } = this.props.product;
    return (
      <div className="details">
        <div>
        <Link to="/details">
        <p>Product Details</p>
          <div className="elementDetails" onClick={() => console.log('clicked')}>
            
              <img src={ img } alt="product" />
            
          </div>
          <div className="inlinelement">
            <p className="titlelement">{title}</p>
            <p className="pricelement">{price}</p>
          </div>
          <br />
          </ Link>
          <div className="inline" style={{display: '-webkit-inline-box', fontSize: 16 }}>
            <button className="cart-btn" disabled={inCart ? true : false } onClick={() => console.log('clicked')} style={{backgroundColor: '#ff9800', color: 'white', border: 'none', borderRadius: 50, cursor: 'pointer'}}>
            {inCart ? (
              <p>Incart</p>
            ) : (
              <i className="fas fa-cart-plus" style={{padding: "6px 1px 6px 0px"}}></i>
            )}
            </button>
          </div>
          
          
        
        </div>
      </div>
    );
  }
}
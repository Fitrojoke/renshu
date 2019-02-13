import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <div className="details">
        <div>
          <p>Product Details</p>
          <ProductConsumer>
            {value => {
              const {id, title, price, img, inCart, company, info} = value.detailProduct;
              return (
                <div>
                <div><h3>{title}</h3></div>
                <div className="datailscontainer">
                  <div><img src={img} /></div>
                  <div><p>{info}</p></div>
                </div>
                <div>
                  <dl>
                    <dt>Comapany:</dt>
                    <dd>{company}</dd>
                    <dt>Price:</dt>
                    <dd>{price} + 税金</dd>
                  </dl>
                </div>
                <div>
                <Link to="/">
                  <button>Back to the Shop</button>
                </Link>
                  <button disabled={inCart ? true : false} className={inCart ? "carted" : "notcarted"}
                  onClick={()=> {
                    value.addToCart(id)
                  }}>{inCart ? "inCart" : "Add to Cart"}</button>
                </div>
                </div>
              )
            }}
          </ ProductConsumer>
        </div>
      </div>
    );
  }
}
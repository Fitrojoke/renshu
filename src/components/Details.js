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
                <div style={{marginBottom: "1.75em"}}>
                <div><h3>{title}</h3></div>
                <div className="datailscontainer">
                  <div className="productImg"><img src={img} /></div>
                  <div className="text"><p>{info}</p></div>
                </div>
                <div className="listInfo">
                  <dl>
                    <dt>Comapany:</dt>
                    <dd>{company.toUpperCase()}</dd>
                    <dt>Price:</dt>
                    <dd>{price} + Tax</dd>
                  </dl>
                </div>
                <div className="forbuttoms">
                <Link to="/">
                  <button>To Shopping</button>
                </Link>
                  <button disabled={inCart ? true : false} className={inCart ? "carted" : "notcarted"}
                  onClick={()=> {value.addToCart(id)}}>{inCart ? "inCart" : "Add to Cart"}</button>
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
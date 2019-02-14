import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(()=>{
      return {detailProduct: product}
    })
  };
  
  addToCart = id => {
    console.log(`Item id:${id} add to Cart`);
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true; 
    product.count = 1; 
    const price = product.price;
    product.total = price; 
    this.setState( 
    () => {
      return { products: tempProducts, cart: [...this.state.cart, product] };
    },
    () => {
      console.log(this.state);
    });
  };
  
  incrementAmount = id => {
    console.log('Incrementing');
  };
  
  decrementAmount = id => {
    console.log('Decrementing');
  };
  
  removeItem = id => {
    console.log('Revomed');
  };
  
  clearCart = () => {
    console.log('Cart empity');
  };
  
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
        incrementAmount:this.incrementAmount,
        decrementAmount:this.decrementAmount,
        removeItem:this.removeItem,
        clearCart:this.clearCart
      }}>
        {this.props.children}
      </ ProductContext.Provider>
    );
  }  
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
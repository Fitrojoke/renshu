import React from 'react';

export default function CartItem ({value}) {
  const { cart, clearCart, cartSubTotal, cartTotal, cartTax } = value;

  return (
    <div>
      <div className="cleaner">
        <button onClick={()=> clearCart()}>Clear Cart</button>
      </div>
      <div className="numbers">
        <div className=""><p>SubTotal:</p><p> {cartSubTotal} Ƀ</p></div>
        <div className=""><p>Tax:</p><p> {cartTax} Ƀ</p></div>
        <div className=""><p>Total:</p><p> {cartTotal} Ƀ</p></div>
      </div>
    </div>

  );
}
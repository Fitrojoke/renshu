import React from 'react';

export default function CartItem ({item,value}) {
  const {id, img, title, price, total, count} = item;
  const {incrementAmount, decrementAmount, removeItem} = value;
  return (
    <div className="undercolums">
      <div className="simplecolum">
        <img src={img} alt={title} />
      </div>
      <div className="simplecolum">
        <p>{title}</p>
      </div>
      <div className="simplecolum">
        <p>{price} Ƀ</p>
      </div>
      <div className="simplecolum">
        <div className="calc">
          <div className="calcbutton" onClick={()=> decrementAmount(id)}>
            <p>-</p>
          </div>
          <div className="calcbutton">
            <p>{count}</p>
          </div>
          <div className="calcbutton" onClick={()=> incrementAmount(id)}>
            <p>+</p>
          </div>
        </div>
      </div>
      <div className="simplecolum" onClick={()=> removeItem(id)}>
        <i className="fas fa-trash" style={{color: "var(--mainyellow)", cursor: "pointer"}}></i>
      </div>
      <div className="simplecolum">
        <p>{total} Ƀ</p>
      </div>
    </div>
  );
}
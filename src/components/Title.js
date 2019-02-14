import React from 'react';

export default function Title ({ name, title }) {
    return (
      <div>
        <h2 className="title">{ name } of your cart</h2>
      </div>
    );
}
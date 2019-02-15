import React from 'react';

export default function Title ({ name, title }) {
    return (
      <div>
        <h2 className="title">{ name }</h2>
      </div>
    );
}
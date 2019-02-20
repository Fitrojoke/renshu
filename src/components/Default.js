import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="notfound">
        <p>Page not found in 
        <Link to="/"> <span className="App-link">{this.props.location.pathname}</span> </Link>
        </p>
        <div id="beastainer">
          <img id="beast404le" src="https://developer.mozilla.org/static/img/beast-404_LE.f1435cace4b4.png" alt="" />
          <img id="beast404re" src="https://developer.mozilla.org/static/img/beast-404_RE.2e53f96c5abb.png" alt="" />
          <img className="beast 404" src="https://developer.mozilla.org/static/img/beast-404.ce38fcf80386.png" alt="" />
        </div>
      </div>
    );
  }
}
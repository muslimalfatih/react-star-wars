import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to={"/"} className="home">Home</Link>
        {this.props.children}
      </div>
    );
  }
}

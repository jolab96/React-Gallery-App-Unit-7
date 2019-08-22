
// Importing startng React module and loading the component router

import React, { Component } from 'react';

import Router from './Router';

import '../index.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router />
      </div>
    );
  }
}


import React, { Component } from 'react';
import Button from './Button';

export default class extends Component {
  constructor() {
    super();
    this.state = { clicked: false };
  }
  _onButtonClick = () => {
    this.setState(({ clicked }) => ({ clicked: !clicked }));
  }
  render() {
    const { clicked } = this.state;
    return (<Button onClick={this._onButtonClick}>{clicked ? 'Clicked' : 'One Click Button'}</Button>);
  }
}

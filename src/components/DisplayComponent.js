import React, { Component } from 'react'

export default class DisplayComponent extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          <div>
          <li className="list-group-item">{this.props.sayWhat}</li></div>
        </ul>
      </div>
    );
  }
}

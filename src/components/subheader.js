import React, { Component } from 'react';
import './../styles/site.css';

class Subheader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: this.props.mode || 'notes'
    };
  }

  toggleMode(mode) {
    this.setState({mode});
    this.props.toggleModeEvent(mode);
  }

  render() {
    return (
      <div className="app-subheader">
        <label>{this.props.label} </label>
        <a className={`side-button left ${(this.state.mode === 'notes') ? 'active' : ''}`} onClick={this.toggleMode.bind(this, 'notes')}>Notes</a>
        <a className={`side-button ${(this.state.mode === 'demo') ? 'active' : ''}`} onClick={this.toggleMode.bind(this, 'demo')}>Demo</a>
        <a className={`side-button right ${(this.state.mode === 'code') ? 'active' : ''}`} onClick={this.toggleMode.bind(this, 'code')}>Code</a>
      </div>
    );
  }
}

export default Subheader;

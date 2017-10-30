import React, { Component } from 'react';
import ToggleButton from './ToggleButton';
import './../styles/site.css';

class SubHeader extends Component {
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
        <ToggleButton left active={`${(this.state.mode === 'notes') ? true : false}`} onClick={this.toggleMode.bind(this, 'notes')}>Notes</ToggleButton>
        <ToggleButton active={`${(this.state.mode === 'demo') ? true : false}`} onClick={this.toggleMode.bind(this, 'demo')}>Demo</ToggleButton>
        <ToggleButton right active={`${(this.state.mode === 'code') ? true : false}`} onClick={this.toggleMode.bind(this, 'code')}>Code</ToggleButton>
        {/* <a className={`side-button left ${(this.state.mode === 'notes') ? 'active' : ''}`} onClick={this.toggleMode.bind(this, 'notes')}>Notes</a>
        <a className={`side-button ${(this.state.mode === 'demo') ? 'active' : ''}`} onClick={this.toggleMode.bind(this, 'demo')}>Demo</a>
        <a className={`side-button right ${(this.state.mode === 'code') ? 'active' : ''}`} onClick={this.toggleMode.bind(this, 'code')}>Code</a> */}
      </div>
    );
  }
}

export default SubHeader;

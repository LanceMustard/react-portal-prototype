import React, { Component } from 'react';
import Subheader from './../components/subheader';
import './../styles/site.css';

class SandboxComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: this.props.mode || 'notes',
      title: 'title-not-set'
    };
  }

  toggleMode(mode) {
    this.setState({mode});
    this.props.toggleModeEvent(mode);
  }

  renderDemo() {
    return (
      <div className="app-body">
        <p>This option has no demo</p>
      </div>
    )
  }

  renderNotes() {
    return (
      <div className="app-body">
        <p>This option has no notes</p>
      </div>
    )
  }

  renderCode() {
    return (
      <div className="app-body">
        <p>This option has no code</p>
      </div>
    )
  }

  render() {
    let content = '';
    if (this.state.mode === 'demo') {
      content = this.renderDemo();
    } else if (this.state.mode === 'code') {
      content = this.renderCode();
    } else {
      content = this.renderNotes();
    }
    return (
      <div>
        <Subheader label={this.state.title} toggleModeEvent={((mode) => this.setState({mode}))}/>
        {content}
      </div>
    );
  }
}

export default SandboxComponent;
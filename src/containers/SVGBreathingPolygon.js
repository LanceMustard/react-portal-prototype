import React from 'react';
import styled, {css, ThemeProvider} from 'styled-components';
import SandboxComponent from './../components/SandboxComponent';
import {Content, TopicHeader} from './../components/StyledComponents';
import BreathingPolygon from './../components/BreathingPolygon';
import './../styles/site.css';


class SVGBreathingPolygon extends SandboxComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'styled-components'
    };
  };
  
  renderNotes () {
    return (
      <div className="app-body">
        <p>Messing about with some SVG animation I found on Codepen by Chris Johnson</p>
        <p>Original code found at <a href="https://codepen.io/jhnsnc/pen/EwEqvW">https://codepen.io/jhnsnc/pen/EwEqvW</a></p>
      </div>
    );
  };

  renderDemo () {
    return (
      <Content>
        <BreathingPolygon />
      </Content>
    );
  };


};

export default SVGBreathingPolygon;
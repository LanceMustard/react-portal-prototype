import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import SandboxComponent from './../components/SandboxComponent';
import DisplayGrid from './../components/DisplayGrid.js';
import './../styles/site.css';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

class ReactGridLayoutDemo extends SandboxComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: 'react-grid-layout',
      layout: [
        {i: 'a', x: 0, y: 0, w: 4, h: 10},
        {i: 'b', x: 4, y: 0, w: 4, h: 10},
        {i: 'c', x: 8, y: 0, w: 4, h: 10}
      ],
      maximised: false
    };

    this.test = this.test.bind(this);
  }

  test() {
    var layout = {};
    if (this.state.maximised) {
      layout = [
        {i: 'a', x: 0, y: 0, w: 4, h: 10},
        {i: 'b', x: 4, y: 0, w: 4, h: 10},
        {i: 'c', x: 8, y: 0, w: 4, h: 10}
      ];
    } else {
      layout = [
        {i: 'a', x: 0, y: 0, w: 4, h: 10},
        {i: 'b', x: 4, y: 0, w: 0, h: 10},
        {i: 'c', x: 4, y: 0, w: 8, h: 10}
      ];
    }
    this.setState({
      layout,
      maximised: !this.state.maximised
    });
  };

  renderNotes() {
    return (
      <div className="app-body">
        <p>react-grid-layout</p>
      </div>
    )
  }

  renderDemo() {
    return (
      <div>
        <button onClick={this.test}>Test</button>
        <ReactGridLayout
          className="layout"
          layout={this.state.layout}
          cols={12}
          rowHeight={30}
          width={1200}>
          <div className="App-widget" key="a"><DisplayGrid/></div>
          <div className="App-widget" key="b"><DisplayGrid/></div>
          <div className="App-widget" key="c"><DisplayGrid/></div>
        </ReactGridLayout>
      </div>
    )
  }
}

export default ReactGridLayoutDemo;

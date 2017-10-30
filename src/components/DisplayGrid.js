import React, { Component } from 'react';

class DisplayGrid extends Component {
  render() {
    var gridStyle = {
      height:'100%',
      width:'100%',
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      border: '1px solid'
    };
    var rowStyle = {
      height: '25%',
      border: '1px solid'
    };
    var cellStyle = {
      border: '1px solid'
    };
    return (
      <table style={gridStyle}>
        <tbody>
          <tr style={rowStyle}>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
          </tr>
          <tr style={rowStyle}>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
          </tr>
          <tr style={rowStyle}>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
          </tr>
          <tr style={rowStyle}>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
          </tr>
        </tbody>
      </table>
    );
  };
}

export default DisplayGrid;
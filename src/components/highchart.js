import React, { Component } from 'react';
import Highcharts from 'highcharts';

class HighChart extends Component {
    componentDidMount() {
      // Extend Highcharts with modules
      if (this.props.modules) {
        this.props.modules.forEach(function (module) {
          module(Highcharts);
        });
      }
      // Set container which the chart should render to.
      this.chart = new Highcharts.chart(
        this.refs.chart,
        this.props.options
      );
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div ref="chart" />
        );
    }
}

export default HighChart;
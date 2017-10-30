import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './containers/HomePage';
import SiteMenu from './containers/SiteMenu';
import ReactBurgerMenu from './containers/ReactBurgerMenu';
import ReactGridLayout from './containers/ReactGridLayout';
import ReactBeautifulDND from './containers/ReactBeautifulDND';
import ReactAccessibleAccordion from './containers/ReactAccessibleAccordion';
import StyledComponents from './containers/StyledComponents';
import SVGBreathingPolygon from './containers/SVGBreathingPolygon';

import './styles/site.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOptions: []
    };
  }

  componentDidMount() {
    // load menu options
    axios.get("/menu.json")
    .then((res) => {
      this.setState({menuOptions:  res.data});
    })
    .catch((err) => {
      console.log('[Error] Menu loading', err);
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <SiteMenu title="Home" options={this.state.menuOptions}/>
          <header className="app-header">
            <h1 className="app-title">my-react-sandbox</h1>
          </header>
          <div className="app-content">
            <Route exact path="/" component={HomePage}/>
            <Route path="/react-burger-menu" component={ReactBurgerMenu}/>
            <Route path="/react-grid-layout" component={ReactGridLayout}/>
            <Route path="/react-beautiful-dnd" component={ReactBeautifulDND}/>
            <Route path="/react-accessible-accordion" component={ReactAccessibleAccordion}/>
            <Route path="/styled-components" component={StyledComponents}/>
            <Route path="/svg-breathing-polygon" component={SVGBreathingPolygon}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

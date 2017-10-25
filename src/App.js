import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './containers/home-page';
import SiteMenu from './containers/site-menu';
import ReactBurgerMenu from './containers/react-burger-menu';
import ReactGridLayout from './containers/react-grid-layout';
import ReactBeautifulDND from './containers/react-beautiful-dnd';

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
        <div className="App">
          <SiteMenu title="Home" options={this.state.menuOptions}/>
          <header className="App-header">
            <h1 className="App-title">my-react-sandbox</h1>
          </header>
          <Route exact path="/" component={HomePage}/>
          <Route path="/react-burger-menu" component={ReactBurgerMenu}/>
          <Route path="/react-grid-layout" component={ReactGridLayout}/>
          <Route path="/react-beautiful-dnd" component={ReactBeautifulDND}/>          
        </div>
      </Router>
    );
  }
}

export default App;

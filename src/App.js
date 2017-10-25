import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from './containers/home-page';
import BurgerMenuDemo from './containers/burger-menu-demo';
import DisplayGridDemo from './containers/display-grid-demo';

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
    axios.get("menu.json")
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
          <BurgerMenuDemo title="Menu" options={this.state.menuOptions}/>
          <header className="App-header">
            <h1 className="App-title">my-react-sandpit</h1>
          </header>
          <Route exact path="/" component={HomePage}/>
          <Route path="/displaygridemo" component={DisplayGridDemo}/>
          {/* <Route path="/video/:id" component={Video}/> */}
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';

class HomePage extends Component {
  render () {
    return (
      <div className="app-body">
        <p>This is a sandbox where I play around, test and make notes on various third party React components.</p>
        <p>It uses the create-react-app boilerplate and the following packages;</p>
        <ul>
          <li>axios... used for called webapi's to load data when required</li>
          <li>react-router-dom... used for page navigation</li>
        </ul>
      </div>
    );
  }
}

export default HomePage;
import React, { Component } from 'react';

class HomePage extends Component {
  render () {
    return (
      <div className="app-body">
        <p>This is a sandbox where I play around, test and make notes on various third party React components.</p>
        <p>It uses the create-react-app boilerplate and the following packages;</p>
        <ul>
          <il>axios... used for called webapi's to load data when required</il>
          <il>react-router-dom... used for page navigation</il>
        </ul>
      </div>
    );
  }
}

export default HomePage;
import React, { Component } from 'react';
import SandboxComponent from './../components/sandbox-component';
import './../styles/site.css';

class ReactBurgerMenuNotes extends SandboxComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'react-burger-menu'
    };
  }

  renderNotes () {
    return (
      <div className="app-body">
        <p>
          This control is use to provide the sidebar menu, accessable by clicking on the "burger" looking icon typically located on either the left or right side of the page.
        </p>
        <p>
          There are a nunber of different effects that can be implemented displaying the menu, my personnal favourite is the "scale rotate" option. You can checkout a demo of these styles in action at <a href="http://negomi.github.io/react-burger-menu/">http://negomi.github.io/react-burger-menu/</a></p>
        <p>The github repository can be found at: <a href="https://github.com/negomi/react-burger-menu">https://github.com/negomi/react-burger-menu</a></p>
      </div>
    );
  }

}

export default ReactBurgerMenuNotes;
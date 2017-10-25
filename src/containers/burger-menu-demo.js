import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import './../styles/burger-menu.css';

class BurgerMenuDemo extends Component {
  render () {
    return (
      <Menu>
        <h2>
          <a href="/">
            <i className="fa fa-fw fa-inbox fa-2x"></i>
            <span>{this.props.title}</span>
          </a>
        </h2>
        { this.props.options.map((item, index) => (
          <a key={index} href={item.href}><i className={`fa fa-fw ${item.icon}`} /><span>{item.label}</span></a>
        ))}
      </Menu>
    );
  }
}

export default BurgerMenuDemo;
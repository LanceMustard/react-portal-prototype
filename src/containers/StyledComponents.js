import React from 'react';
import styled, {css, ThemeProvider} from 'styled-components';
import CodeSandboxContainer from './../components/CodeSandboxContainer';
import SandboxComponent from './../components/SandboxComponent';
import ToggleButton from './../components/ToggleButton';
import {Content, TopicHeader, RadioListGroup, RadioListItem} from './../components/StyledComponents';
import './../styles/site.css';

const greenTheme = {
  color: 'mediumseagreen'
};

const blueTheme = {
  color: 'blue'
};

const CustomButton = styled.button `
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: ${props => props.theme.color  || 'palevioletred'};
  border: 2px solid ${props => props.theme.color || 'palevioletred'};

  ${props => props.primary && css`
    background: ${props => props.theme.color || 'palevioletred'};
    color: white;
  `}
`;
CustomButton.defaultProps = {
	theme: {
		color: 'palevioletred'
	}
};

class StyledComponents extends SandboxComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'styled-components',
      theme: CustomButton.defaultProps
    };
  };


  toggleTheme(theme) {
    this.setState({theme});
  };

  renderNotes () {
    return (
      <div className="app-body">
        <p>Here is a example of using styled-components <a href="https://www.styled-components.com">https://www.styled-components.com</a></p>
        <p>The github repository can be found at: <a href="https://github.com/styled-components/styled-components">https://github.com/styled-components/styled-components</a></p>
        <p>The demo contains a simple example of a styled button class called CustomButton to managed CSS for a button element.</p>
        <p>Makes use of a custom property 'primary' which is used to highlight the primary button.</p>
        <p>Also implements basic Themes to manage the coloring of the button which can be dynamically updated.</p>
      </div>
    );
  };

  renderDemo () {
    return (
      <Content>
        <TopicHeader>Theme</TopicHeader>
        <RadioListGroup width="150px">
          <RadioListItem active={`${(this.state.theme === CustomButton.defaultProps) ? 'true' : 'false'}`}>
            <a onClick={this.toggleTheme.bind(this, CustomButton.defaultProps)}>Default</a>
            <i className="fa fa-check"></i>
          </RadioListItem>
          <RadioListItem active={`${(this.state.theme === greenTheme) ? 'true' : 'false'}`}>
            <a onClick={this.toggleTheme.bind(this, greenTheme)}>Green</a>
            <i className="fa fa-check"></i>
          </RadioListItem>
          <RadioListItem active={`${(this.state.theme === blueTheme) ? 'true' : 'false'}`}>
            <a onClick={this.toggleTheme.bind(this, blueTheme)}>Blue</a>
            <i className="fa fa-check"></i>
          </RadioListItem>
        </RadioListGroup>
        <TopicHeader>Buttons</TopicHeader>
        <ThemeProvider theme={this.state.theme}> 
          <Content>
            <CustomButton>Custom Button</CustomButton>
            <CustomButton primary>Primary Button</CustomButton>
          </Content>
        </ThemeProvider>
      </Content>
    );
  };

  renderCode () {
    return (
      <CodeSandboxContainer
        src="https://codesandbox.io/s/nxqwn4w4m?hidenavigation=1&view=editor"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
      </CodeSandboxContainer>
    );
  }

};

export default StyledComponents;
import styled, {css} from 'styled-components';

const ToggleButton = styled.a `
  display: inline-block;
  min-width: 5em;
  min-height: 2.5em;
  line-height: 2.5em;
  cursor: pointer;
  background: #fffce1;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8em;
  font-weight: 800;

  ${props => props.left === true && css`
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  `}

  ${props => props.right === true && css`
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  `}

  ${props => props.active === 'true' && css`
    background: #c94e50;
    color: #fffce1;
  `}
    
`;

export default ToggleButton;
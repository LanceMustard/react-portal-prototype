import styled, {css} from 'styled-components';

const Style = {
  // guess if I ever develop an style methods or settings they can go here
};

const Content = styled.div`
  margin: 20px;
  width: 100%;
`;

const Header = styled.h1 `  
`;

const TopicHeader = styled.h2 `  
`;

const RadioListGroup = styled.ul `  
  margin: 0;
  padding: 0;
  width: ${props => props.width  || '200px'};
`;

const RadioListItem = styled.li `  
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
  list-style: none;

  > a {
    color: #000;
    width: 100%;
   
    -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
    -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
    -o-transition: font-size 0.3s ease, background-color 0.3s ease;
    -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
    transition: font-size 0.3s ease, background-color 0.3s ease;
  }

  :last-child {
    border: none;
  }

 :hover {
    font-size: 30px;
    background: #f6f6f6;
  }

  > i {
    float: right;
    margin: 0 0px 0 0;
     
    display: ${
      (props) => 
        props.active === 'true' ? 'inline':
        'none'
    };
  }

`;

export default Style;
export { Header, TopicHeader, RadioListGroup, RadioListItem }



 

 

import styled from 'styled-components';

function getColorCard(value) {
    switch (value) {
      case 1:
        return "#00D15E";
        
      case 2: 
        return "#43b576";
  
      case 3: 
        return "#3FD181";
  
      case 4: 
        return "#5bacad";
  
      case 5: 
        return "#90b4ff";

      case 6: 
        return "#c0e2ff";
    
      default:
        break;
    }
  }

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${(p) => p.valueCard ? getColorCard(p.valueCard) : "#0ACED1"};
  border-radius: 10px;
  padding: 14px;
  cursor: pointer;
  transition: 0.2s;

  h3 {
    font-size: 16px;
    margin-top: 0;
  }

  p {
    width: 100%;
    font-size: 15px;
  }

  span {
    font-size: 15px;
  }

  .icon-btn {
    font-size: 22px;
    margin-right: 10px;
    color: #131313;
    transition: 0.1s;

    :hover {
        color: #000;
        font-size: 26px;
        margin-top: -2px;
        margin-bottom: -2px;
        margin-left: -2px;
        text-shadow: 0.1em 0.1em #333
    }
  }

  :hover {
      box-shadow: 1px 1px 5px #333;
  }
`;

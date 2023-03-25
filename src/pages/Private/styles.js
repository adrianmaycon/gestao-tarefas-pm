import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .body-panel {
    max-width: 1000px;
    width: 90%;
    min-height: 600px;
    margin-top: 40px;
    text-align: start;

    h2 {
      font-weight: 500;
      margin: 0;
    }
  }
`;

export const ContainerTarefas = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  border-bottom: 1px solid #171923;

  .row-between {
    margin-top: 40px;
  }

  .add-task {
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 5px;
    background: #00a84a;
    color: #FFFFFF;
    border: none;
    font-weight: 500;
    margin-bottom: 10px;
    padding: 5px 10px;
    transition: 0.3s;
    
    .icon {
      margin-right: 5px;
      font-size: 18px;
    }

    :hover {
      background: #078b41;
    }
  }

  @media (max-width: 500px) {
    .row-between {
      flex-direction: column;

      h2 {
        width: 100%;
      }

      button {
        width: 100%;
        height: auto;
        justify-content: center;
        padding: 10px;
      }
    }
  }
`;

export const GridTarefas = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 4fr;
  }
`;

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
      return "#bbbbbb";
  
    default:
      break;
  }
}

export const Card = styled.section`
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
    text-align: justify;
    font-size: 15px;
  }

  span {
    font-size: 15px;
  }

  :hover {
      box-shadow: 1px 1px 5px #333;
  }
`;
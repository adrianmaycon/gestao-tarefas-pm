import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  
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

export const Modal = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0, 0.4);
`;

export const Box = styled.div`
    width: 100%;
    min-height: 300px;
    z-index: 101;
    background: #fff;
    max-width: 300px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px;

    .btn-color {
      width: 27px;
      height: 27px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      
      :hover {
        border: 3px solid #3e3e3e;
      }
    }

    .select-color {
      border: 3px solid #000000;
    }

    .color-one {
      background: #00D15E;
    }

    .color-two {
      background: #43b576;
    }

    .color-three {
      background: #3FD181;
    }

    .color-four {
      background: #5bacad;
    }

    .color-five {
      background: #90b4ff;
    }

    .color-six {
      background: #c0e2ff;
    }

    .row-between {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }

    h2 {
      margin: 0;
      margin-bottom: 15px;
      font-size: 20px;
    }

    .cont-grid {
      width: 100%;
      display: grid;
      grid-template-columns: 2fr 2fr;
      gap: 20px;
      margin-top: 20px;
    }

    .btn-link-cancel,
    .btn-link {
      padding: 8px 12px;
      background: #00a84a;
      font-weight: 500;
      border: none;
      text-decoration: none;
      font-size: 15px;
      transition: 0.1s;
      display: flex;
      color: #fff;
      text-transform: uppercase;
      align-items: center;
      justify-content: center;
      border-radius: 1px;
      cursor: pointer;

      .icon-login {
        margin-right: 10px;
      }

      :hover {
        background: #089345;
      }
    }

    .btn-link-cancel {
      background: #76837b;

      :hover {
        background: #343635;
      }
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      textarea,
      input {
        width: 100%;
        height: 30px;
        margin-bottom: 12px;
        padding-left: 5px;
      }

      textarea {
        height: auto;
        resize: vertical;
      }

      label {
        margin-bottom: 5px;
        font-size: 14px;
      }
    }
`;
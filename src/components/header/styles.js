import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 150px;
  margin: 0;
  background: linear-gradient(to right, #204D37, #00853B 40%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .label-checkbox {
    font-size: 14px;
  }
  
  .box-container{
    width: 100%;
    max-width: 1000px;
    padding: 24px;
    display: grid;
    grid-template-columns: 300px calc(100% - 300px);
    gap: 34px;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 24px;

    .btn-link {
      padding: 10px 15px;
      background: #00a84a;
      font-weight: 600;
      border: none;
      text-decoration: none;
      font-size: 18px;
      transition: 0.1s;
      display: flex;
      color: #fff;
      text-transform: uppercase;
      align-items: center;
      justify-content: center;
      border-radius: 1px;

      .icon-login {
        margin-right: 10px;
      }

      :hover {
        box-shadow: 1px 1px 8px #111;
      }
    }
  }

  @media (max-width: 760px) {
    nav {
      flex-direction: column;

      .btn-link + .btn-link {
        margin-top: 10px;
      }
    }
  }

  @media (max-width: 580px) {
    height: 230px;
    nav {
      width: 100%;      

      .btn-link{
        width: 100%;
      }
    }

    .box-container{
      width: 100%;
      max-width: 1000px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 100%;
      }
    }
  }
`;

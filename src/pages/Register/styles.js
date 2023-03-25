import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('https://www.pm.ce.gov.br/wp-content/themes/ceara2017/assets/images/base-ondas.svg') no-repeat -50px bottom #FFFFFF;
  border-bottom: 5px solid #00bd19;
  background-size: 700px;
  padding-bottom: 40px;

  .icon-register {
    font-size: 30px;
    color: #fff;
  }
  
  .box-icon-register {
    padding: 8px 10px;
    padding-bottom: 5px;
    background: #009053;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: -30px;
  }

  h2 {
    color: #171923;
    font-family: "Inter", Sans-serif;
    font-size: 26px;
    font-weight: 600;
    line-height: 27px;
  }

  p {
    color: #171923;
    font-family: "Inter", Sans-serif;
  }

  .card-form {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;

    label {
      font-size: 18px;
      font-family: "Inter", Sans-serif;
      margin-bottom: 5px;
      font-weight: 600;
    }

    button {
      width: 100%;
      height: 40px;
      font-size: 20px;
      cursor: pointer;
      margin-top: 5px;
      background: #00a84a;
      font-family: "Inter", Sans-serif;
      color: #FFFFFF;
      border: none;
      font-weight: 600;
      margin-bottom: 10px;
      transition: 0.3s;

      :hover {
        background: #078b41;
      }
    }
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 18px;
    padding-left: 10px;
    margin-bottom: 20px;
  }
`;

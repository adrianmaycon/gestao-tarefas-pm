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

  .icon-login {
    font-size: 140px;
    color: #172b4d;
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
      margin-bottom: 10px;
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

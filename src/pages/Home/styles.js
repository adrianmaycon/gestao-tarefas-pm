import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  align-items: center;
  justify-content: center;
  background: url('https://www.pm.ce.gov.br/wp-content/themes/ceara2017/assets/images/base-ondas.svg') no-repeat -50px bottom #FFFFFF;
  border-bottom: 5px solid #00bd19;
  background-size: 700px;
  padding-bottom: 40px;

  .box-home-body {
    width: 90%;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1.8fr 2.2fr;
    gap: 60px;

    img {
        width: 100%;
    }
  }

  .body-home-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    text-align: start;
  }

  .title {
    color: #171923;
    font-family: "Manrope", Sans-serif;
    font-size: 36px;
    font-weight: bold;
    line-height: 40px;
    margin-bottom: 0;
  }

  .sub-title {
    color: #171923;
    font-family: "Inter", Sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
  }

  .icon {
    background: #0001fe3b;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    margin-right: 15px;
    color: #111;
  }

  p {
    color: #171923;
    font-family: "Inter", Sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    
    b {
        font-weight: 600;
        line-height: 28px;
    }
  }

  @media (max-width: 1030px) {
    .box-home-body {
        grid-template-columns: 1.5fr 2.5fr;
    }

    .title {
        font-size: 30px;
        line-height: 38px;
    }

    p {
        font-size: 15px;
    }
  }

  @media (max-width: 690px) {
    .box-home-body {
        grid-template-columns: 1fr;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        margin: 20px 0;

        img {
            width: 300px;
            margin-bottom: 20px;
        }
    }
  }
`;

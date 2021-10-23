import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: planetImage;
  height: 700px;

  @media (max-width: 1050px) {
    height: 500px;
  }
  @media (max-width: 750px) {
    height: 300px;
    margin: 50px 0;
  }
`;

export const MainImage = styled.img`
  position: relative;

  @media (max-width: 1050px) {
    max-height: 370px;
  }
  @media (max-width: 750px) {
    height: 100%;
  }
`;

export const AdditionalImage = styled.img`
  position: absolute;
  height: 200px;
  top: 50%;
  left: calc(50% - 200px);

  @media (max-width: 1050px) {
    left: calc(50%);
    top: 45%;
    height: 180px;
  }
  @media (max-width: 750px) {
    left: 55%;
    top: 33%;
    height: 150px;
    transform: rotate(-30deg);
  }
`;

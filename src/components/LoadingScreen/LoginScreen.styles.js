import styled, { keyframes } from 'styled-components';

const jumpAnimation = keyframes`
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-80px);
  }
  100%{
    transform: translateY(0);
  }
`;

const animationDelay = 120;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;

    animation-name: ${jumpAnimation};
    animation-timing-function: cubic-bezier(0.43, 0.01, 0.2, 1);
    animation-duration: 1s;
    animation-iteration-count: infinite;
    transform: scale(0.7);
  }
  div:nth-of-type(1) {
    background-color: ${({ theme }) => theme.colors.mercury};
    width: 22px;
    height: 22px;
    animation-delay: ${`${animationDelay}ms`};
  }
  div:nth-of-type(2) {
    background-color: ${({ theme }) => theme.colors.venus};
    width: 27px;
    height: 27px;
    animation-delay: ${`${animationDelay * 2}ms`};
  }
  div:nth-of-type(3) {
    background-color: ${({ theme }) => theme.colors.earth};
    width: 30px;
    height: 30px;
    animation-delay: ${`${animationDelay * 3}ms`};
  }
  div:nth-of-type(4) {
    background-color: ${({ theme }) => theme.colors.mars};
    width: 25px;
    height: 25px;
    animation-delay: ${`${animationDelay * 4}ms`};
  }
  div:nth-of-type(5) {
    background-color: ${({ theme }) => theme.colors.jupiter};
    width: 50px;
    height: 50px;
    animation-delay: ${`${animationDelay * 5}ms`};
  }
  div:nth-of-type(6) {
    background-color: ${({ theme }) => theme.colors.saturn};
    width: 40px;
    height: 40px;
    animation-delay: ${`${animationDelay * 6}ms`};
  }
  div:nth-of-type(7) {
    background-color: ${({ theme }) => theme.colors.uranus};
    width: 38px;
    height: 38px;
    animation-delay: ${`${animationDelay * 7}ms`};
  }
  div:nth-of-type(8) {
    width: 35px;
    height: 35px;
    background-color: ${({ theme }) => theme.colors.neptune};
    animation-delay: ${`${animationDelay * 8}ms`};
  }
`;

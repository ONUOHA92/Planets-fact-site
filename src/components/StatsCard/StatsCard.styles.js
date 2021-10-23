import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1050px) {
    gap: 9px;
  }
  @media (max-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }
  span:first-of-type {
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Spartan', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: bold;
    letter-spacing: 1px;
    opacity: 0.5;
    @media (max-width: 1050px) {
      font-size: ${({ theme }) => theme.fontSize.xxs};
    }
    @media (max-width: 750px) {
      font-size: ${({ theme }) => theme.fontSize.xxs};
    }
  }
  span:last-of-type {
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Antonio', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: medium;
    letter-spacing: -1.5px;
    @media (max-width: 1050px) {
      font-size: 24px;
      letter-spacing: -0.5px;
    }
    @media (max-width: 750px) {
      font-size: 20px;
    }
  }
`;

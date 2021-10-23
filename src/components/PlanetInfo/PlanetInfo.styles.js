import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 80px;
  grid-area: planetInfo;
  display: grid;
  @media (max-width: 1050px) {
    grid-template-columns: 1fr 340px;
    gap: 50px;
    margin-top: 0;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: 400;
  margin: 0;
  @media (max-width: 1050px) {
    font-size: 48px;
  }
  @media (max-width: 750px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: center;
  }
`;

export const Content = styled.p`
  font-family: 'Spartan', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.9;
  line-height: 25px;
  margin: 25px 0;
  @media (max-width: 1050px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media (max-width: 750px) {
    text-align: center;
  }
`;

export const Source = styled.p`
  font-family: 'Spartan', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  line-height: 25px;
  @media (max-width: 750px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const StyledLink = styled.a`
  font-family: 'Spartan', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  line-height: 25px;
  font-weight: bold;
  margin-right: 8px;
  @media (max-width: 750px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px 0;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const InfoBox = styled.div`
  height: 350px;
  @media (max-width: 750px) {
    height: fit-content;
  }
`;

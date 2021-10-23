import { HamburgerWrapper } from 'components/Hamburger/Hamburger.styles';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: normal;
  font-size: 28px;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: -1.05px;
  font-family: 'Antonio';
  display: flex;
  @media (max-width: 1050px) {
    height: 170%;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 85px;
  @media (max-width: 1050px) {
    flex-direction: column;
    height: 160px;
  }
  @media (max-width: 750px) {
    flex-direction: row;
    height: 70px;
  }
  ${HamburgerWrapper} {
    display: none;
    @media (max-width: 750px) {
      display: block;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  height: 100%;
  align-items: center;

  font-family: 'Spartan', sans-serif;
  letter-spacing: 1px;
  position: relative;
  &.active:after {
    content: '';
    display: block;
    position: absolute;
    background-color: ${({ theme, $colorName }) => theme.colors[$colorName]};
    width: 100%;
    height: 4px;
    top: 0;
    @media (max-width: 1050px) {
      top: unset;
      bottom: 0;
    }
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: stretch;
  gap: 35px;
  height: 100%;
  @media (max-width: 750px) {
    display: none;
    /* width: 0; */
  }
`;

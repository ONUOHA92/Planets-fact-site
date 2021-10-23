import React from 'react';
import { Wrapper } from './Navigation.styles';
import { Logo } from './Navigation.styles';
import { StyledLink, StyledList } from './Navigation.styles';
import Hamburger from 'components/Hamburger/Hamburger';

const Navigation = ({ name, handleNavToggle, isMobileNavOpen }) => {
  const colorName = name.toLowerCase();
  return (
    <Wrapper>
      <Logo>The Planets</Logo>
      <Hamburger handleNavToggle={handleNavToggle} isMobileNavOpen={isMobileNavOpen} />
      <StyledList>
        <li>
          <StyledLink to="/mercury" $colorName={colorName}>
            Mercury
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/venus" $colorName={colorName}>
            Venus
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/earth" $colorName={colorName}>
            Earth
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/mars" $colorName={colorName}>
            Mars
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/jupiter" $colorName={colorName}>
            Jupiter
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/saturn" $colorName={colorName}>
            Saturn
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/uranus" $colorName={colorName}>
            Uranus
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/neptune" $colorName={colorName}>
            Neptune
          </StyledLink>
        </li>
      </StyledList>
    </Wrapper>
  );
};

export default Navigation;

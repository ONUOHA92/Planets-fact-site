import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Chevron } from 'assets/images/icon-chevron.svg';

const Wrapper = styled.div`
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.black};
  position: fixed;
  z-index: 10;
  transform: scale(1, 0);
  transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;
  transform-origin: top;
  opacity: 0;
  ${({ isMobileNavOpen }) => isMobileNavOpen && `transform: scale(1); opacity: 1;`}
`;

const StyledLink = styled(Link)`
  padding: 0 40px;
  display: flex;
  justify-content: flex-start;
  gap: 50px;
  align-items: center;
  width: 100%;
  background-color: back;
  height: 70px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: bold;
  font-family: 'Spartan', sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  &:not(:last-child)::after {
    position: absolute;
    content: '';
    display: block;
    width: calc(100% - 80px);
    height: 1px;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme, $colorName }) => theme.colors[$colorName]};
`;

export const StyledChevron = styled(Chevron)`
  margin-left: auto;
`;

const MobileMenu = ({ isMobileNavOpen }) => {
  return (
    <Wrapper isMobileNavOpen={isMobileNavOpen}>
      <StyledLink to="/mercury">
        <Dot $colorName={'mercury'}></Dot>
        {'Mercury'}
        <StyledChevron />
      </StyledLink>
      <StyledLink to="/venus">
        <Dot $colorName={'venus'}></Dot>
        {'Venus'}
        <StyledChevron />
      </StyledLink>
      <StyledLink to="/earth">
        <Dot $colorName={'earth'}></Dot>
        {'Earth'}
        <StyledChevron />
      </StyledLink>

      <StyledLink to="/mars">
        <Dot $colorName={'mars'}></Dot>
        {'Mars'}
        <StyledChevron />
      </StyledLink>
      <StyledLink to="/jupiter">
        <Dot $colorName={'jupiter'}></Dot>
        {'Jupiter'}
        <StyledChevron />
      </StyledLink>
      <StyledLink to="/saturn">
        <Dot $colorName={'saturn'}></Dot>
        {'Saturn'}
        <StyledChevron />
      </StyledLink>
      <StyledLink to="/uranus">
        <Dot $colorName={'uranus'}></Dot>
        {'Uranus'}
        <StyledChevron />
      </StyledLink>
      <StyledLink to="/neptune">
        <Dot $colorName={'neptune'}></Dot>
        {'Neptune'}
        <StyledChevron />
      </StyledLink>
    </Wrapper>
  );
};

export default MobileMenu;

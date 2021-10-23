import styled from 'styled-components';

export const HamburgerWrapper = styled.div`
  cursor: pointer;
  /* background-color: red; */
  height: 22px;
  width: 30px;
  position: relative;

  div {
    width: 30px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    transition: transform 500ms cubic-bezier(0, 1.04, 1, 1.57), top 300ms ease-in-out;
  }
  div:first-of-type {
    top: 0;
    ${({ isMobileNavOpen }) => isMobileNavOpen && `top: 9px; transform: rotate(-45deg); `}
  }

  div:nth-of-type(2) {
    top: 9px;
    ${({ isMobileNavOpen }) => isMobileNavOpen && `transform: rotate(45deg)`}
  }
  div:last-of-type {
    top: 18px;
    ${({ isMobileNavOpen }) => isMobileNavOpen && `top: 9px; transform: rotate(45deg)`}
  }
`;

import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: 'Spartan', sans-serif;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ selected, theme, colorName }) => {
    if (selected) return theme.colors[colorName];
    else return theme.colors.black;
  }};
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  height: 48px;
  padding: 0;
  text-align: left;
  cursor: pointer;
  @media (max-width: 1050px) {
    font-size: 9px;
    height: 40px;
  }
  span {
    padding: 0 28px;
    opacity: 0.5;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

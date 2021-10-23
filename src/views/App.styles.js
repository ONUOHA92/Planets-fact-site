import styled from 'styled-components';
import BackgroundImage from 'assets/images/background-stars.svg';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  background-image: ${`url(${BackgroundImage})`};
`;

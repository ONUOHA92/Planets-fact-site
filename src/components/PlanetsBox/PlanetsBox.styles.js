import styled from 'styled-components';
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'planetImage planetInfo'
    'planetStats planetStats';
  grid-template-columns: 2fr 1fr;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'planetImage'
      'planetInfo'
      'planetStats';
  }

  @media (max-width: 1050px) {
    grid-template-areas:
      'planetImage'
      'planetInfo'
      'planetStats';
  }
`;

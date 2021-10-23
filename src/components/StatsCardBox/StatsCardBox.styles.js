import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 25px;
  grid-area: planetStats;
  margin-bottom: 40px;
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 10px;
  }
`;

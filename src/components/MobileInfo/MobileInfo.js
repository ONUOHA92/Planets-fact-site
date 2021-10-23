import styled from 'styled-components';

const Wrapper = styled.ul`
  display: none;
  width: 100%;
  height: 50px;
  padding: 0 40px;
  margin: 0;
  list-style-type: none;
  gap: 10%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  @media (max-width: 750px) {
    display: flex;
  }
`;

const ListItem = styled.li`
  flex: 1;
  position: relative;
  &:after {
    display: block;
    position: absolute;
    background-color: ${({ theme, $colorName }) => theme.colors[$colorName]};
    width: 100%;
    height: 4px;
    bottom: 0;
    ${({ selected }) =>
      selected &&
      `
     content: '';
    `}
  }
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Spartan', sans-serif;
  font-size: 9px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;
  height: 100%;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MobileInfo = ({ name, handleChangeCurrentTab, currentTab }) => {
  const colorName = name.toLowerCase();
  return (
    <Wrapper>
      <ListItem $colorName={colorName} selected={currentTab === 'planet'}>
        <StyledButton onClick={() => handleChangeCurrentTab('planet')}>overview</StyledButton>
      </ListItem>
      <ListItem $colorName={colorName} selected={currentTab === 'internal'}>
        <StyledButton onClick={() => handleChangeCurrentTab('internal')}>structure</StyledButton>
      </ListItem>
      <ListItem $colorName={colorName} selected={currentTab === 'geology'}>
        <StyledButton onClick={() => handleChangeCurrentTab('geology')}>surface</StyledButton>
      </ListItem>
    </Wrapper>
  );
};

export default MobileInfo;

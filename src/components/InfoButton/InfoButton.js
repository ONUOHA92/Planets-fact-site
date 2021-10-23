import { StyledButton } from './InfoButton.styles';

const InfoButton = ({ planetName, handleChangeCurrentTab, title, number, tabName, selected }) => {
  return (
    <li>
      <StyledButton colorName={planetName.toLowerCase()} onClick={() => handleChangeCurrentTab(tabName)} selected={selected}>
        <span>{number}</span>
        {title}
      </StyledButton>
    </li>
  );
};

export default InfoButton;

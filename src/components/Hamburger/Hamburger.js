import { HamburgerWrapper } from './Hamburger.styles';

const Hamburger = ({ isMobileNavOpen, handleNavToggle }) => {
  return (
    <HamburgerWrapper isMobileNavOpen={isMobileNavOpen} onClick={handleNavToggle}>
      <div></div>
      <div></div>
      <div></div>
    </HamburgerWrapper>
  );
};

export default Hamburger;

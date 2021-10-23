import { Wrapper } from './StatsCard.styles';

const StatsCard = ({ title, info }) => {
  return (
    <Wrapper>
      <span>{title}</span>
      <span>{info}</span>
    </Wrapper>
  );
};

export default StatsCard;

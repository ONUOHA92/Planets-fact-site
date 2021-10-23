import React from 'react';
import StatsCard from 'components/StatsCard/StatsCard';
import { Wrapper } from './StatsCardBox.styles';

const StatsCardBox = ({ rotation, revolution, radius, temperature }) => {
  return (
    <Wrapper>
      <StatsCard title={'Rotation Time'} info={rotation} />
      <StatsCard title={'Revolution Time'} info={revolution} />
      <StatsCard title={'Radius'} info={radius} />
      <StatsCard title={'Average temp.'} info={temperature} />
    </Wrapper>
  );
};

export default StatsCardBox;

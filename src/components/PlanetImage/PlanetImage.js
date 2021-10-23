import React from 'react';
import { MainImage, Wrapper, AdditionalImage } from './PlanetImage.styles';

const PlanetImage = ({ mainImage, additionalImage }) => {
  return (
    <Wrapper>
      <MainImage src={mainImage} alt="planet" />
      {additionalImage && <AdditionalImage src={additionalImage} alt="planet" />}
    </Wrapper>
  );
};

export default PlanetImage;

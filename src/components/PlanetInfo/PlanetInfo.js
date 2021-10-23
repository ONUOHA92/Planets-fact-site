import InfoListItem from 'components/InfoButton/InfoButton';

import { ReactComponent as IconSource } from 'assets/images/icon-source.svg';
import { Wrapper, InfoBox, Header, Content, Source, StyledLink, StyledList } from './PlanetInfo.styles';

const PlanetInfo = ({ name, content, source, handleChangeCurrentTab, currentTab }) => {
  return (
    <Wrapper>
      <InfoBox>
        <Header>{name}</Header>
        <Content>{content}</Content>
        <Source>
          Source : <StyledLink href={source}>Wikipedia</StyledLink>
          <IconSource />
        </Source>
      </InfoBox>
      <StyledList>
        <InfoListItem
          planetName={name}
          number="01"
          title="overview"
          handleChangeCurrentTab={handleChangeCurrentTab}
          tabName="planet"
          selected={currentTab === 'planet'}
        />
        <InfoListItem
          planetName={name}
          number="02"
          title="internal structure"
          handleChangeCurrentTab={handleChangeCurrentTab}
          tabName="internal"
          selected={currentTab === 'internal'}
        />
        <InfoListItem
          planetName={name}
          number="03"
          title="surface geology"
          handleChangeCurrentTab={handleChangeCurrentTab}
          tabName="geology"
          selected={currentTab === 'geology'}
        />
      </StyledList>
    </Wrapper>
  );
};

export default PlanetInfo;

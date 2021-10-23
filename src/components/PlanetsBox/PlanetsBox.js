import InfoCardBox from 'components/StatsCardBox/StatsCardBox';
import PlanetImage from 'components/PlanetImage/PlanetImage';
import React, { useState, useEffect, useCallback } from 'react';
import PlanetData from 'data/data.json';
import PlanetInfo from 'components/PlanetInfo/PlanetInfo';
import Navigation from 'components/Navigation/Navigation';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import { ContentWrapper } from './PlanetsBox.styles';
import MobileInfo from 'components/MobileInfo/MobileInfo';
import MobileMenu from 'components/MobileMenu/MobileMenu';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (PlanetData) {
        resolve([...PlanetData]);
      } else {
        reject(new Error('Planet data cannot be reached'));
      }
    }, 3000);
  });
};

const PlanetsBox = ({ currentPlanetIndex = 0 }) => {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('planet');
  const [currentPlanetData, setCurrentPlanetData] = useState({});
  const [mainImage, setMainImage] = useState(null);
  const [additionalImage, setAdditionalImage] = useState(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleScroll = useCallback(() => {
    if (isMobileNavOpen) document.body.style = `overflow: unset`;
    else document.body.style = `overflow: hidden`;
  }, [isMobileNavOpen]);

  const handleNavToggle = () => {
    toggleScroll();
    setIsMobileNavOpen((prev) => !prev);
  };

  const handleChangeCurrentTab = (tabName) => {
    switch (tabName) {
      case 'planet':
        setCurrentTab('planet');
        break;
      case 'internal':
        setCurrentTab('internal');
        break;
      case 'geology':
        setCurrentTab('geology');
        break;
      default:
        setCurrentTab('planet');
        break;
    }
  };

  useEffect(() => {
    // console.log('api call');
    mockAPI().then((planetData) => {
      setData(planetData);
      setDataLoading(false);
    });
  }, []);

  useEffect(() => {
    // console.log('planet change');
    setCurrentPlanetData(data[currentPlanetIndex]);
    setCurrentTab('planet');
    setIsMobileNavOpen(false);
    document.body.style = `overflow: unset`;
  }, [data, currentPlanetIndex]);

  useEffect(() => {
    // console.log('tab change call');
    if (data.length === 0) return;
    const images = data[currentPlanetIndex].images;
    if (currentTab === 'geology') {
      setMainImage(images['planet']);
      setAdditionalImage(images['geology']);
    } else {
      setMainImage(images[currentTab]);
      setAdditionalImage(null);
    }
  }, [data, currentPlanetIndex, currentTab]);

  const getSubpageName = (tabName) => {
    switch (tabName) {
      case 'planet':
        return 'overview';
      case 'internal':
        return 'structure';
      case 'geology':
        return 'geology';
      default:
        return 'overview';
    }
  };

  return dataLoading ? (
    <LoadingScreen />
  ) : (
    <>
      <Navigation name={currentPlanetData.name} handleNavToggle={handleNavToggle} isMobileNavOpen={isMobileNavOpen} />
      <MobileInfo name={currentPlanetData.name} handleChangeCurrentTab={handleChangeCurrentTab} currentTab={currentTab} />
      <MobileMenu name={currentPlanetData.name} isMobileNavOpen={isMobileNavOpen} />
      <ContentWrapper>
        <PlanetImage mainImage={mainImage} additionalImage={additionalImage} />
        <PlanetInfo
          name={currentPlanetData.name}
          content={currentPlanetData[getSubpageName(currentTab)].content}
          source={currentPlanetData[getSubpageName(currentTab)].source}
          handleChangeCurrentTab={handleChangeCurrentTab}
          currentTab={currentTab}
        />
        <InfoCardBox
          rotation={currentPlanetData.rotation}
          revolution={currentPlanetData.revolution}
          radius={currentPlanetData.radius}
          temperature={currentPlanetData.temperature}
        />
      </ContentWrapper>
    </>
  );
};

export default PlanetsBox;

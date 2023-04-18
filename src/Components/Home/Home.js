import React from 'react';
import styled from 'styled-components';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';

const Home = () => {
  return (
    <StMain>
      <HomeSection />
      <AboutSection />
      <ProjectSection />
    </StMain>
  );
};

const StMain = styled.main`
  width: 100%;
  height: 100%;
`;

export default Home;

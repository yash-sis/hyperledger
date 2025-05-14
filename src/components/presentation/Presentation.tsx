
import React, { useState } from 'react';
import PresentationControls from './PresentationControls';
import IntroSlide from './slides/IntroSlide';
import LifecycleSlide from './slides/LifecycleSlide';
import CategoriesSlide from './slides/CategoriesSlide';
import FrameworksSlide from './slides/FrameworksSlide';
import LibrariesSlide from './slides/LibrariesSlide';
import ToolsSlide from './slides/ToolsSlide';
import DomainProjectsSlide from './slides/DomainProjectsSlide';
import EcosystemSummarySlide from './slides/EcosystemSummarySlide';
import ProtocolSlide from './slides/ProtocolSlide';
import ProtocolEvolutionSlide from './slides/ProtocolEvolutionSlide';
import ModularApproachSlide from './slides/ModularApproachSlide';
import ChaincodeSlide from './slides/ChaincodeSlide';
import FabricOverviewSlide from './slides/FabricOverviewSlide';
import FabricComponentsSlide from './slides/FabricComponentsSlide';
import FabricApplicationsSlide from './slides/FabricApplicationsSlide';
import SawtoothSlide from './slides/SawtoothSlide';
import CordaSlide from './slides/CordaSlide';
import SummarySlide from './slides/SummarySlide';

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <IntroSlide key="intro" />,
    <LifecycleSlide key="lifecycle" />,
    <CategoriesSlide key="categories" />,
    <FrameworksSlide key="frameworks" />,
    <LibrariesSlide key="libraries" />,
    <ToolsSlide key="tools" />,
    <DomainProjectsSlide key="domain" />,
    <EcosystemSummarySlide key="ecosystem" />,
    <ProtocolEvolutionSlide key="protocol-evolution" />,
    <ProtocolSlide key="protocol" />,
    <ModularApproachSlide key="modular-approach" />,
    <ChaincodeSlide key="chaincode" />,
    <FabricOverviewSlide key="fabric-overview" />,
    <FabricComponentsSlide key="fabric-components" />,
    <FabricApplicationsSlide key="fabric-applications" />,
    <SawtoothSlide key="sawtooth" />,
    <CordaSlide key="corda" />,
    <SummarySlide key="summary" />
  ];

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-gray-50 relative">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          {slide}
        </div>
      ))}
      
      <PresentationControls 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        goToSlide={goToSlide}
      />
    </div>
  );
};

export default Presentation;

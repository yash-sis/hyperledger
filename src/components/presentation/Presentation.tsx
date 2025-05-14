
import React, { useState } from 'react';
import PresentationControls from './PresentationControls';
import IntroSlide from './slides/IntroSlide';
import ProtocolSlide from './slides/ProtocolSlide';
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
    <ProtocolSlide key="protocol" />,
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

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PresentationControls from "./PresentationControls";
import IntroSlide from "./slides/IntroSlide";
import LifecycleSlide from "./slides/LifecycleSlide";
import CategoriesSlide from "./slides/CategoriesSlide";
import FrameworksSlide from "./slides/FrameworksSlide";
import LibrariesSlide from "./slides/LibrariesSlide";
import ToolsSlide from "./slides/ToolsSlide";
import DomainProjectsSlide from "./slides/DomainProjectsSlide";
import ProtocolEvolutionSlide from "./slides/ProtocolEvolutionSlide";
import ProtocolSlide from "./slides/ProtocolSlide";
import ModularApproachSlide from "./slides/ModularApproachSlide";
import ChaincodeSlide from "./slides/ChaincodeSlide";
import FabricOverviewSlide from "./slides/FabricOverviewSlide";
import FabricComponentsSlide from "./slides/FabricComponentsSlide";
import FabricApplicationsSlide from "./slides/FabricApplicationsSlide";
import FabricMembershipSlide from "./slides/FabricMembershipSlide";
import FabricLedgerSlide from "./slides/FabricLedgerSlide";
import SawtoothSlide from "./slides/SawtoothSlide";
import CordaSlide from "./slides/CordaSlide";
import SummarySlide from "./slides/SummarySlide";

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
    <ProtocolEvolutionSlide key="protocol-evolution" />,
    <ProtocolSlide key="protocol" />,
    <ModularApproachSlide key="modular-approach" />,
    <ChaincodeSlide key="chaincode" />,
    <FabricOverviewSlide key="fabric-overview" />,
    <FabricComponentsSlide key="fabric-components" />,
    <FabricMembershipSlide key="fabric-membership" />,
    <FabricLedgerSlide key="fabric-ledger" />,
    <FabricApplicationsSlide key="fabric-applications" />,
    <SawtoothSlide key="sawtooth" />,
    <CordaSlide key="corda" />,
    <SummarySlide key="summary" />,
  ];

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-gray-50 relative">
      <ScrollArea className="h-[calc(100vh-60px)] pb-[90px]">
        {/* Add bottom padding for controls */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""} ${
              index !== currentSlide ? "hidden" : ""
            }`}
          >
            {slide}
          </div>
        ))}
      </ScrollArea>

      <div className="fixed bottom-0 left-0 w-full z-10 bg-gray-50 border-t border-gray-200">
        <PresentationControls
          currentSlide={currentSlide}
          totalSlides={slides.length}
          goToSlide={goToSlide}
        />
      </div>
    </div>
  );
};

export default Presentation;

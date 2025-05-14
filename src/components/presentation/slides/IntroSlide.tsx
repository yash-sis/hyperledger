
import React from 'react';
import { DiagramBox } from '../DiagramComponents';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const IntroSlide: React.FC = () => {
  return (
    <div className="slide-content">
      <div className="hero-section flex justify-center items-center mb-6">
        <div className="flex space-x-8 items-center">
          <div className="logo-container">
            <AspectRatio ratio={3/1} className="w-60">
              <div className="bg-[url('https://www.hyperledger.org/wp-content/uploads/2018/03/logo_hl_new.png')] bg-contain bg-no-repeat bg-center h-full"></div>
            </AspectRatio>
          </div>
          <div className="text-3xl font-bold text-center">+</div>
          <div className="logo-container">
            <AspectRatio ratio={4/1} className="w-48">
              <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/The_Linux_Foundation_logo.png/1200px-The_Linux_Foundation_logo.png')] bg-contain bg-no-repeat bg-center h-full"></div>
            </AspectRatio>
          </div>
        </div>
      </div>
      
      <div className="relative z-10">
        <h1 className="slide-title">Hyperledger</h1>
        
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-sm mb-8">
          <p className="text-xl text-center mb-6">
            <span className="font-semibold">Not a blockchain</span>, but an open-source umbrella project launched by the Linux Foundation in 2015
          </p>
          
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
              <p className="text-lg">
                Goal: Foster collaborative development of <span className="font-medium">enterprise-grade distributed ledger technologies</span>
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <DiagramBox 
              title="Hosts various blockchain projects focused on:" 
              color="bg-[#f0f7ff] border-[#cce3ff]"
              className="p-4 max-w-xl"
            >
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-800">Modularity</span>
                <span className="px-3 py-1 bg-green-100 rounded-full text-green-800">Scalability</span>
                <span className="px-3 py-1 bg-purple-100 rounded-full text-purple-800">Performance</span>
                <span className="px-3 py-1 bg-yellow-100 rounded-full text-yellow-800">Enterprise Applications</span>
              </div>
            </DiagramBox>
          </div>
        </div>
      </div>
      
      <div className="blockchain-network-bg absolute inset-0 opacity-10 z-0">
        <div className="h-full w-full bg-[url('https://img.freepik.com/free-vector/blockchain-background-with-technology-connection-concept_1017-31586.jpg')] bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default IntroSlide;

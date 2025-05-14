
import React from 'react';
import { DiagramBox } from '../DiagramComponents';

const IntroSlide: React.FC = () => {
  return (
    <div className="slide-content">
      <h1 className="slide-title">Hyperledger</h1>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-xl mb-6">
            An open source collaborative effort to advance cross-industry blockchain technologies
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 w-full max-w-4xl mx-auto mb-8">
          <div className="col-span-3">
            <DiagramBox 
              title="What is Hyperledger?" 
              color="bg-[#f0f7ff] border-[#cce3ff]"
              className="p-4"
            >
              <p className="text-left">
                A global collaboration hosted by The Linux Foundation, creating an open source enterprise grade platform for distributed ledgers
              </p>
            </DiagramBox>
          </div>
        </div>
        
        <div className="w-full">
          <h3 className="slide-subtitle text-center">Projects under Hyperledger</h3>
          <div className="grid grid-cols-4 gap-3 max-w-3xl mx-auto">
            <DiagramBox title="Fabric" color="bg-blue-100 border-blue-300" />
            <DiagramBox title="Sawtooth Lake" color="bg-green-100 border-green-300" />
            <DiagramBox title="Iroha" color="bg-purple-100 border-purple-300" />
            <DiagramBox title="Burrow" color="bg-yellow-100 border-yellow-300" />
            <DiagramBox title="Indy" color="bg-red-100 border-red-300" />
            <DiagramBox title="Explorer" color="bg-orange-100 border-orange-300" />
            <DiagramBox title="Cello" color="bg-pink-100 border-pink-300" />
            <DiagramBox title="Composer" color="bg-indigo-100 border-indigo-300" />
            <DiagramBox title="Quilt" color="bg-teal-100 border-teal-300" className="col-span-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;

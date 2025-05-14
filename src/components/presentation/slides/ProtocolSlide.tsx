
import React from 'react';
import { ArchitectureDiagram, DiagramBox } from '../DiagramComponents';

const ProtocolSlide: React.FC = () => {
  return (
    <div className="slide-content">
      <h1 className="slide-title">Hyperledger as a Protocol</h1>
      
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="col-span-2">
          <ArchitectureDiagram title="The Reference Architecture">
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-3 grid grid-cols-3 gap-2 mb-4">
                <DiagramBox title="Consensus Layer" color="bg-blue-100 border-blue-300" />
                <DiagramBox title="Smart Contract Layer" color="bg-green-100 border-green-300" />
                <DiagramBox title="Communication Layer" color="bg-purple-100 border-purple-300" />
              </div>
              
              <div className="col-span-3 mb-2">
                <DiagramBox title="Distributed Ledger" color="bg-yellow-100 border-yellow-300" />
              </div>
              
              <DiagramBox title="Identity Services" color="bg-red-100 border-red-300" />
              <DiagramBox title="Policy Services" color="bg-orange-100 border-orange-300" />
              <DiagramBox title="APIs" color="bg-pink-100 border-pink-300" />
            </div>
          </ArchitectureDiagram>
        </div>
        
        <div>
          <h3 className="slide-subtitle">Requirements and Design Goals</h3>
          <ul className="space-y-2">
            <li className="bullet-point">Modular architecture for flexibility</li>
            <li className="bullet-point">Privacy and confidentiality in transactions</li>
            <li className="bullet-point">Deterministic consensus mechanisms</li>
            <li className="bullet-point">Robust identity management framework</li>
            <li className="bullet-point">Auditability and compliance support</li>
            <li className="bullet-point">Cross-platform interoperability</li>
            <li className="bullet-point">Portable deployment across environments</li>
            <li className="bullet-point">Rich data query capabilities</li>
          </ul>
        </div>
        
        <div>
          <h3 className="slide-subtitle">The Modular Approach</h3>
          <div className="diagram-container p-4">
            <div className="grid grid-cols-2 gap-3">
              <DiagramBox title="Pluggable consensus" color="bg-blue-50 border-blue-200">
                Different consensus based on needs
              </DiagramBox>
              <DiagramBox title="Flexible smart contracts" color="bg-green-50 border-green-200">
                Multiple language support
              </DiagramBox>
              <DiagramBox title="Configurable privacy" color="bg-red-50 border-red-200">
                Channels and private data
              </DiagramBox>
              <DiagramBox title="Customizable identity" color="bg-yellow-50 border-yellow-200">
                Certificate authorities
              </DiagramBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolSlide;

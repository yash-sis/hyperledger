
import React from 'react';
import { ArchitectureDiagram, FlowChart, DiagramBox } from '../DiagramComponents';

const SawtoothSlide: React.FC = () => {
  return (
    <div className="slide-content">
      <h1 className="slide-title">Hyperledger Sawtooth Lake</h1>
      
      <div className="flex-1 grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <ArchitectureDiagram title="Sawtooth Architecture">
            <div className="grid grid-cols-5 gap-2">
              <div className="col-span-5 bg-blue-50 p-2 rounded-lg mb-2">
                <div className="text-center font-medium mb-2">Applications</div>
                <div className="grid grid-cols-5 gap-2">
                  <DiagramBox title="REST API" color="bg-blue-100 border-blue-300" className="col-span-2" />
                  <DiagramBox title="SDKs" color="bg-blue-100 border-blue-300" className="col-span-3" />
                </div>
              </div>
              
              <div className="col-span-2 bg-green-50 p-2 rounded-lg">
                <div className="text-center font-medium mb-2">Validator</div>
                <div className="space-y-2">
                  <DiagramBox title="Journal" color="bg-green-100 border-green-300" />
                  <DiagramBox title="State" color="bg-green-100 border-green-300" />
                  <DiagramBox title="Consensus" color="bg-green-100 border-green-300" />
                </div>
              </div>
              
              <div className="col-span-3 bg-yellow-50 p-2 rounded-lg h-full">
                <div className="text-center font-medium mb-2">Transaction Families</div>
                <div className="grid grid-cols-3 gap-2 h-[calc(100%-30px)]">
                  <DiagramBox title="Settings" color="bg-yellow-100 border-yellow-300" />
                  <DiagramBox title="Identity" color="bg-yellow-100 border-yellow-300" />
                  <DiagramBox title="IntegerKey" color="bg-yellow-100 border-yellow-300" />
                  <DiagramBox title="BlockInfo" color="bg-yellow-100 border-yellow-300" />
                  <DiagramBox title="XO Game" color="bg-yellow-100 border-yellow-300" />
                  <DiagramBox title="Custom" color="bg-yellow-100 border-yellow-300" />
                </div>
              </div>
              
              <div className="col-span-5 mt-2">
                <DiagramBox title="Global State" color="bg-purple-100 border-purple-300" className="py-3" />
              </div>
            </div>
          </ArchitectureDiagram>
        </div>
        
        <div>
          <h3 className="slide-subtitle">PoET (Proof of Elapsed Time)</h3>
          <FlowChart title="PoET Consensus Flow">
            <div className="space-y-4 p-2 text-left">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">1</div>
                <div>Each validator requests wait time from TEE</div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">2</div>
                <div>Validators sleep for assigned time</div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">3</div>
                <div>First validator to wake creates block</div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">4</div>
                <div>Validator broadcasts the block to network</div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">5</div>
                <div>Other validators verify and accept block</div>
              </div>
            </div>
          </FlowChart>
        </div>
        
        <div>
          <h3 className="slide-subtitle">Transaction Families</h3>
          <div className="diagram-container p-4 text-left">
            <p className="mb-2">Transaction families provide the framework for implementing business logic in Sawtooth:</p>
            <ul className="space-y-1 mb-4">
              <li className="bullet-point">Define state representation</li>
              <li className="bullet-point">Encode payload formats</li>
              <li className="bullet-point">Specify transaction execution rules</li>
            </ul>
            
            <div className="font-medium">Core Transaction Families:</div>
            <div className="grid grid-cols-2 gap-1 mt-2">
              <DiagramBox title="Settings" color="bg-indigo-50 border-indigo-200">
                On-chain settings
              </DiagramBox>
              <DiagramBox title="Identity" color="bg-indigo-50 border-indigo-200">
                Identity management
              </DiagramBox>
              <DiagramBox title="PoET" color="bg-indigo-50 border-indigo-200">
                Consensus configuration
              </DiagramBox>
              <DiagramBox title="Validator Registry" color="bg-indigo-50 border-indigo-200">
                Node registration
              </DiagramBox>
            </div>
          </div>
          
          <h3 className="slide-subtitle mt-4">Development Environment</h3>
          <div className="diagram-container p-3">
            <div className="grid grid-cols-2 gap-2">
              <DiagramBox title="Languages" color="bg-green-50 border-green-200">
                Python, JavaScript, Go, C++, Java, Rust
              </DiagramBox>
              <DiagramBox title="Deployment" color="bg-blue-50 border-blue-200">
                Docker, Kubernetes
              </DiagramBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SawtoothSlide;

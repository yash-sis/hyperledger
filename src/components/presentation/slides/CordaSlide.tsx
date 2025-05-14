
import React from 'react';
import { ArchitectureDiagram, FlowChart, DiagramBox } from '../DiagramComponents';

const CordaSlide: React.FC = () => {
  return (
    <div className="slide-content">
      <h1 className="slide-title">Hyperledger Corda</h1>
      
      <div className="flex-1 grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <ArchitectureDiagram title="Corda Architecture">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-blue-50 p-2 rounded-lg">
                <div className="text-center font-medium mb-2">Node A</div>
                <div className="space-y-2">
                  <DiagramBox title="CorDapps" color="bg-blue-100 border-blue-300" />
                  <DiagramBox title="Flows" color="bg-blue-100 border-blue-300" />
                  <DiagramBox title="Vault" color="bg-blue-100 border-blue-300" />
                </div>
              </div>
              
              <div className="bg-yellow-50 p-2 rounded-lg">
                <div className="text-center font-medium mb-2">Node B</div>
                <div className="space-y-2">
                  <DiagramBox title="CorDapps" color="bg-yellow-100 border-yellow-300" />
                  <DiagramBox title="Flows" color="bg-yellow-100 border-yellow-300" />
                  <DiagramBox title="Vault" color="bg-yellow-100 border-yellow-300" />
                </div>
              </div>
              
              <div className="bg-green-50 p-2 rounded-lg">
                <div className="text-center font-medium mb-2">Node C</div>
                <div className="space-y-2">
                  <DiagramBox title="CorDapps" color="bg-green-100 border-green-300" />
                  <DiagramBox title="Flows" color="bg-green-100 border-green-300" />
                  <DiagramBox title="Vault" color="bg-green-100 border-green-300" />
                </div>
              </div>
              
              <div className="col-span-3 grid grid-cols-3 gap-3 mt-2">
                <DiagramBox title="Notary Service" color="bg-purple-100 border-purple-300" />
                <DiagramBox title="Network Map Service" color="bg-red-100 border-red-300" />
                <DiagramBox title="Oracle Service" color="bg-orange-100 border-orange-300" />
              </div>
            </div>
          </ArchitectureDiagram>
        </div>
        
        <div>
          <h3 className="slide-subtitle">Key Concepts</h3>
          <div className="diagram-container p-4 text-left">
            <div className="space-y-4">
              <div>
                <div className="font-medium">State Objects</div>
                <p>Immutable objects representing facts with legal meaning shared between parties</p>
              </div>
              
              <div>
                <div className="font-medium">Transactions</div>
                <p>Transition states by consuming input states and producing output states</p>
              </div>
              
              <div>
                <div className="font-medium">Consensus</div>
                <p>Validity consensus (notaries) + uniqueness consensus (double-spend prevention)</p>
              </div>
              
              <div>
                <div className="font-medium">Flows</div>
                <p>Multi-step processes defining how nodes communicate to reach agreement</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="slide-subtitle">Components</h3>
          <div className="space-y-2">
            <DiagramBox title="Nodes" color="bg-blue-100 border-blue-300" className="p-2 text-left">
              <p>JVM runtimes with identity, storage, P2P networking</p>
            </DiagramBox>
            
            <DiagramBox title="CorDapps" color="bg-green-100 border-green-300" className="p-2 text-left">
              <p>Distributed applications built on Corda (contracts, flows, states)</p>
            </DiagramBox>
            
            <DiagramBox title="Vaults" color="bg-yellow-100 border-yellow-300" className="p-2 text-left">
              <p>Storage for state objects relevant to each node</p>
            </DiagramBox>
            
            <DiagramBox title="Notary Service" color="bg-purple-100 border-purple-300" className="p-2 text-left">
              <p>Prevents double-spending by validating transaction uniqueness</p>
            </DiagramBox>
          </div>
          
          <h3 className="slide-subtitle mt-4">Development Environment</h3>
          <div className="diagram-container p-3">
            <div className="grid grid-cols-2 gap-2">
              <DiagramBox title="Languages" color="bg-indigo-50 border-indigo-200">
                Kotlin, Java
              </DiagramBox>
              <DiagramBox title="Tools" color="bg-pink-50 border-pink-200">
                IntelliJ, Gradle
              </DiagramBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CordaSlide;

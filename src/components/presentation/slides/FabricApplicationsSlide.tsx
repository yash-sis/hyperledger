
import React from 'react';
import { FlowChart, Timeline, DiagramBox } from '../DiagramComponents';

const FabricApplicationsSlide: React.FC = () => {
  return (
    <div className="slide-content">
      <h1 className="slide-title">Applications on Hyperledger Fabric</h1>
      
      <div className="flex-1 grid grid-cols-2 gap-6">
        <div>
          <h3 className="slide-subtitle">Chaincode Implementation</h3>
          <div className="diagram-container p-4 text-left">
            <div className="mb-4">
              <div className="font-medium mb-1">Languages Supported:</div>
              <div className="flex gap-2">
                <DiagramBox title="Go" color="bg-blue-100 border-blue-300" />
                <DiagramBox title="Node.js" color="bg-green-100 border-green-300" />
                <DiagramBox title="Java" color="bg-yellow-100 border-yellow-300" />
              </div>
            </div>
            
            <div className="mb-4">
              <div className="font-medium mb-1">Key Functions:</div>
              <ul className="list-disc pl-5">
                <li>Asset definitions</li>
                <li>Transaction logic</li>
                <li>Access control rules</li>
                <li>State queries</li>
              </ul>
            </div>
            
            <div>
              <div className="font-medium mb-1">Interface Requirements:</div>
              <ul className="list-disc pl-5">
                <li>Init() - Initialization</li>
                <li>Invoke() - Transaction processing</li>
              </ul>
            </div>
          </div>
          
          <h3 className="slide-subtitle mt-4">Application Model</h3>
          <div className="diagram-container p-4">
            <div className="grid grid-cols-3 gap-2">
              <DiagramBox title="SDK" color="bg-blue-100 border-blue-300">
                Connection profiles
              </DiagramBox>
              <DiagramBox title="Events" color="bg-green-100 border-green-300">
                Block & TX events
              </DiagramBox>
              <DiagramBox title="Gateway" color="bg-purple-100 border-purple-300">
                Connection management
              </DiagramBox>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="slide-subtitle">Consensus in Hyperledger Fabric</h3>
          <div className="diagram-container p-4 text-left">
            <div className="mb-4">
              <div className="font-medium mb-1">Pluggable Consensus Options:</div>
              <div className="space-y-2">
                <DiagramBox title="Raft (Default)" color="bg-blue-100 border-blue-300" className="text-left p-2">
                  Crash Fault Tolerant (CFT), leader-based
                </DiagramBox>
                <DiagramBox title="Kafka (Deprecated)" color="bg-green-100 border-green-300" className="text-left p-2">
                  Distributed messaging system
                </DiagramBox>
                <DiagramBox title="Solo (Development)" color="bg-yellow-100 border-yellow-300" className="text-left p-2">
                  Single node, non-production
                </DiagramBox>
                <DiagramBox title="Custom Plugins" color="bg-purple-100 border-purple-300" className="text-left p-2">
                  BFT implementations
                </DiagramBox>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-2">
          <h3 className="slide-subtitle">Transaction Lifecycle in Hyperledger Fabric</h3>
          <Timeline 
            title="Execute-Order-Validate Architecture"
            items={[
              {
                step: "Client creates transaction proposal",
                content: "Application uses SDK to create a proposal and sends it to endorsing peers"
              },
              {
                step: "Endorsing peers simulate transaction",
                content: "Chaincode executes against current state without updating the ledger"
              },
              {
                step: "Peers return endorsed transaction",
                content: "Signed by peers with read/write sets based on execution results"
              },
              {
                step: "Client collects endorsements",
                content: "Verifies that endorsement policy is satisfied"
              },
              {
                step: "Client submits to ordering service",
                content: "Transaction with endorsements sent to orderers"
              },
              {
                step: "Ordering service creates blocks",
                content: "Transactions ordered, batched into blocks, and distributed to peers"
              },
              {
                step: "Peers validate and commit",
                content: "Each peer validates transaction and updates world state and blockchain"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default FabricApplicationsSlide;

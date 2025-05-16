import React from "react";
import { FlowChart, Timeline, DiagramBox } from "../DiagramComponents";

const FabricApplicationsSlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Applications on Hyperledger Fabric</h1>
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-6 p-2">
          <div>
            <h3 className="slide-subtitle">Application Components</h3>
            <div className="diagram-container p-4 text-left">
              <div className="mb-4">
                <div className="font-medium mb-1">
                  Typical Fabric Application:
                </div>
                <ul className="list-disc pl-5">
                  <li>Frontend UI (HTML/JavaScript)</li>
                  <li>Backend interacting with chaincode via APIs</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="font-medium mb-1">APIs & Tools for:</div>
                <div className="grid grid-cols-2 gap-2">
                  <DiagramBox
                    title="Identity Management"
                    color="bg-blue-100 border-blue-300"
                  />
                  <DiagramBox
                    title="Transaction Processing"
                    color="bg-green-100 border-green-300"
                  />
                  <DiagramBox
                    title="Chaincode Interaction"
                    color="bg-yellow-100 border-yellow-300"
                  />
                  <DiagramBox
                    title="Ledger Access"
                    color="bg-purple-100 border-purple-300"
                  />
                  <DiagramBox
                    title="Storage Interfaces"
                    color="bg-indigo-100 border-indigo-300"
                  />
                  <DiagramBox
                    title="Network Interaction"
                    color="bg-pink-100 border-pink-300"
                  />
                  <DiagramBox
                    title="Event Handling"
                    color="bg-orange-100 border-orange-300"
                  />
                </div>
              </div>
            </div>

            <h3 className="slide-subtitle mt-4">Application Model (MVC-B)</h3>
            <div className="diagram-container p-4">
              <div className="text-sm mb-3">
                Based on the MVC pattern, extended for blockchain:
              </div>
              <div className="grid grid-cols-2 gap-2">
                <DiagramBox title="View" color="bg-blue-100 border-blue-300">
                  UI (desktop, web, mobile)
                </DiagramBox>
                <DiagramBox
                  title="Control"
                  color="bg-green-100 border-green-300"
                >
                  Mediates between UI and blockchain
                </DiagramBox>
                <DiagramBox
                  title="Model"
                  color="bg-yellow-100 border-yellow-300"
                >
                  Manages off-chain data
                </DiagramBox>
                <DiagramBox
                  title="Blockchain"
                  color="bg-purple-100 border-purple-300"
                >
                  On-chain transactions and state
                </DiagramBox>
              </div>
            </div>
          </div>

          <div>
            <h3 className="slide-subtitle">Chaincode Implementation</h3>
            <div className="diagram-container p-4 text-left">
              <div className="mb-4">
                <div className="font-medium mb-1">Languages Supported:</div>
                <div className="flex gap-2">
                  <DiagramBox title="Go" color="bg-blue-100 border-blue-300" />
                  <DiagramBox
                    title="Node.js"
                    color="bg-green-100 border-green-300"
                  />
                  <DiagramBox
                    title="Java"
                    color="bg-yellow-100 border-yellow-300"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="font-medium mb-1">Chaincode Types:</div>
                <ul className="list-disc pl-5">
                  <li>Public: Visible to all network members</li>
                  <li>Confidential: Scoped to specific users</li>
                  <li>Access-Controlled: Restricted via policies</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="font-medium mb-1">Key Functions:</div>
                <ul className="list-disc pl-5">
                  <li>Init(): Initialization at deployment</li>
                  <li>Invoke(): Executes transactions, updates ledger</li>
                  <li>Query(): Reads current state without modifications</li>
                  <li>Main(): Registers the chaincode with a peer</li>
                </ul>
              </div>
            </div>

            <h3 className="slide-subtitle mt-4">
              Consensus in Hyperledger Fabric
            </h3>
            <div className="diagram-container p-4 text-left">
              <div className="mb-4">
                <div className="font-medium mb-1">
                  3-Step Consensus Mechanism:
                </div>
                <ol className="list-decimal pl-5">
                  <li>
                    Endorsement: Simulated execution generates read-write sets
                  </li>
                  <li>
                    Ordering: Transactions grouped and sequenced into blocks
                  </li>
                  <li>
                    Validation & Commitment: Transactions validated and written
                    to ledger
                  </li>
                </ol>
              </div>

              <div className="mb-4">
                <div className="font-medium mb-1">
                  Pluggable Consensus Options:
                </div>
                <div className="space-y-2">
                  <DiagramBox
                    title="Raft (Default)"
                    color="bg-blue-100 border-blue-300"
                    className="text-left p-2"
                  >
                    Crash Fault Tolerant (CFT), leader-based
                  </DiagramBox>
                  <DiagramBox
                    title="Kafka (Deprecated)"
                    color="bg-green-100 border-green-300"
                    className="text-left p-2"
                  >
                    Distributed messaging system
                  </DiagramBox>
                  <DiagramBox
                    title="BFT-SMaRt"
                    color="bg-yellow-100 border-yellow-300"
                    className="text-left p-2"
                  >
                    Byzantine Fault Tolerant implementation
                  </DiagramBox>
                  <DiagramBox
                    title="Honey Badger BFT"
                    color="bg-purple-100 border-purple-300"
                    className="text-left p-2"
                  >
                    More secure, highly fault-tolerant
                  </DiagramBox>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <h3 className="slide-subtitle">
              Transaction Lifecycle in Hyperledger Fabric
            </h3>
            <Timeline
              title="Execute-Order-Validate Architecture"
              items={[
                {
                  step: "Client proposes a transaction",
                  content:
                    "Client (registered with MSP) creates proposal and sends to endorsing peers",
                },
                {
                  step: "Endorsing peers simulate transaction",
                  content:
                    "Chaincode executes against current state without updating the ledger",
                },
                {
                  step: "Endorsers return signed read-write sets",
                  content: "Signed by peers based on execution results",
                },
                {
                  step: "Client collects endorsements",
                  content: "Verifies that endorsement policy is satisfied",
                },
                {
                  step: "Client submits to ordering service",
                  content: "Transaction with endorsements sent to orderers",
                },
                {
                  step: "Ordering service creates blocks",
                  content:
                    "Transactions ordered, batched into blocks, and distributed to peers",
                },
                {
                  step: "Peers validate and commit",
                  content:
                    "Each peer validates transaction and updates world state and blockchain",
                },
                {
                  step: "Client receives notification",
                  content:
                    "Success/failure notification sent back to the client application",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricApplicationsSlide;

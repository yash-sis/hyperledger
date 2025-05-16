import React from "react";
import { ArchitectureDiagram, DiagramBox } from "../DiagramComponents";

const FabricOverviewSlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Hyperledger Fabric</h1>

      <div className="flex-1 grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <ArchitectureDiagram title="Hyperledger Fabric Architecture">
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-3 bg-blue-50 p-2 rounded-lg mb-2">
                <div className="text-center font-medium mb-2">Applications</div>
                <div className="grid grid-cols-3 gap-2">
                  <DiagramBox title="SDK" color="bg-blue-100 border-blue-300" />
                  <DiagramBox title="API" color="bg-blue-100 border-blue-300" />
                  <DiagramBox title="UI" color="bg-blue-100 border-blue-300" />
                </div>
              </div>

              <div className="col-span-3 grid grid-cols-3 gap-2 mb-2">
                <div className="bg-green-50 p-2 rounded-lg">
                  <div className="text-center font-medium mb-2">Membership</div>
                  <DiagramBox
                    title="CA"
                    color="bg-green-100 border-green-300"
                  />
                  <div className="mt-2">
                    <DiagramBox
                      title="MSP"
                      color="bg-green-100 border-green-300"
                    />
                  </div>
                </div>

                <div className="bg-yellow-50 p-2 rounded-lg">
                  <div className="text-center font-medium mb-2">Peers</div>
                  <DiagramBox
                    title="Ledger"
                    color="bg-yellow-100 border-yellow-300"
                  />
                  <div className="mt-2">
                    <DiagramBox
                      title="Chaincode"
                      color="bg-yellow-100 border-yellow-300"
                    />
                  </div>
                </div>

                <div className="bg-red-50 p-2 rounded-lg">
                  <div className="text-center font-medium mb-2">Orderers</div>
                  <DiagramBox
                    title="Consensus"
                    color="bg-red-100 border-red-300"
                  />
                  <div className="mt-2">
                    <DiagramBox
                      title="Channels"
                      color="bg-red-100 border-red-300"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-3">
                <DiagramBox
                  title="Distributed Ledger"
                  color="bg-purple-100 border-purple-300"
                  className="py-3"
                />
              </div>
            </div>
          </ArchitectureDiagram>
        </div>

        <div>
          <h3 className="slide-subtitle">Key Services</h3>
          <ul className="space-y-1">
            <li className="bullet-point">
              <span className="font-medium">Membership Services:</span>{" "}
              Certificate authority, identity management
            </li>
            <li className="bullet-point">
              <span className="font-medium">Blockchain Services:</span>{" "}
              Distributed ledger, P2P protocol
            </li>
            <li className="bullet-point">
              <span className="font-medium">Consensus Services:</span> Pluggable
              consensus (Raft, Kafka)
            </li>
          </ul>

          <h3 className="slide-subtitle mt-6">Distributed Ledger</h3>
          <div className="grid grid-cols-2 gap-2">
            <DiagramBox
              title="World State"
              color="bg-indigo-100 border-indigo-300"
            >
              Current state (key-value store)
            </DiagramBox>
            <DiagramBox
              title="Blockchain"
              color="bg-indigo-100 border-indigo-300"
            >
              Transaction history
            </DiagramBox>
          </div>
        </div>

        <div>
          <h3 className="slide-subtitle">Distinctive Features</h3>
          <ul className="space-y-2">
            <li className="bullet-point">
              <span className="font-medium">Channels:</span> Private
              communications between participants
            </li>
            <li className="bullet-point">
              <span className="font-medium">Private Data Collections:</span>{" "}
              Keep sensitive data confidential
            </li>
            <li className="bullet-point">
              <span className="font-medium">Execute-Order-Validate:</span>{" "}
              Unique transaction lifecycle
            </li>
            <li className="bullet-point">
              <span className="font-medium">Chaincodes:</span> Programs deployed
              on peers
            </li>
            <li className="bullet-point">
              <span className="font-medium">Endorsement Policies:</span> Define
              validation requirements
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FabricOverviewSlide;

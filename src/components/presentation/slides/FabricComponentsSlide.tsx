import React from "react";
import { ArchitectureDiagram, DiagramBox } from "../DiagramComponents";

const FabricComponentsSlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Components of Hyperledger Fabric</h1>

      <div className="flex-1 grid grid-cols-2 gap-6">
        <div>
          <h3 className="slide-subtitle">Network Components</h3>
          <div className="space-y-2">
            <DiagramBox
              title="Peers"
              color="bg-blue-100 border-blue-300"
              className="p-3 text-left"
            >
              <p>Maintain ledger and execute chaincode. Types:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>Endorsing peers</li>
                <li>Committing peers</li>
                <li>Anchor peers</li>
              </ul>
            </DiagramBox>

            <DiagramBox
              title="Orderer Nodes"
              color="bg-green-100 border-green-300"
              className="p-3 text-left"
            >
              <p>Establish consensus on transaction order and create blocks</p>
            </DiagramBox>

            <DiagramBox
              title="Clients"
              color="bg-yellow-100 border-yellow-300"
              className="p-3 text-left"
            >
              <p>
                Submit transactions and query ledger through peer connections
              </p>
            </DiagramBox>

            <DiagramBox
              title="Channels"
              color="bg-purple-100 border-purple-300"
              className="p-3 text-left"
            >
              <p>
                Private subnets of communication between specific network
                members
              </p>
            </DiagramBox>
          </div>
        </div>

        <div>
          <h3 className="slide-subtitle">Technical Components</h3>
          <div className="space-y-2">
            <DiagramBox
              title="World State Database"
              color="bg-red-100 border-red-300"
              className="p-3 text-left"
            >
              <p>
                LevelDB or CouchDB for current state storage and rich queries
              </p>
            </DiagramBox>

            <DiagramBox
              title="Transactions"
              color="bg-orange-100 border-orange-300"
              className="p-3 text-left"
            >
              <p>Three types:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>Deploy transactions</li>
                <li>Invoke transactions</li>
                <li>Query transactions</li>
              </ul>
            </DiagramBox>

            <DiagramBox
              title="Membership Service Provider (MSP)"
              color="bg-indigo-100 border-indigo-300"
              className="p-3 text-left"
            >
              <p>
                Abstracts cryptographic mechanisms and protocols behind user
                certification
              </p>
            </DiagramBox>

            <DiagramBox
              title="Smart Contracts"
              color="bg-pink-100 border-pink-300"
              className="p-3 text-left"
            >
              <p>
                Business logic implemented as chaincode in Go, Node.js, or Java
              </p>
            </DiagramBox>
          </div>
        </div>

        <div className="col-span-2">
          <ArchitectureDiagram title="Fabric Network Structure">
            <div className="relative p-4 h-64">
              {/* Organization boundaries */}
              <div className="absolute top-0 left-0 w-1/2 h-full p-2 border border-dashed border-gray-400 rounded-lg flex flex-col z-10">
                <div className="text-sm font-medium mb-2 bg-gray-100 rounded p-1 text-center truncate">
                  Organization 1
                </div>
                <div className="grid grid-cols-2 gap-2 flex-1">
                  <DiagramBox
                    title="Peer"
                    color="bg-blue-100 border-blue-300"
                    className="h-full min-h-[40px] flex items-center justify-center text-xs text-center break-words"
                  />
                  <DiagramBox
                    title="Peer"
                    color="bg-blue-100 border-blue-300"
                    className="h-full min-h-[40px] flex items-center justify-center text-xs text-center break-words"
                  />
                  <DiagramBox
                    title="CA"
                    color="bg-green-100 border-green-300"
                    className="h-full min-h-[40px] flex items-center justify-center text-xs text-center break-words"
                  />
                  <DiagramBox
                    title="Client"
                    color="bg-yellow-100 border-yellow-300"
                    className="h-full min-h-[40px] flex items-center justify-center text-xs text-center break-words"
                  />
                  <div className="col-span-2 flex-1 flex items-center justify-center">
                    <DiagramBox
                      title="Ledger + Chaincode"
                      color="bg-purple-100 border-purple-300"
                      className="w-full h-full min-h-[40px] flex items-center justify-center text-xs text-center break-words"
                    />
                  </div>
                </div>
              </div>

              {/* Organization 2 */}
              <div className="absolute top-0 right-0 w-1/2 h-full p-2 border border-dashed border-gray-400 rounded-lg flex flex-col z-10">
                <div className="text-sm font-medium mb-2 bg-gray-100 rounded p-1 text-center truncate">
                  Organization 2
                </div>
                <div className="grid grid-cols-2 gap-2 flex-1">
                  <DiagramBox
                    title="Peer"
                    color="bg-blue-100 border-blue-300"
                    className="h-full min-h-[40px] flex items-center justify-center text-xs text-center break-words"
                  />
                  <DiagramBox
                    title="Peer"
                    color="bg-blue-100 border-blue-300"
                    className="h-full min-h-[40px] flex items-center justify-center text-xs text-center break-words"
                  />
                  <DiagramBox
                    title="CA"
                    color="bg-green-100 border-green-300"
                    className="h-full min-h-[40px] flex items-center justify-center text-xs text-center break-words"
                  />
                  <DiagramBox
                    title="Client"
                    color="bg-yellow-100 border-yellow-300"
                    className="h-full min-h-[40px] flex items-center justify-center text-xs text-center break-words"
                  />
                  <div className="col-span-2 flex-1 flex items-center justify-center">
                    <DiagramBox
                      title="Ledger + Chaincode"
                      color="bg-purple-100 border-purple-300"
                      className="w-full h-full min-h-[40px] flex items-center justify-center text-xs text-center break-words"
                    />
                  </div>
                </div>
              </div>

              {/* Orderer section at the bottom, ensure not overlapping Ledger+Chaincode */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-[60%] bg-red-50 border border-red-200 rounded-lg p-1 text-center text-xs truncate z-20 shadow-lg"
                style={{ bottom: "-1.5rem" }}
              >
                <div className="font-medium text-sm">Ordering Service</div>
              </div>

              {/* Channel visualization with padding */}
              <div
                className="absolute top-[48%] left-0 w-full border-b-2 border-blue-400 border-dashed z-0"
                style={{ paddingLeft: "12px", paddingRight: "12px" }}
              >
                <div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-100 px-3 py-1 rounded text-xs truncate shadow"
                  style={{ marginTop: "-4px" }}
                >
                  Channel
                </div>
              </div>
            </div>
          </ArchitectureDiagram>
        </div>
      </div>
    </div>
  );
};

export default FabricComponentsSlide;

import React from "react";
import {
  ArchitectureDiagram,
  DiagramBox,
  ComparisonChart,
} from "../DiagramComponents";

const FabricLedgerSlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Blockchain Services in Hyperledger Fabric</h1>

      <div className="flex-1 grid grid-cols-2 gap-6">
        <div>
          <h3 className="slide-subtitle">Consensus Services</h3>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <h4 className="font-medium mb-2">Consensus Mechanisms</h4>
            <div className="space-y-2">
              <DiagramBox
                title="SOLO"
                color="bg-yellow-100 border-yellow-300"
                className="p-2 text-left"
              >
                <p>Single orderer node - for development only</p>
              </DiagramBox>
              <DiagramBox
                title="Kafka"
                color="bg-yellow-100 border-yellow-300"
                className="p-2 text-left"
              >
                <p>CFT solution using Apache Kafka (deprecated)</p>
              </DiagramBox>
              <DiagramBox
                title="Raft (Recommended)"
                color="bg-green-100 border-green-300"
                className="p-2 text-left"
              >
                <p>CFT implementation with leader election</p>
              </DiagramBox>
              <DiagramBox
                title="PBFT"
                color="bg-yellow-100 border-yellow-300"
                className="p-2 text-left"
              >
                <p>Byzantine Fault Tolerance (in development)</p>
              </DiagramBox>
            </div>
          </div>

          <div className="p-4 bg-white border border-gray-200 rounded-lg mt-4">
            <h4 className="font-medium mb-2">Peer-to-Peer Protocol</h4>
            <div className="space-y-2">
              <div className="text-sm mb-2">
                Built using gRPC and Protocol Buffers
              </div>
              <div className="grid grid-cols-2 gap-2">
                <DiagramBox
                  title="Discovery"
                  color="bg-blue-50 border-blue-200"
                />
                <DiagramBox
                  title="Transaction"
                  color="bg-blue-50 border-blue-200"
                />
                <DiagramBox
                  title="Consensus"
                  color="bg-blue-50 border-blue-200"
                />
                <DiagramBox
                  title="Synchronization"
                  color="bg-blue-50 border-blue-200"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="slide-subtitle">Distributed Ledger</h3>
          <ComparisonChart
            title="Ledger Components"
            headers={["Blockchain", "World State"]}
            rows={[
              {
                label: "Purpose",
                values: [
                  "Immutable history of all transactions",
                  "Current state of assets (key-value pairs)",
                ],
              },
              {
                label: "Structure",
                values: [
                  "Linked blocks of transactions",
                  "Database with latest values",
                ],
              },
              {
                label: "Storage",
                values: [
                  "File-based, append-only",
                  "LevelDB (default) or CouchDB",
                ],
              },
              {
                label: "Query",
                values: [
                  "Historical transaction lookup",
                  "Key-based or rich queries (CouchDB)",
                ],
              },
            ]}
          />

          <ArchitectureDiagram title="Block Structure" className="mt-6">
            <div className="bg-white p-3 border border-gray-300 rounded-lg">
              <div className="p-2 bg-blue-50 border border-blue-200 rounded mb-2">
                <div className="font-medium">Block Header</div>
                <div className="text-sm mt-1">
                  Block number, current hash, previous hash
                </div>
              </div>

              <div className="p-2 bg-green-50 border border-green-200 rounded mb-2">
                <div className="font-medium">Block Data</div>
                <div className="text-sm mt-1">
                  Array of transactions (read/write sets)
                </div>
              </div>

              <div className="p-2 bg-yellow-50 border border-yellow-200 rounded">
                <div className="font-medium">Block Metadata</div>
                <div className="text-sm mt-1">
                  Block creator's signature, certificates, etc.
                </div>
              </div>
            </div>
          </ArchitectureDiagram>
        </div>

        <div className="col-span-2">
          <h3 className="slide-subtitle">Ledger Storage Options</h3>
          <div className="grid grid-cols-2 gap-6">
            <DiagramBox
              title="LevelDB (Default)"
              color="bg-purple-100 border-purple-300"
              className="p-4 text-left"
            >
              <ul className="list-disc pl-5 space-y-1">
                <li>Embedded key-value store</li>
                <li>Stored within the peer's filesystem</li>
                <li>Simple keys and values only</li>
                <li>High performance, low resource usage</li>
                <li>No additional installation required</li>
              </ul>
            </DiagramBox>

            <DiagramBox
              title="CouchDB (Rich Queries)"
              color="bg-purple-100 border-purple-300"
              className="p-4 text-left"
            >
              <ul className="list-disc pl-5 space-y-1">
                <li>JSON document store</li>
                <li>Runs as a separate database process</li>
                <li>Supports complex queries on JSON data</li>
                <li>Chaincode data must be valid JSON</li>
                <li>Requires separate installation and setup</li>
                <li>Enables advanced data operations</li>
              </ul>
            </DiagramBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricLedgerSlide;

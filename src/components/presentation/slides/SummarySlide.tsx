import React from "react";
import { ComparisonChart, DiagramBox } from "../DiagramComponents";

const SummarySlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Summary</h1>

      <div className="flex-1 flex flex-col">
        <div className="mb-6">
          <h3 className="slide-subtitle">Key Takeaways</h3>
          <div className="grid grid-cols-3 gap-4">
            <DiagramBox
              title="Modular Architecture"
              color="bg-blue-100 border-blue-300"
              className="p-3 text-left"
            >
              Hyperledger frameworks offer pluggable components for customized
              blockchain solutions
            </DiagramBox>

            <DiagramBox
              title="Enterprise Focus"
              color="bg-green-100 border-green-300"
              className="p-3 text-left"
            >
              Privacy, performance, and permissions are prioritized for business
              applications
            </DiagramBox>

            <DiagramBox
              title="Open Ecosystem"
              color="bg-yellow-100 border-yellow-300"
              className="p-3 text-left"
            >
              Community-driven development with Linux Foundation governance
            </DiagramBox>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="slide-subtitle">Comparative Analysis</h3>
          <ComparisonChart
            title="Fabric vs Sawtooth vs Corda"
            headers={["Fabric", "Sawtooth", "Corda"]}
            rows={[
              {
                label: "Consensus",
                values: [
                  "Pluggable (Raft, Kafka)",
                  "Pluggable (PoET, PBFT)",
                  "Notary-based validity",
                ],
              },
              {
                label: "Privacy Model",
                values: [
                  "Channels, Private data",
                  "Transaction families",
                  "Point-to-point communication",
                ],
              },
              {
                label: "Smart Contract",
                values: [
                  "Chaincode (Go, Node.js, Java)",
                  "Transaction Processors (multiple languages)",
                  "CorDapps (Kotlin, Java)",
                ],
              },
              {
                label: "Data Structure",
                values: [
                  "Key-value store + blockchain",
                  "Global state (Merkle-Radix tree)",
                  "States and transactions",
                ],
              },
              {
                label: "Use Cases",
                values: [
                  "Supply chain, finance, healthcare",
                  "IoT, manufacturing, provenance",
                  "Financial services, legal contracts",
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SummarySlide;

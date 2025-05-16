import React from "react";
import { ComparisonChart, DiagramBox } from "../DiagramComponents";
import { Database, Lock, Shield, Zap } from "lucide-react";

const FrameworksSlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Distributed Ledger Frameworks</h1>

      <div className="text-center mb-4">
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 text-blue-800">
          <Database className="h-4 w-4 mr-2" />
          <span>Consensus-driven, decentralized data storage</span>
        </div>
      </div>

      <div className="flex-1">
        <ComparisonChart
          title="Hyperledger Frameworks Comparison"
          headers={["Framework", "Consensus", "Key Features"]}
          rows={[
            {
              label: "Fabric",
              values: [
                <div key="fabric" className="flex items-center">
                  <Lock className="h-4 w-4 mr-1 text-blue-600" />
                  <span>Pluggable (Raft, Kafka)</span>
                </div>,
                <div key="fabric-features">
                  <span className="font-medium">IBM-backed</span> modular
                  architecture with private channels
                </div>,
                <div key="fabric-cases">
                  Supply chain, financial services, healthcare
                </div>,
              ],
            },
            {
              label: "Sawtooth",
              values: [
                <div key="sawtooth" className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-green-600" />
                  <span>PoET, PBFT</span>
                </div>,
                <div key="sawtooth-features">
                  <span className="font-medium">Intel-backed</span> with
                  transaction families
                </div>,
                <div key="sawtooth-cases">
                  Manufacturing, IoT, provenance tracking
                </div>,
              ],
            },
            {
              label: "Iroha",
              values: [
                <div key="iroha" className="flex items-center">
                  <Zap className="h-4 w-4 mr-1 text-purple-600" />
                  <span>Sumeragi (BFT)</span>
                </div>,
                <div key="iroha-features">
                  <span className="font-medium">Mobile-optimized</span> with
                  simple API
                </div>,
                <div key="iroha-cases">
                  Mobile applications, digital assets, identity
                </div>,
              ],
            },
            {
              label: "Indy",
              values: [
                <div key="indy" className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-red-600" />
                  <span>RBFT</span>
                </div>,
                <div key="indy-features">
                  <span className="font-medium">Self-sovereign identity</span>{" "}
                  focused
                </div>,
                <div key="indy-cases">
                  Digital ID, KYC, credential management
                </div>,
              ],
            },
            {
              label: "Besu",
              values: [
                <div key="besu" className="flex items-center">
                  <Lock className="h-4 w-4 mr-1 text-yellow-600" />
                  <span>PoW, PoA, IBFT</span>
                </div>,
                <div key="besu-features">
                  <span className="font-medium">Ethereum-compatible</span>{" "}
                  (Java)
                </div>,
                <div key="besu-cases">
                  Public/private Ethereum networks, DeFi
                </div>,
              ],
            },
            {
              label: "Burrow",
              values: [
                <div key="burrow" className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-indigo-600" />
                  <span>Tendermint BFT</span>
                </div>,
                <div key="burrow-features">
                  <span className="font-medium">EVM + BFT consensus</span>{" "}
                  (Monax)
                </div>,
                <div key="burrow-cases">
                  Smart contracts, permissioned Ethereum
                </div>,
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FrameworksSlide;

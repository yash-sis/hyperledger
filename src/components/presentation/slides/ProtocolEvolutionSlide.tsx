import React from "react";
import { Timeline } from "../DiagramComponents";

const ProtocolEvolutionSlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">
        From Platforms to Protocol: Hyperledger's Evolution
      </h1>

      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-sm mb-8">
        <p className="text-xl text-center mb-6">
          Hyperledger is evolving from a collection of platforms to becoming a
          <span className="font-semibold"> standardized protocol</span> for
          business blockchains
        </p>
      </div>

      <Timeline
        title="Evolution Timeline"
        items={[
          {
            step: "Initial Goal (2015)",
            content: (
              <div>
                <p>
                  Provide open-source distributed ledger frameworks for
                  enterprise use
                </p>
                <div className="mt-2 flex justify-center">
                  <div className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-sm mx-1">
                    Platform Collection
                  </div>
                </div>
              </div>
            ),
          },
          {
            step: "Community Contributions",
            content: (
              <div>
                <p>
                  Organizations and developers contribute various blockchain
                  solutions
                </p>
                <div className="mt-2 flex justify-center flex-wrap">
                  <div className="px-3 py-1 bg-green-100 rounded-full text-green-800 text-sm m-1">
                    Fabric
                  </div>
                  <div className="px-3 py-1 bg-green-100 rounded-full text-green-800 text-sm m-1">
                    Sawtooth
                  </div>
                  <div className="px-3 py-1 bg-green-100 rounded-full text-green-800 text-sm m-1">
                    Iroha
                  </div>
                  <div className="px-3 py-1 bg-green-100 rounded-full text-green-800 text-sm m-1">
                    Indy
                  </div>
                </div>
              </div>
            ),
          },
          {
            step: "Standardization Efforts",
            content: (
              <div>
                <p>
                  Identifying common patterns and best practices across projects
                </p>
                <div className="mt-2 flex justify-center">
                  <div className="px-3 py-1 bg-yellow-100 rounded-full text-yellow-800 text-sm mx-1">
                    Reference Architecture
                  </div>
                </div>
              </div>
            ),
          },
          {
            step: "Evolution into Protocol",
            content: (
              <div>
                <p>
                  Moving beyond implementations to define standards and
                  specifications
                </p>
                <div className="mt-2 flex justify-center flex-wrap">
                  <div className="px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm m-1">
                    Industry-Neutral
                  </div>
                  <div className="px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm m-1">
                    Modular
                  </div>
                  <div className="px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm m-1">
                    Interoperable
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />

      <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-medium text-center mb-2">
          Unlike earlier blockchain solutions, Hyperledger aims to be:
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-2 bg-white rounded shadow-sm">
            <div className="font-medium">Industry-Neutral</div>
            <div className="text-sm text-gray-600">Not limited to finance</div>
          </div>
          <div className="text-center p-2 bg-white rounded shadow-sm">
            <div className="font-medium">Modular</div>
            <div className="text-sm text-gray-600">
              Mix and match components
            </div>
          </div>
          <div className="text-center p-2 bg-white rounded shadow-sm">
            <div className="font-medium">Interoperable</div>
            <div className="text-sm text-gray-600">
              Cross-chain connectivity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolEvolutionSlide;

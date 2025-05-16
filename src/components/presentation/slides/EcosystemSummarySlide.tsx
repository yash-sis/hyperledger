import React from "react";
import { DiagramBox } from "../DiagramComponents";

const EcosystemSummarySlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Summary of Hyperledger Ecosystem</h1>

      <div className="flex-1 flex items-center justify-center">
        <div className="ecosystem-tree max-w-4xl w-full">
          {/* Root Node */}
          <div className="tree-root">
            <DiagramBox
              title="Hyperledger"
              color="bg-blue-100 border-blue-300"
              className="mx-auto w-64 py-3"
            >
              <div className="text-sm">
                Modular, collaborative blockchain ecosystem
              </div>
            </DiagramBox>

            <div className="tree-trunk h-12 border-l-2 border-dashed border-gray-400 mx-auto my-2 w-0"></div>

            {/* Main Branches */}
            <div className="grid grid-cols-4 gap-4">
              {/* Ledgers */}
              <div className="tree-branch flex flex-col items-center">
                <DiagramBox
                  title="Ledgers"
                  color="bg-green-100 border-green-300"
                  className="w-full mb-2"
                >
                  Blockchain frameworks
                </DiagramBox>
                <div className="tree-items space-y-1 w-full">
                  <div className="px-2 py-1 bg-green-50 text-xs text-center rounded border border-green-200">
                    Fabric
                  </div>
                  <div className="px-2 py-1 bg-green-50 text-xs text-center rounded border border-green-200">
                    Sawtooth
                  </div>
                  <div className="px-2 py-1 bg-green-50 text-xs text-center rounded border border-green-200">
                    Iroha
                  </div>
                  <div className="px-2 py-1 bg-green-50 text-xs text-center rounded border border-green-200">
                    Besu
                  </div>
                </div>
              </div>

              {/* Libraries */}
              <div className="tree-branch flex flex-col items-center">
                <DiagramBox
                  title="Libraries"
                  color="bg-yellow-100 border-yellow-300"
                  className="w-full mb-2"
                >
                  Shared components
                </DiagramBox>
                <div className="tree-items space-y-1 w-full">
                  <div className="px-2 py-1 bg-yellow-50 text-xs text-center rounded border border-yellow-200">
                    Aries
                  </div>
                  <div className="px-2 py-1 bg-yellow-50 text-xs text-center rounded border border-yellow-200">
                    Ursa
                  </div>
                  <div className="px-2 py-1 bg-yellow-50 text-xs text-center rounded border border-yellow-200">
                    Transact
                  </div>
                  <div className="px-2 py-1 bg-yellow-50 text-xs text-center rounded border border-yellow-200">
                    Quilt
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="tree-branch flex flex-col items-center">
                <DiagramBox
                  title="Tools"
                  color="bg-purple-100 border-purple-300"
                  className="w-full mb-2"
                >
                  Development support
                </DiagramBox>
                <div className="tree-items space-y-1 w-full">
                  <div className="px-2 py-1 bg-purple-50 text-xs text-center rounded border border-purple-200">
                    Caliper
                  </div>
                  <div className="px-2 py-1 bg-purple-50 text-xs text-center rounded border border-purple-200">
                    Cello
                  </div>
                  <div className="px-2 py-1 bg-purple-50 text-xs text-center rounded border border-purple-200">
                    Explorer
                  </div>
                  <div className="px-2 py-1 bg-purple-50 text-xs text-center rounded border border-purple-200">
                    Avalon
                  </div>
                </div>
              </div>

              {/* Domain */}
              <div className="tree-branch flex flex-col items-center">
                <DiagramBox
                  title="Domain"
                  color="bg-red-100 border-red-300"
                  className="w-full mb-2"
                >
                  Industry solutions
                </DiagramBox>
                <div className="tree-items space-y-1 w-full">
                  <div className="px-2 py-1 bg-red-50 text-xs text-center rounded border border-red-200">
                    Grid
                  </div>
                  <div className="px-2 py-1 bg-red-50 text-xs text-center rounded border border-red-200">
                    Labs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
          <h3 className="font-medium text-lg mb-2 text-center">
            Key Ecosystem Benefits
          </h3>
          <ul className="grid grid-cols-3 gap-3">
            <li className="text-sm bg-white p-2 rounded border border-blue-100 text-center">
              Interoperability
            </li>
            <li className="text-sm bg-white p-2 rounded border border-blue-100 text-center">
              Privacy-preserving
            </li>
            <li className="text-sm bg-white p-2 rounded border border-blue-100 text-center">
              Modular Design
            </li>
            <li className="text-sm bg-white p-2 rounded border border-blue-100 text-center">
              Scalable Architecture
            </li>
            <li className="text-sm bg-white p-2 rounded border border-blue-100 text-center">
              Enterprise-grade
            </li>
            <li className="text-sm bg-white p-2 rounded border border-blue-100 text-center">
              Open Governance
            </li>
          </ul>

          <div className="mt-3 text-center">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-green-100 rounded-full text-sm font-medium">
              <span>What's next?</span>
              <span className="ml-2 text-blue-600">
                → Adoption & Innovation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemSummarySlide;

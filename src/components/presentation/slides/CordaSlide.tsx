import React from "react";
import {
  ArchitectureDiagram,
  FlowChart,
  DiagramBox,
  ComparisonChart,
} from "../DiagramComponents";

const CordaSlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Hyperledger Corda</h1>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1 md:col-span-2">
          <h3 className="slide-subtitle">What is Corda?</h3>
          <div className="diagram-container p-4">
            <ul className="space-y-2">
              <li className="bullet-point">
                Developed by R3 for regulated industries
              </li>
              <li className="bullet-point">
                Permissioned DLT platform focusing on privacy and security
              </li>
              <li className="bullet-point">
                No global broadcast: data shared only on a need-to-know basis
              </li>
              <li className="bullet-point">
                Designed specifically for financial and legal transactions
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="slide-subtitle">Core Components</h3>
          <div className="space-y-2">
            <DiagramBox
              title="State"
              color="bg-blue-100 border-blue-300"
              className="p-2 text-left"
            >
              <p>Immutable objects representing shared facts</p>
            </DiagramBox>

            <DiagramBox
              title="Contract"
              color="bg-green-100 border-green-300"
              className="p-2 text-left"
            >
              <p>Code that governs state transitions</p>
            </DiagramBox>

            <DiagramBox
              title="Transaction"
              color="bg-yellow-100 border-yellow-300"
              className="p-2 text-left"
            >
              <p>Proposal to update shared facts</p>
            </DiagramBox>

            <DiagramBox
              title="Flow"
              color="bg-indigo-100 border-indigo-300"
              className="p-2 text-left"
            >
              <p>Automated peer communication process</p>
            </DiagramBox>

            <DiagramBox
              title="Vault"
              color="bg-purple-100 border-purple-300"
              className="p-2 text-left"
            >
              <p>Database of current states</p>
            </DiagramBox>
          </div>
        </div>

        <div>
          <h3 className="slide-subtitle">System Architecture</h3>
          <ArchitectureDiagram title="Corda Architecture">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-blue-50 p-2 rounded-lg">
                <div className="text-center font-medium mb-2">Node A</div>
                <div className="space-y-2">
                  <DiagramBox
                    title="CorDapps"
                    color="bg-blue-100 border-blue-300"
                  />
                  <DiagramBox
                    title="Flows"
                    color="bg-blue-100 border-blue-300"
                  />
                  <DiagramBox
                    title="Vault"
                    color="bg-blue-100 border-blue-300"
                  />
                </div>
              </div>

              <div className="bg-yellow-50 p-2 rounded-lg">
                <div className="text-center font-medium mb-2">Node B</div>
                <div className="space-y-2">
                  <DiagramBox
                    title="CorDapps"
                    color="bg-yellow-100 border-yellow-300"
                  />
                  <DiagramBox
                    title="Flows"
                    color="bg-yellow-100 border-yellow-300"
                  />
                  <DiagramBox
                    title="Vault"
                    color="bg-yellow-100 border-yellow-300"
                  />
                </div>
              </div>

              <div className="bg-green-50 p-2 rounded-lg">
                <div className="text-center font-medium mb-2">Node C</div>
                <div className="space-y-2">
                  <DiagramBox
                    title="CorDapps"
                    color="bg-green-100 border-green-300"
                  />
                  <DiagramBox
                    title="Flows"
                    color="bg-green-100 border-green-300"
                  />
                  <DiagramBox
                    title="Vault"
                    color="bg-green-100 border-green-300"
                  />
                </div>
              </div>

              <div className="col-span-3 grid grid-cols-3 gap-3 mt-2">
                <DiagramBox
                  title="Network Map Service"
                  color="bg-red-100 border-red-300"
                />
                <DiagramBox
                  title="Doorman"
                  color="bg-purple-100 border-purple-300"
                />
                <DiagramBox
                  title="Notary Service"
                  color="bg-orange-100 border-orange-300"
                />
              </div>
            </div>
          </ArchitectureDiagram>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h3 className="slide-subtitle">Development Model</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="diagram-container">
              <h4 className="font-medium mb-2">CorDapps</h4>
              <p>Corda Distributed Applications</p>
              <p className="mt-2">Written in Kotlin/Java</p>
            </div>

            <div className="diagram-container">
              <h4 className="font-medium mb-2">Key Modules</h4>
              <ul className="list-disc pl-5">
                <li>Contracts</li>
                <li>Workflows (Flows)</li>
                <li>Schemas (Persistence)</li>
                <li>Services</li>
              </ul>
            </div>

            <div className="diagram-container">
              <h4 className="font-medium mb-2">Development Tools</h4>
              <ul className="list-disc pl-5">
                <li>IntelliJ IDEA</li>
                <li>Gradle</li>
                <li>Corda Dev Network</li>
                <li>Node Explorer</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="slide-subtitle">Key Features</h3>
          <div className="diagram-container p-4">
            <ul className="space-y-2">
              <li className="bullet-point">Privacy-first: No global ledger</li>
              <li className="bullet-point">
                Legal prose support (ties code to legal agreements)
              </li>
              <li className="bullet-point">Pluggable consensus and notaries</li>
              <li className="bullet-point">
                Enterprise-friendly: scalable, secure, modular
              </li>
              <li className="bullet-point">
                Compatibility with existing systems
              </li>
            </ul>
          </div>

          <h3 className="slide-subtitle mt-4">Identity & Privacy</h3>
          <div className="diagram-container p-4">
            <ul className="space-y-2">
              <li className="bullet-point">
                X.500 naming for real-world legal identities
              </li>
              <li className="bullet-point">
                Identity certificates issued by Doorman
              </li>
              <li className="bullet-point">
                Support for confidential identities
              </li>
              <li className="bullet-point">
                Data shared only with transacting parties
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="slide-subtitle">Consensus Model</h3>
          <div className="diagram-container p-4">
            <h4 className="font-medium mb-2">Two-Step Process:</h4>
            <div className="space-y-3">
              <DiagramBox
                title="1. Validity"
                color="bg-blue-100 border-blue-300"
                className="p-2 text-left"
              >
                <p>Transaction contract rules and signatures</p>
              </DiagramBox>

              <DiagramBox
                title="2. Uniqueness"
                color="bg-green-100 border-green-300"
                className="p-2 text-left"
              >
                <p>Handled by notary service</p>
              </DiagramBox>
            </div>

            <h4 className="font-medium mt-4 mb-2">Types of Notaries:</h4>
            <div className="space-y-2">
              <div className="bullet-point">
                Validating: Reviews transaction content
              </div>
              <div className="bullet-point">
                Non-validating: Checks for double-spending only
              </div>
              <div className="bullet-point">
                Clustered: Multiple nodes for fault tolerance
              </div>
            </div>
          </div>

          <h3 className="slide-subtitle mt-4">Use Cases</h3>
          <div className="space-y-2">
            <DiagramBox
              title="Finance"
              color="bg-blue-100 border-blue-300"
              className="p-2 text-left"
            >
              <p>Syndicated lending, bond issuance</p>
            </DiagramBox>

            <DiagramBox
              title="Trade Finance"
              color="bg-yellow-100 border-yellow-300"
              className="p-2 text-left"
            >
              <p>Reduce paperwork, increase trust</p>
            </DiagramBox>

            <DiagramBox
              title="Supply Chain"
              color="bg-green-100 border-green-300"
              className="p-2 text-left"
            >
              <p>Transparent and secure tracking</p>
            </DiagramBox>

            <DiagramBox
              title="Insurance"
              color="bg-purple-100 border-purple-300"
              className="p-2 text-left"
            >
              <p>Claims automation, risk assessment</p>
            </DiagramBox>

            <DiagramBox
              title="Healthcare"
              color="bg-red-100 border-red-300"
              className="p-2 text-left"
            >
              <p>Secure patient data exchange</p>
            </DiagramBox>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h3 className="slide-subtitle">Benefits & Drawbacks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="diagram-container p-4">
              <h4 className="font-medium mb-2 text-green-700">Benefits</h4>
              <ul className="space-y-2">
                <li className="bullet-point">Selective data sharing</li>
                <li className="bullet-point">Enterprise-grade privacy</li>
                <li className="bullet-point">Legal contract integration</li>
                <li className="bullet-point">
                  High performance and scalability
                </li>
                <li className="bullet-point">Direct transaction finality</li>
              </ul>
            </div>

            <div className="diagram-container p-4">
              <h4 className="font-medium mb-2 text-amber-700">Limitations</h4>
              <ul className="space-y-2">
                <li className="bullet-point">
                  Not suited for public blockchain needs
                </li>
                <li className="bullet-point">Smaller developer ecosystem</li>
                <li className="bullet-point">
                  Learning curve for Kotlin + DLT concepts
                </li>
                <li className="bullet-point">
                  Less suitable for non-financial use cases
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CordaSlide;

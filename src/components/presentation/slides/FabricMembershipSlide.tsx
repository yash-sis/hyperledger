import React from "react";
import {
  ArchitectureDiagram,
  DiagramBox,
  ComparisonChart,
} from "../DiagramComponents";

const FabricMembershipSlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Membership Services in Hyperledger Fabric</h1>

      <div className="flex-1 grid grid-cols-2 gap-6">
        <div>
          <h3 className="slide-subtitle">Certificate Authority</h3>
          <div className="space-y-2">
            <DiagramBox
              title="Fabric CA"
              color="bg-green-100 border-green-300"
              className="p-3 text-left"
            >
              <p>Built-in CA for development and testing</p>
            </DiagramBox>

            <DiagramBox
              title="External CA"
              color="bg-green-100 border-green-300"
              className="p-3 text-left"
            >
              <p>Production environments typically use external CAs</p>
            </DiagramBox>

            <div className="p-4 bg-white border border-gray-200 rounded-lg mt-4">
              <h4 className="font-medium">Certificate Types</h4>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <DiagramBox title="ECerts" color="bg-blue-50 border-blue-200">
                  Enrollment certificates
                </DiagramBox>
                <DiagramBox title="TCerts" color="bg-blue-50 border-blue-200">
                  Transaction certificates
                </DiagramBox>
              </div>
            </div>
          </div>

          <ArchitectureDiagram title="MSP Workflow" className="mt-6">
            <div className="grid grid-cols-3 gap-2 p-2">
              <DiagramBox
                title="User/Peer"
                color="bg-yellow-100 border-yellow-300"
              />
              <div className="flex items-center justify-center">
                <div className="w-full border-t-2 border-dashed border-gray-400"></div>
              </div>
              <DiagramBox title="CA" color="bg-green-100 border-green-300" />
              <div className="col-span-3 text-center text-xs text-gray-500 my-1">
                Certificate Issuance
              </div>
              <div className="col-span-3">
                <DiagramBox
                  title="MSP"
                  color="bg-blue-100 border-blue-300"
                  className="p-3"
                >
                  <p>Validates and authenticates transaction signatures</p>
                </DiagramBox>
              </div>
              <div className="col-span-3 text-center text-xs text-gray-500 my-1">
                Identity Verification
              </div>
              <DiagramBox
                title="Channel"
                color="bg-purple-100 border-purple-300"
                className="col-span-3"
              />
            </div>
          </ArchitectureDiagram>
        </div>

        <div>
          <h3 className="slide-subtitle">Membership Service Provider (MSP)</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <h4 className="font-medium mb-2">MSP Responsibilities</h4>
              <ul className="space-y-2">
                <li className="bullet-point">Identity validation</li>
                <li className="bullet-point">
                  Signature generation and verification
                </li>
                <li className="bullet-point">User credential management</li>
                <li className="bullet-point">
                  Authentication for all blockchain operations
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <h4 className="font-medium mb-2">MSP Types</h4>
              <div className="space-y-2">
                <DiagramBox
                  title="Local MSP"
                  color="bg-indigo-100 border-indigo-300"
                  className="p-2 text-left"
                >
                  Defines the permissions of nodes (peers, orderers)
                </DiagramBox>
                <DiagramBox
                  title="Channel MSP"
                  color="bg-indigo-100 border-indigo-300"
                  className="p-2 text-left"
                >
                  Defines members and roles on a channel level
                </DiagramBox>
              </div>
            </div>

            <ComparisonChart
              title="Public vs Private Blockchain Networks"
              headers={["Public", "Private (Fabric)"]}
              rows={[
                {
                  label: "Access",
                  values: ["Anyone can join", "Permissioned membership"],
                },
                {
                  label: "Identity",
                  values: [
                    "Anonymous/pseudonymous",
                    "Known identities via certificates",
                  ],
                },
                {
                  label: "Consensus",
                  values: [
                    "Computationally intensive (PoW)",
                    "Pluggable, energy-efficient",
                  ],
                },
                {
                  label: "Privacy",
                  values: [
                    "All data visible to all nodes",
                    "Channels for data isolation",
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricMembershipSlide;

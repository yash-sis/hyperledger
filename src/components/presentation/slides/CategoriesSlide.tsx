import React, { useState } from "react";
import { DiagramBox } from "../DiagramComponents";
import { Database, ShieldIcon, Code, Grid2X2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const CategoriesSlide: React.FC = () => {
  const [modalCategory, setModalCategory] = useState<string | null>(null);

  const openModal = (category: string) => setModalCategory(category);
  const closeModal = () => setModalCategory(null);

  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Categories of Hyperledger Projects</h1>
      <div className="grid grid-cols-2 gap-6">
        <div
          className="category-card cursor-pointer"
          onClick={() => openModal("frameworks")}
        >
          {/* Frameworks */}
          <div className="category-header">
            <Database className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold">
              Distributed Ledger Frameworks
            </h3>
          </div>
          <p className="text-gray-600">
            Complete blockchain systems with consensus and smart contract
            support
          </p>
        </div>
        <div
          className="category-card cursor-pointer"
          onClick={() => openModal("libraries")}
        >
          {/* Libraries */}
          <div className="category-header">
            <Code className="h-6 w-6 text-green-600" />
            <h3 className="text-xl font-semibold">Libraries</h3>
          </div>
          <p className="text-gray-600">
            Reusable components for cross-platform blockchain functionality
          </p>
        </div>
        <div
          className="category-card cursor-pointer"
          onClick={() => openModal("tools")}
        >
          {/* Tools */}
          <div className="category-header">
            <Grid2X2 className="h-6 w-6 text-purple-600" />
            <h3 className="text-xl font-semibold">Developer Tools</h3>
          </div>
          <p className="text-gray-600">
            Tools for building, deploying, and monitoring blockchain networks
          </p>
        </div>
        <div
          className="category-card cursor-pointer"
          onClick={() => openModal("domain")}
        >
          {/* Domain */}
          <div className="category-header">
            <ShieldIcon className="h-6 w-6 text-orange-600" />
            <h3 className="text-xl font-semibold">Domain-Specific Solutions</h3>
          </div>
          <p className="text-gray-600">
            Industry-focused blockchain applications and toolkits
          </p>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        Click on each category to see details
      </div>

      {/* Modal for category details */}
      <Dialog open={!!modalCategory} onOpenChange={closeModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {modalCategory === "frameworks" &&
                "Distributed Ledger Frameworks"}
              {modalCategory === "libraries" && "Libraries"}
              {modalCategory === "tools" && "Developer Tools"}
              {modalCategory === "domain" && "Domain-Specific Solutions"}
            </DialogTitle>
            <DialogDescription>
              {modalCategory === "frameworks" && (
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <DiagramBox title="Fabric" color="bg-blue-50 border-blue-200">
                    Modular architecture with pluggable consensus
                  </DiagramBox>
                  <DiagramBox
                    title="Sawtooth"
                    color="bg-blue-50 border-blue-200"
                  >
                    PoET consensus, transaction families
                  </DiagramBox>
                  <DiagramBox title="Iroha" color="bg-blue-50 border-blue-200">
                    Mobile-friendly, Sumeragi consensus
                  </DiagramBox>
                  <DiagramBox title="Indy" color="bg-blue-50 border-blue-200">
                    Identity-focused blockchain
                  </DiagramBox>
                  <DiagramBox title="Besu" color="bg-blue-50 border-blue-200">
                    Ethereum-compatible (EVM)
                  </DiagramBox>
                  <DiagramBox title="Burrow" color="bg-blue-50 border-blue-200">
                    Smart contracts with BFT consensus
                  </DiagramBox>
                </div>
              )}
              {modalCategory === "libraries" && (
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <DiagramBox
                    title="Aries"
                    color="bg-green-50 border-green-200"
                  >
                    Decentralized identity infrastructure
                  </DiagramBox>
                  <DiagramBox
                    title="Transact"
                    color="bg-green-50 border-green-200"
                  >
                    Smart contract execution engine
                  </DiagramBox>
                  <DiagramBox title="Ursa" color="bg-green-50 border-green-200">
                    Cryptographic library
                  </DiagramBox>
                  <DiagramBox
                    title="Quilt"
                    color="bg-green-50 border-green-200"
                  >
                    Interledger Protocol (ILP) implementation
                  </DiagramBox>
                </div>
              )}
              {modalCategory === "tools" && (
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <DiagramBox
                    title="Caliper"
                    color="bg-purple-50 border-purple-200"
                  >
                    Performance benchmarking
                  </DiagramBox>
                  <DiagramBox
                    title="Cello"
                    color="bg-purple-50 border-purple-200"
                  >
                    Blockchain-as-a-Service deployment
                  </DiagramBox>
                  <DiagramBox
                    title="Explorer"
                    color="bg-purple-50 border-purple-200"
                  >
                    Block and transaction viewer
                  </DiagramBox>
                  <DiagramBox
                    title="Avalon"
                    color="bg-purple-50 border-purple-200"
                  >
                    Trusted computation framework
                  </DiagramBox>
                </div>
              )}
              {modalCategory === "domain" && (
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <DiagramBox
                    title="Grid"
                    color="bg-orange-50 border-orange-200"
                  >
                    Supply chain framework and components
                  </DiagramBox>
                  <DiagramBox
                    title="Firefly"
                    color="bg-orange-50 border-orange-200"
                  >
                    Multi-party systems and tokenization
                  </DiagramBox>
                </div>
              )}
              {modalCategory === "domain" && (
                <p className="mt-2 text-sm text-gray-600">
                  Plus incubating projects in: Healthcare, Finance,
                  Manufacturing
                </p>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoriesSlide;

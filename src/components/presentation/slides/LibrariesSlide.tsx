import React from "react";
import { DiagramBox } from "../DiagramComponents";
import { ShieldIcon, ZapIcon, Link, Globe } from "lucide-react";

const LibrariesSlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Supporting Libraries</h1>

      <p className="text-center text-lg mb-6">
        Libraries offer shared services across distributed ledger technology
        projects
      </p>

      <div className="libraries-scroll-container">
        <div className="libraries-scroll">
          <div className="library-card">
            <div className="card-icon bg-blue-100">
              <Globe className="h-6 w-6 text-blue-700" />
            </div>
            <div className="card-content">
              <h3 className="font-semibold text-lg">Aries</h3>
              <p className="text-gray-600 mb-2">
                Decentralized identity infrastructure
              </p>
              <ul className="text-sm text-gray-700">
                <li className="bullet-point">Secure messaging framework</li>
                <li className="bullet-point">Credential exchange protocols</li>
                <li className="bullet-point">Agent connections</li>
              </ul>
            </div>
          </div>

          <div className="library-card">
            <div className="card-icon bg-green-100">
              <Link className="h-6 w-6 text-green-700" />
            </div>
            <div className="card-content">
              <h3 className="font-semibold text-lg">Transact</h3>
              <p className="text-gray-600 mb-2">
                Smart contract engine abstraction
              </p>
              <ul className="text-sm text-gray-700">
                <li className="bullet-point">Cross-platform execution</li>
                <li className="bullet-point">Transaction processing</li>
                <li className="bullet-point">State management</li>
              </ul>
            </div>
          </div>

          <div className="library-card">
            <div className="card-icon bg-purple-100">
              <Globe className="h-6 w-6 text-purple-700" />
            </div>
            <div className="card-content">
              <h3 className="font-semibold text-lg">Quilt</h3>
              <p className="text-gray-600 mb-2">
                Interledger protocol implementation
              </p>
              <ul className="text-sm text-gray-700">
                <li className="bullet-point">Cross-chain payments</li>
                <li className="bullet-point">ILP connector</li>
                <li className="bullet-point">Settlement adapters</li>
              </ul>
            </div>
          </div>

          <div className="library-card">
            <div className="card-icon bg-red-100">
              <ShieldIcon className="h-6 w-6 text-red-700" />
            </div>
            <div className="card-content">
              <h3 className="font-semibold text-lg">Ursa</h3>
              <p className="text-gray-600 mb-2">Cryptographic toolkit</p>
              <ul className="text-sm text-gray-700">
                <li className="bullet-point">Zero knowledge proofs</li>
                <li className="bullet-point">Signature schemes</li>
                <li className="bullet-point">Key management</li>
              </ul>
            </div>
          </div>

          <div className="library-card">
            <div className="card-icon bg-yellow-100">
              <ZapIcon className="h-6 w-6 text-yellow-700" />
            </div>
            <div className="card-content">
              <h3 className="font-semibold text-lg">Cactus</h3>
              <p className="text-gray-600 mb-2">
                Blockchain integration framework
              </p>
              <ul className="text-sm text-gray-700">
                <li className="bullet-point">Cross-ledger transactions</li>
                <li className="bullet-point">Plugin architecture</li>
                <li className="bullet-point">Protocol adaptors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-100 p-4 rounded-lg border border-gray-200">
        <h3 className="font-medium mb-2">Common Library Benefits:</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-2 bg-white rounded shadow-sm">
            <div className="font-medium mb-1">Reusability</div>
            <div className="text-sm text-gray-600">
              Shared code across frameworks
            </div>
          </div>
          <div className="text-center p-2 bg-white rounded shadow-sm">
            <div className="font-medium mb-1">Specialization</div>
            <div className="text-sm text-gray-600">
              Focused on single concern
            </div>
          </div>
          <div className="text-center p-2 bg-white rounded shadow-sm">
            <div className="font-medium mb-1">Standardization</div>
            <div className="text-sm text-gray-600">
              Common APIs and interfaces
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrariesSlide;

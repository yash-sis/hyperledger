
import React from 'react';
import { DiagramBox } from '../DiagramComponents';
import { Key, Handshake, Link, Package, Code } from 'lucide-react';

const LibrariesSlide: React.FC = () => {
  return (
    <div className="slide-content">
      <h1 className="slide-title">Supporting Libraries</h1>
      
      <div className="text-center mb-6">
        <p className="text-lg">Libraries offer shared services across DLT projects</p>
      </div>
      
      <div className="libraries-scroll-container">
        <div className="libraries-scroll">
          {/* Aries Card */}
          <div className="library-card">
            <div className="card-icon bg-blue-100">
              <Handshake className="h-8 w-8 text-blue-600" />
            </div>
            <div className="card-content">
              <h3 className="text-xl font-medium">Aries</h3>
              <p className="text-gray-600 mb-2">Decentralized identity messaging</p>
              <div className="text-sm text-gray-500">
                Toolkit for managing secure peer-to-peer interactions
              </div>
            </div>
          </div>
          
          {/* Transact Card */}
          <div className="library-card">
            <div className="card-icon bg-green-100">
              <Code className="h-8 w-8 text-green-600" />
            </div>
            <div className="card-content">
              <h3 className="text-xl font-medium">Transact</h3>
              <p className="text-gray-600 mb-2">Smart contract engine abstraction</p>
              <div className="text-sm text-gray-500">
                Execution platform for multiple ledger types
              </div>
            </div>
          </div>
          
          {/* Quilt Card */}
          <div className="library-card">
            <div className="card-icon bg-yellow-100">
              <Link className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="card-content">
              <h3 className="text-xl font-medium">Quilt</h3>
              <p className="text-gray-600 mb-2">Interledger protocol (ILP) for payments</p>
              <div className="text-sm text-gray-500">
                Payments across distributed ledgers
              </div>
            </div>
          </div>
          
          {/* Ursa Card */}
          <div className="library-card">
            <div className="card-icon bg-purple-100">
              <Key className="h-8 w-8 text-purple-600" />
            </div>
            <div className="card-content">
              <h3 className="text-xl font-medium">Ursa</h3>
              <p className="text-gray-600 mb-2">Cryptographic toolkit with ZKP support</p>
              <div className="text-sm text-gray-500">
                Secure, shared crypto implementation
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 max-w-xl">
          <h4 className="font-medium mb-2">Benefits of Shared Libraries</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li className="flex items-center">
              <Package className="h-4 w-4 mr-2 text-blue-500" />
              <span>Code reusability</span>
            </li>
            <li className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-green-500" />
              <span>Enhanced security</span>
            </li>
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2 text-yellow-500" />
              <span>Development efficiency</span>
            </li>
            <li className="flex items-center">
              <Link className="h-4 w-4 mr-2 text-purple-500" />
              <span>Cross-project interoperability</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LibrariesSlide;

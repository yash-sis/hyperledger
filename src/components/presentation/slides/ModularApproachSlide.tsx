
import React from 'react';
import { DiagramBox } from '../DiagramComponents';

const ModularApproachSlide: React.FC = () => {
  return (
    <div className="slide-content">
      <h1 className="slide-title">Modular Architecture & Design Goals</h1>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="slide-subtitle">The Modular Approach</h3>
          <div className="diagram-container p-4">
            <p className="mb-4 text-center">Every major component is pluggable:</p>
            <div className="grid grid-cols-2 gap-3">
              <DiagramBox title="Pluggable Consensus" color="bg-blue-50 border-blue-200">
                PBFT, Raft, PoET, Solo
              </DiagramBox>
              <DiagramBox title="Flexible Smart Contracts" color="bg-green-50 border-green-200">
                Go, JavaScript, Java
              </DiagramBox>
              <DiagramBox title="Configurable Privacy" color="bg-red-50 border-red-200">
                Channels, Private Data
              </DiagramBox>
              <DiagramBox title="Modular Identity" color="bg-yellow-50 border-yellow-200">
                X.509, OpenID, LDAP
              </DiagramBox>
            </div>
          </div>
          
          <h3 className="slide-subtitle mt-4">Privacy & Confidentiality</h3>
          <div className="diagram-container p-4">
            <div className="flex flex-col space-y-2">
              <DiagramBox title="Permissioned Access Control" color="bg-purple-50 border-purple-200" />
              <DiagramBox title="Private Channels" color="bg-purple-50 border-purple-200" />
              <DiagramBox title="Zero-Knowledge Proofs" color="bg-purple-50 border-purple-200" />
              <DiagramBox title="Hardware Security Modules" color="bg-purple-50 border-purple-200" />
            </div>
            <div className="mt-3 p-2 bg-gray-50 rounded text-sm text-center">
              Privacy level depends on business needs, from minimal to maximum cryptography
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="slide-subtitle">Identity Management</h3>
          <div className="diagram-container p-4">
            <div className="flex flex-col space-y-3">
              <DiagramBox title="Flexible PKI Model" color="bg-indigo-50 border-indigo-200">
                <div className="text-sm">Standard X.509 certificates</div>
              </DiagramBox>
              <DiagramBox title="Membership Service Provider" color="bg-indigo-50 border-indigo-200">
                <div className="text-sm">Issue & validate credentials</div>
              </DiagramBox>
              <DiagramBox title="Access Control Policies" color="bg-indigo-50 border-indigo-200">
                <div className="text-sm">Role-based permissions</div>
              </DiagramBox>
            </div>
          </div>
          
          <h3 className="slide-subtitle mt-4">Other Design Goals</h3>
          <div className="diagram-container p-4">
            <div className="grid grid-cols-2 gap-2">
              <DiagramBox title="Deterministic Transactions" color="bg-blue-50 border-blue-200">
                <div className="text-xs">Same input → same output</div>
              </DiagramBox>
              <DiagramBox title="Scalability" color="bg-green-50 border-green-200">
                <div className="text-xs">High throughput systems</div>
              </DiagramBox>
              <DiagramBox title="Auditability" color="bg-yellow-50 border-yellow-200">
                <div className="text-xs">Immutable transaction history</div>
              </DiagramBox>
              <DiagramBox title="Interoperability" color="bg-red-50 border-red-200">
                <div className="text-xs">Cross-chain communication</div>
              </DiagramBox>
              <DiagramBox title="Portability" color="bg-purple-50 border-purple-200">
                <div className="text-xs">Run anywhere</div>
              </DiagramBox>
              <DiagramBox title="Rich Data Queries" color="bg-indigo-50 border-indigo-200">
                <div className="text-xs">SQL-like capabilities</div>
              </DiagramBox>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-medium text-center mb-2">Summary: A Complete Blockchain Framework</h3>
            <p className="text-sm text-center">
              Hyperledger is not just a product, but a reference model and vision for 
              enterprise-ready, interoperable blockchains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModularApproachSlide;

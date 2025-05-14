
import React from 'react';
import { ComparisonChart, DiagramBox } from '../DiagramComponents';

const ChaincodeSlide: React.FC = () => {
  return (
    <div className="slide-content">
      <h1 className="slide-title">Chaincode vs. Smart Contracts</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <ComparisonChart
            title="Chaincode vs Smart Contracts"
            headers={["Chaincode", "Smart Contracts"]}
            rows={[
              {
                label: "Definition",
                values: [
                  "Deployable package containing business logic",
                  "Business logic that updates the ledger"
                ]
              },
              {
                label: "Structure",
                values: [
                  "Container with one or more smart contracts",
                  "Individual functions and methods"
                ]
              },
              {
                label: "Deployment",
                values: [
                  "Deployed to network as a unit",
                  "Always part of a chaincode package"
                ]
              },
              {
                label: "Languages",
                values: [
                  "Go, JavaScript (Node.js), Java",
                  "Any language supported by chaincode"
                ]
              },
              {
                label: "Execution",
                values: [
                  "Runs in secure container on peers",
                  "Executed via chaincode interface"
                ]
              }
            ]}
          />
        </div>
        
        <div className="text-center mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-lg font-medium">
            "All smart contracts are in chaincode, but not all chaincode is a single smart contract"
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="slide-subtitle">Chaincode Environment</h3>
            <div className="diagram-container p-4">
              <div className="space-y-3">
                <DiagramBox title="Secure Container" color="bg-blue-50 border-blue-200">
                  <div className="text-sm">Isolated execution environment</div>
                </DiagramBox>
                <DiagramBox title="Chaincode Shim" color="bg-blue-50 border-blue-200">
                  <div className="text-sm">API to interact with ledger</div>
                </DiagramBox>
                <DiagramBox title="State Management" color="bg-blue-50 border-blue-200">
                  <div className="text-sm">Put/Get operations for ledger data</div>
                </DiagramBox>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="slide-subtitle">Smart Contract Structure</h3>
            <div className="diagram-container p-4">
              <div className="space-y-2">
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <div className="font-medium mb-2">Basic Interface</div>
                  <div className="bg-gray-50 p-2 rounded font-mono text-sm">
                    <div>Init(stub) → success/error</div>
                    <div>Invoke(stub) → success/error</div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <div className="font-medium mb-2">Common Operations</div>
                  <ul className="text-sm space-y-1">
                    <li>• Read/write ledger state</li>
                    <li>• Invoke other chaincode</li>
                    <li>• Emit events</li>
                    <li>• Access transaction context</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg">
          <h3 className="font-medium text-center mb-2">Example Chaincode Structure (Go)</h3>
          <div className="bg-gray-50 p-3 rounded font-mono text-xs">
            <pre>
{`package main

import (
  "fmt"
  "github.com/hyperledger/fabric/core/chaincode/shim"
  pb "github.com/hyperledger/fabric/protos/peer"
)

type AssetChaincode struct {}

func (cc *AssetChaincode) Init(stub shim.ChaincodeStubInterface) pb.Response {
  // Initialization logic
  return shim.Success(nil)
}

func (cc *AssetChaincode) Invoke(stub shim.ChaincodeStubInterface) pb.Response {
  // Smart contract logic
  return shim.Success(nil)
}

func main() {
  if err := shim.Start(new(AssetChaincode)); err != nil {
    fmt.Printf("Error starting chaincode: %s", err)
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChaincodeSlide;

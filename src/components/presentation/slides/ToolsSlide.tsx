import React from "react";
import { DiagramBox } from "../DiagramComponents";
import { Zap, Server, Search, Shield } from "lucide-react";

const ToolsSlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Development Tools</h1>

      <div className="text-center mb-6">
        <p className="text-lg">
          Tools help developers build, deploy, and monitor DLT networks
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 flex-1">
        {/* Caliper */}
        <div className="toolkit-item border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="toolkit-header bg-blue-50 p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium ml-3">Caliper</h3>
            </div>
            <div className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
              Benchmarking
            </div>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Performance testing (TPS, latency)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Standardized metrics across platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Customizable workload modules</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cello */}
        <div className="toolkit-item border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="toolkit-header bg-green-50 p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Server className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium ml-3">Cello</h3>
            </div>
            <div className="text-sm font-medium px-2 py-1 bg-green-100 text-green-800 rounded-full">
              Deployment
            </div>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Blockchain-as-a-Service (BaaS) platform</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>On-demand network provisioning</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Resource management dashboard</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Explorer */}
        <div className="toolkit-item border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="toolkit-header bg-purple-50 p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Search className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-medium ml-3">Explorer</h3>
            </div>
            <div className="text-sm font-medium px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
              Visualization
            </div>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Web UI for blockchain network monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Block, transaction, and network statistics</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Real-time monitoring dashboard</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Avalon */}
        <div className="toolkit-item border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="toolkit-header bg-yellow-50 p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-medium ml-3">Avalon</h3>
            </div>
            <div className="text-sm font-medium px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
              Computation
            </div>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Off-chain trusted computation framework</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Trusted Execution Environments (TEEs)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Privacy-preserving computation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSlide;

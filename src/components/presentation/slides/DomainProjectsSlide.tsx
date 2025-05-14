
import React from 'react';
import { DiagramBox } from '../DiagramComponents';
import { Package, Server } from 'lucide-react';

const DomainProjectsSlide: React.FC = () => {
  return (
    <div className="slide-content">
      <h1 className="slide-title">Domain-Specific Projects</h1>
      
      <div className="text-center mb-6">
        <p className="text-lg">These projects serve specific industries or applications</p>
      </div>
      
      <div className="grid grid-cols-2 gap-6 h-[calc(100%-120px)]">
        {/* Grid */}
        <div className="h-full flex flex-col">
          <div className="domain-header bg-blue-50 p-3 rounded-t-lg border border-blue-200 flex items-center">
            <Package className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-medium">Grid</h3>
            <span className="ml-auto text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Production/Enterprise</span>
          </div>
          <div className="flex-1 bg-blue-50/30 p-6 border border-blue-200 border-t-0 rounded-b-lg">
            <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border border-blue-100">
              <h4 className="font-medium text-lg mb-2">Supply Chain Platform</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Industry-specific data models and standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Track-and-trace capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>GS1 standards integration</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
              <h4 className="font-medium mb-2">Feature Highlights</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-blue-50 p-2 rounded">Product Registry</div>
                <div className="bg-blue-50 p-2 rounded">Location Tracking</div>
                <div className="bg-blue-50 p-2 rounded">Certification</div>
                <div className="bg-blue-50 p-2 rounded">RFID Integration</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Labs */}
        <div className="h-full flex flex-col">
          <div className="domain-header bg-purple-50 p-3 rounded-t-lg border border-purple-200 flex items-center">
            <Server className="h-6 w-6 text-purple-600 mr-2" />
            <h3 className="text-xl font-medium">Labs</h3>
            <span className="ml-auto text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Sandbox/Prototype</span>
          </div>
          <div className="flex-1 bg-purple-50/30 p-6 border border-purple-200 border-t-0 rounded-b-lg">
            <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border border-purple-100">
              <h4 className="font-medium text-lg mb-2">Experimental Projects</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Incubation space for new blockchain concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Research and development environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Testing ground for cutting-edge ideas</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
              <h4 className="font-medium mb-2">Project Examples</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-purple-50 p-2 rounded flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                  <span>Blockchain AI Integration</span>
                </div>
                <div className="bg-purple-50 p-2 rounded flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                  <span>Cross-chain Interoperability</span>
                </div>
                <div className="bg-purple-50 p-2 rounded flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                  <span>Zero-knowledge Applications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainProjectsSlide;


import React, { useState } from 'react';
import { DiagramBox } from '../DiagramComponents';
import { Database, Library, Tool, Grid } from 'lucide-react';

const CategoriesSlide: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };
  
  return (
    <div className="slide-content">
      <h1 className="slide-title">Categories of Hyperledger Projects</h1>
      
      <div className="grid grid-cols-2 gap-6 flex-1">
        {/* Distributed Ledger Frameworks */}
        <div 
          className={`category-card ${expandedCategory === 'frameworks' ? 'expanded' : ''}`}
          onClick={() => toggleCategory('frameworks')}
        >
          <div className="category-header">
            <Database className="h-8 w-8 text-blue-500" />
            <h3 className="text-xl font-medium">Distributed Ledger Frameworks</h3>
          </div>
          
          {expandedCategory === 'frameworks' && (
            <div className="category-content">
              <p className="mb-3 text-gray-600">Core blockchain platforms for decentralized applications</p>
              <ul className="space-y-1 text-sm">
                <li>• Fabric, Sawtooth, Iroha</li>
                <li>• Indy, Besu, Burrow</li>
                <li>• Consensus mechanisms & smart contracts</li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Libraries */}
        <div 
          className={`category-card ${expandedCategory === 'libraries' ? 'expanded' : ''}`}
          onClick={() => toggleCategory('libraries')}
        >
          <div className="category-header">
            <Library className="h-8 w-8 text-green-500" />
            <h3 className="text-xl font-medium">Libraries</h3>
          </div>
          
          {expandedCategory === 'libraries' && (
            <div className="category-content">
              <p className="mb-3 text-gray-600">Shared services across DLT projects</p>
              <ul className="space-y-1 text-sm">
                <li>• Aries, Transact</li>
                <li>• Quilt, Ursa</li>
                <li>• Reusable components for blockchain systems</li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Developer Tools */}
        <div 
          className={`category-card ${expandedCategory === 'tools' ? 'expanded' : ''}`}
          onClick={() => toggleCategory('tools')}
        >
          <div className="category-header">
            <Tool className="h-8 w-8 text-purple-500" />
            <h3 className="text-xl font-medium">Developer Tools</h3>
          </div>
          
          {expandedCategory === 'tools' && (
            <div className="category-content">
              <p className="mb-3 text-gray-600">Tools to build, test, and deploy DLT networks</p>
              <ul className="space-y-1 text-sm">
                <li>• Caliper, Cello</li>
                <li>• Explorer, Avalon</li>
                <li>• Testing, deployment, monitoring solutions</li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Domain-Specific Solutions */}
        <div 
          className={`category-card ${expandedCategory === 'domain' ? 'expanded' : ''}`}
          onClick={() => toggleCategory('domain')}
        >
          <div className="category-header">
            <Grid className="h-8 w-8 text-orange-500" />
            <h3 className="text-xl font-medium">Domain-Specific Solutions</h3>
          </div>
          
          {expandedCategory === 'domain' && (
            <div className="category-content">
              <p className="mb-3 text-gray-600">Industry-focused applications and frameworks</p>
              <ul className="space-y-1 text-sm">
                <li>• Grid (supply chain)</li>
                <li>• Labs (experimental projects)</li>
                <li>• Industry-specific solutions</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 mt-3">
        Click on a category to learn more
      </div>
    </div>
  );
};

export default CategoriesSlide;

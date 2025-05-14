
import React from 'react';
import { cn } from '@/lib/utils';

// Architecture Diagram Component
export const ArchitectureDiagram: React.FC<{
  title: string;
  className?: string;
  children: React.ReactNode;
}> = ({ title, className, children }) => {
  return (
    <div className={cn("diagram-container architecture-diagram", className)}>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="p-2">{children}</div>
    </div>
  );
};

// Flow Chart Component
export const FlowChart: React.FC<{
  title: string;
  className?: string;
  children: React.ReactNode;
}> = ({ title, className, children }) => {
  return (
    <div className={cn("diagram-container flowchart", className)}>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="p-2">{children}</div>
    </div>
  );
};

// Comparison Chart Component
export const ComparisonChart: React.FC<{
  title: string;
  headers: string[];
  rows: { label: string; values: React.ReactNode[] }[];
}> = ({ title, headers, rows }) => {
  return (
    <div className="diagram-container comparison-chart">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left border border-gray-200"></th>
              {headers.map((header, index) => (
                <th key={index} className="p-2 text-left border border-gray-200 font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-2 border border-gray-200 font-medium">{row.label}</td>
                {row.values.map((value, cellIndex) => (
                  <td key={cellIndex} className="p-2 border border-gray-200">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Timeline Component
export const Timeline: React.FC<{
  title: string;
  items: { step: string; content: React.ReactNode }[];
}> = ({ title, items }) => {
  return (
    <div className="diagram-container">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="timeline">
        {items.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-node">{index + 1}</div>
            <div className="timeline-content">
              <div className="font-medium mb-1">{item.step}</div>
              <div>{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Box component for architecture diagrams
export const DiagramBox: React.FC<{
  title: string;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}> = ({ title, color = 'bg-blue-100 border-blue-300', className, children }) => {
  return (
    <div className={cn(`${color} border rounded-lg p-2 text-center`, className)}>
      <div className="font-medium">{title}</div>
      {children && <div className="mt-1 text-sm">{children}</div>}
    </div>
  );
};

import React from "react";
import { Timeline } from "../DiagramComponents";
import { Globe, Users, ArrowRight, Check, Pause, X } from "lucide-react";

const LifecycleSlide: React.FC = () => {
  return (
    <div className="slide-content h-full w-full overflow-y-auto">
      <h1 className="slide-title">Project Lifecycle and Community</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="slide-subtitle">Project Lifecycle</h3>
          <div className="relative mt-6">
            <div className="lifecycle-timeline">
              {/* Proposal Stage */}
              <div className="timeline-stage">
                <div className="stage-node bg-blue-100 border-blue-300">
                  <div className="node-icon">
                    <ArrowRight className="h-5 w-5 text-blue-700" />
                  </div>
                </div>
                <div className="stage-content">
                  <h4 className="font-medium text-lg">Proposal</h4>
                  <p className="text-sm text-gray-600">
                    Project idea submission
                  </p>
                </div>
              </div>

              {/* Incubation Stage */}
              <div className="timeline-stage">
                <div className="stage-node bg-yellow-100 border-yellow-300">
                  <div className="node-icon">
                    <Pause className="h-5 w-5 text-yellow-700" />
                  </div>
                </div>
                <div className="stage-content">
                  <h4 className="font-medium text-lg">Incubation</h4>
                  <p className="text-sm text-gray-600">
                    Working code + community participation
                  </p>
                </div>
              </div>

              {/* Active Stage */}
              <div className="timeline-stage">
                <div className="stage-node bg-green-100 border-green-300">
                  <div className="node-icon">
                    <Check className="h-5 w-5 text-green-700" />
                  </div>
                </div>
                <div className="stage-content">
                  <h4 className="font-medium text-lg">Active</h4>
                  <p className="text-sm text-gray-600">
                    Stable project meeting release criteria
                  </p>
                </div>
              </div>

              {/* Deprecated Stage */}
              <div className="timeline-stage">
                <div className="stage-node bg-red-100 border-red-300">
                  <div className="node-icon">
                    <X className="h-5 w-5 text-red-700" />
                  </div>
                </div>
                <div className="stage-content">
                  <h4 className="font-medium text-lg">Deprecated</h4>
                  <p className="text-sm text-gray-600">
                    Project no longer maintained
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="slide-subtitle">Community & Governance</h3>

          <div className="space-y-4">
            <div className="community-stat flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Users className="h-12 w-12 text-blue-500 mr-4" />
              <div>
                <div className="text-2xl font-bold">300+</div>
                <div className="text-sm text-gray-600">
                  Organizations Contributing
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  IBM, Intel, Accenture, and more
                </div>
              </div>
            </div>

            <div className="community-stat flex items-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <Globe className="h-12 w-12 text-purple-500 mr-4" />
              <div>
                <div className="text-lg font-medium">Global Collaboration</div>
                <div className="text-sm text-gray-600">
                  Worldwide meetups & events
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <h4 className="font-medium mb-1">Open Governance Model</h4>
              <ul className="text-sm space-y-1 list-disc pl-4">
                <li>Technical Steering Committee</li>
                <li>Transparent decision making</li>
                <li>Active maintainer community</li>
                <li>Open contribution process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifecycleSlide;

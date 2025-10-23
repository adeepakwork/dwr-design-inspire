'use client';

import { Bot, BarChart3, Zap, Users, ClipboardList } from 'lucide-react';
import DashboardMockup from '@/components/DashboardMockup';

export default function ManagementConsole() {
  const features = [
    { icon: Bot, text: "Manage agents, data sources, and tools" },
    { icon: BarChart3, text: "Track usage, cost, and performance in real-time" },
    { icon: Zap, text: "One-click updates and deployments" },
    { icon: Users, text: "Define roles and granular permissions" },
    { icon: ClipboardList, text: "View comprehensive audit logs" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center lg:text-left">
          <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">MANAGEMENT CONSOLE</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Everything You Need in One Dashboard
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Dashboard Preview - Mockup */}
          <DashboardMockup />

          {/* Feature List */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    <IconComponent className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-700">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
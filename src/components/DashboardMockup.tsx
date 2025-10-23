'use client';

export default function DashboardMockup() {
  return (
    <div className="order-2 lg:order-1 bg-gray-100 p-4 md:p-6 lg:p-8 rounded">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Dashboard Header */}
        <div className="bg-gray-900 px-3 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs md:text-sm text-gray-400 font-mono hidden sm:block">Core Mind Dashboard</span>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-3 md:p-4 lg:p-6">
          <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4 mb-4 md:mb-6">
            <div className="bg-gray-50 p-2 md:p-3 lg:p-4 rounded">
              <div className="text-xs text-gray-500 mb-1">Active Agents</div>
              <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">24</div>
            </div>
            <div className="bg-gray-50 p-2 md:p-3 lg:p-4 rounded">
              <div className="text-xs text-gray-500 mb-1">API Calls</div>
              <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">1.2M</div>
            </div>
            <div className="bg-gray-50 p-2 md:p-3 lg:p-4 rounded">
              <div className="text-xs text-gray-500 mb-1">Uptime</div>
              <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">99.9%</div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded p-2 md:p-3 lg:p-4 flex items-end gap-1 md:gap-2 h-24 md:h-28 lg:h-32">
            <div className="bg-gray-900 w-full h-8 md:h-10 lg:h-12 rounded-t"></div>
            <div className="bg-gray-900 w-full h-12 md:h-16 lg:h-20 rounded-t"></div>
            <div className="bg-gray-900 w-full h-10 md:h-12 lg:h-16 rounded-t"></div>
            <div className="bg-gray-900 w-full h-14 md:h-18 lg:h-24 rounded-t"></div>
            <div className="bg-gray-900 w-full h-16 md:h-20 lg:h-28 rounded-t"></div>
            <div className="bg-gray-900 w-full h-12 md:h-16 lg:h-20 rounded-t"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import NeuralNetwork from '@/components/NeuralNetwork';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20 relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <NeuralNetwork />
      </div>
      
      {/* Gradient Overlay - Subtle and clean */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8 uppercase tracking-wide">
          HOME / <span className="text-purple-600 font-semibold">PRODUCTS / CORE MIND</span>
        </div>

        {/* Product Name */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">Core Mind</h2>
          <p className="text-sm text-purple-600 uppercase tracking-wider mt-1 font-semibold">AI Backbone Platform</p>
        </div>

        {/* Main Heading */}
        <div className="max-w-5xl mb-12 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-0">
            The AI platform that empowers businesses to innovate, automate, and scale with confidence.
          </h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mb-12 md:mb-20">
          <div className="text-center sm:text-left">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">ACTIVE USERS</div>
            <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4">50K+</div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Growing community of developers and enterprises building with Core Mind AI platform.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">UPTIME</div>
            <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4">99.9%</div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Enterprise-grade reliability with minimal downtime for mission-critical AI applications.
            </p>
          </div>
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">AI MODELS</div>
            <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4">25+</div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Support for all major AI models from OpenAI, Anthropic, Google, and open-source options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
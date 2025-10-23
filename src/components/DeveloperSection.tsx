'use client';
import { memo, useState, useRef, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Bot, Zap, Network, MessageSquare } from 'lucide-react';

const DEVELOPER_FEATURES = [
  {
    icon: Bot,
    title: "Agent Creation",
    description: "Define intelligent agents easily with our intuitive builder."
  },
  {
    icon: Zap,
    title: "Simple Integrations",
    description: "Add AI with just a few lines of code using our SDK."
  },
  {
    icon: Network,
    title: "MCP Connections",
    description: "Link data sources and APIs with Model Context Protocol."
  },
  {
    icon: MessageSquare,
    title: "Conversation Management",
    description: "Securely manage multi-turn interactions and context."
  }
];

const MobileDeveloperCarousel = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DEVELOPER_FEATURES.length);
    }, 2500);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsAutoPlaying(false);
    stopAutoPlay();
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % DEVELOPER_FEATURES.length);
    setTimeout(() => setIsTransitioning(false), 300);
    // Restart auto-play after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
      startAutoPlay();
    }, 5000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsAutoPlaying(false);
    stopAutoPlay();
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + DEVELOPER_FEATURES.length) % DEVELOPER_FEATURES.length);
    setTimeout(() => setIsTransitioning(false), 300);
    // Restart auto-play after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
      startAutoPlay();
    }, 5000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    // Pause auto-play on touch
    setIsAutoPlaying(false);
    stopAutoPlay();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    } else {
      // Resume auto-play if no swipe occurred
      setTimeout(() => {
        setIsAutoPlaying(true);
        startAutoPlay();
      }, 5000);
    }
  };

  // Auto-play effect
  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isAutoPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    return () => stopAutoPlay();
  }, []);

  return (
    <div className="lg:hidden">
      {/* Carousel Container */}
      <div 
        className="overflow-hidden rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          setIsAutoPlaying(false);
          stopAutoPlay();
        }}
        onMouseLeave={() => {
          setIsAutoPlaying(true);
          startAutoPlay();
        }}
      >
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {DEVELOPER_FEATURES.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:bg-gray-700 hover:border-purple-500/30 transition-all duration-300 h-full">
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-white">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-6 px-4">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="p-3 rounded-full bg-gray-800 shadow-lg border border-gray-600 hover:bg-gray-700 disabled:opacity-50 transition-colors"
          aria-label="Previous developer feature"
        >
          <ChevronLeft className="w-5 h-5 text-gray-300" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {DEVELOPER_FEATURES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsAutoPlaying(false);
                  stopAutoPlay();
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 300);
                  // Restart auto-play after 5 seconds of inactivity
                  setTimeout(() => {
                    setIsAutoPlaying(true);
                    startAutoPlay();
                  }, 5000);
                }
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-purple-400' : 'bg-gray-600'
              }`}
              aria-label={`Go to developer feature ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="p-3 rounded-full bg-gray-800 shadow-lg border border-gray-600 hover:bg-gray-700 disabled:opacity-50 transition-colors"
          aria-label="Next developer feature"
        >
          <ChevronRight className="w-5 h-5 text-gray-300" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 px-4">
        <div className="w-full bg-gray-700 rounded-full h-1">
          <div 
            className="bg-purple-400 h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / DEVELOPER_FEATURES.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Counter and Auto-play Indicator */}
      <div className="text-center mt-4 flex items-center justify-center gap-3">
        <span className="text-sm text-gray-400">
          {currentIndex + 1} of {DEVELOPER_FEATURES.length}
        </span>
        <div className="flex items-center gap-1">
          <div className={`w-2 h-2 rounded-full transition-colors ${
            isAutoPlaying ? 'bg-green-400' : 'bg-gray-500'
          }`} />
        </div>
      </div>
    </div>
  );
});

MobileDeveloperCarousel.displayName = 'MobileDeveloperCarousel';

export const DeveloperSection = memo(() => {
  // Memoize the code snippet to prevent recreation on every render
  const codeSnippet = useMemo(() => `import { CoreMind } from '@core-mind/sdk';

const agent = await CoreMind.createAgent({
  name: 'Customer Support Agent',
  model: 'gpt-4',
  tools: ['zendesk', 'slack', 'knowledge-base'],
  permissions: ['read', 'respond']
});

await agent.deploy();`, []);

  return (
    <section id="developers" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-purple-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <div className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">FOR DEVELOPERS</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build Smart Apps Without the AI Ops
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Core Mind handles orchestration so you can focus on innovation.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-16">
          {DEVELOPER_FEATURES.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 p-6 hover:bg-gray-700 hover:border-purple-500/30 transition-all duration-300 border border-transparent rounded-lg"
              >
                <div className="mb-4">
                  <IconComponent className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold mb-2 text-white">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="mb-16">
          <MobileDeveloperCarousel />
        </div>

        {/* Code Snippet Preview */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800">
            <div className="flex items-center gap-2 px-3 md:px-4 py-3 bg-gray-950 border-b border-gray-800">
              <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 md:ml-4 text-gray-500 text-xs md:text-sm font-mono">app.ts</span>
            </div>
            <div className="p-4 md:p-8 overflow-x-auto">
              <pre className="text-green-400 text-xs leading-relaxed font-mono whitespace-pre-wrap">
                {codeSnippet}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

DeveloperSection.displayName = 'DeveloperSection';
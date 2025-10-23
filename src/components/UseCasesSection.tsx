'use client';
import { memo, useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Search, Code, Headphones, Cog, PieChart } from 'lucide-react';

const USE_CASES = [
  {
    icon: Users,
    title: "AI-Powered Teams",
    description: "Automatically summarize meetings, extract action items, and assign tasks to team members."
  },
  {
    icon: Search,
    title: "Data Intelligence Assistants",
    description: "Enable natural language search across databases and documents for instant insights."
  },
  {
    icon: Code,
    title: "Developer Copilots",
    description: "Embed context-aware AI copilots directly into your applications and workflows."
  },
  {
    icon: Headphones,
    title: "Customer Support Agents",
    description: "Deploy intelligent chatbots that understand context and resolve issues faster."
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Automate complex business workflows with intelligent decision-making capabilities."
  },
  {
    icon: PieChart,
    title: "Analytics & Reporting",
    description: "Generate insights and reports from unstructured data automatically."
  }
];

const MobileUseCaseCarousel = memo(() => {
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
      setCurrentIndex((prev) => (prev + 1) % USE_CASES.length);
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
    setCurrentIndex((prev) => (prev + 1) % USE_CASES.length);
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
    setCurrentIndex((prev) => (prev - 1 + USE_CASES.length) % USE_CASES.length);
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
    <div className="md:hidden">
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
          {USE_CASES.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
                  <div className="mb-4">
                    <IconComponent className="w-10 h-10 text-purple-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
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
          className="p-3 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 disabled:opacity-50 transition-colors"
          aria-label="Previous use case"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {USE_CASES.map((_, index) => (
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
                index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to use case ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="p-3 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 disabled:opacity-50 transition-colors"
          aria-label="Next use case"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 px-4">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div 
            className="bg-purple-600 h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / USE_CASES.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Counter and Auto-play Indicator */}
      <div className="text-center mt-4 flex items-center justify-center gap-3">
        <span className="text-sm text-gray-500">
          {currentIndex + 1} of {USE_CASES.length}
        </span>
        <div className="flex items-center gap-1">
          <div className={`w-2 h-2 rounded-full transition-colors ${
            isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'
          }`} />
        </div>
      </div>
    </div>
  );
});

MobileUseCaseCarousel.displayName = 'MobileUseCaseCarousel';

export const UseCasesSection = memo(() => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">USE CASES</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Endless Possibilities
          </h2>
          <p className="text-gray-600 text-lg">See how Core Mind transforms different workflows</p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {USE_CASES.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 hover:shadow-md hover:border-purple-100 transition-all duration-300 border border-transparent rounded-lg"
              >
                <div className="mb-4">
                  <IconComponent className="w-10 h-10 text-purple-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <MobileUseCaseCarousel />
      </div>
    </section>
  );
});

UseCasesSection.displayName = 'UseCasesSection';
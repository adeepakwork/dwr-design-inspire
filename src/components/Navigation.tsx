'use client';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  return (
    <nav className={`border-b border-gray-200 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-gray-900">digital</span>
              <span className="text-purple-600">400</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-gray-700 hover:text-purple-600 text-sm font-medium uppercase tracking-wide transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600 text-sm font-medium uppercase tracking-wide transition-colors">Projects</a>
            <a href="#services" className="text-gray-700 hover:text-purple-600 text-sm font-medium uppercase tracking-wide transition-colors">Services</a>
            <a href="#blog" className="text-gray-700 hover:text-purple-600 text-sm font-medium uppercase tracking-wide transition-colors">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 text-sm font-medium uppercase tracking-wide transition-colors">Contact</a>
            <button className="px-6 py-2.5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors text-sm font-medium uppercase tracking-wide">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
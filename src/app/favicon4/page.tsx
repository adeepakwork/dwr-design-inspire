'use client';

import { useEffect } from 'react';

export default function Favicon4Page() {
  useEffect(() => {
    // Remove all existing favicon links
    const existingLinks = document.querySelectorAll("link[rel*='icon']");
    existingLinks.forEach(link => link.remove());
    
    // Force clear cache and add new favicon with timestamp
    const timestamp = new Date().getTime();
    const link = document.createElement('link') as HTMLLinkElement;
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = `/4.ico?v=${timestamp}`;
    document.head.appendChild(link);
    
    // Also add as icon rel
    const link2 = document.createElement('link') as HTMLLinkElement;
    link2.type = 'image/x-icon';
    link2.rel = 'icon';
    link2.href = `/4.ico?v=${timestamp}`;
    document.head.appendChild(link2);
    
    // Update title
    document.title = 'Favicon Test 4 - 4.ico';
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="text-2xl font-bold text-orange-600 mb-4">Favicon Test 4</div>
        <div className="text-gray-600 mb-8">Testing: <strong>4.ico</strong></div>
        
        <div className="space-y-4">
          <a href="/favicon1" className="block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            Test 1 (digital400.ico)
          </a>
          <a href="/favicon2" className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Test 2 (400.ico)
          </a>
          <a href="/favicon3" className="block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Test 3 (digital400-d.ico)
          </a>
          <button 
            onClick={() => window.location.reload()}
            className="block w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
          >
            🔄 Refresh
          </button>
          <a href="/" className="block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
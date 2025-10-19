'use client';

import { useEffect } from 'react';
import { Metadata } from 'next';

export default function Favicon1Page() {
  useEffect(() => {
    // Remove existing favicon
    const existingLink = document.querySelector("link[rel*='icon']");
    if (existingLink) {
      existingLink.remove();
    }
    
    // Add new favicon
    const link = document.createElement('link') as HTMLLinkElement;
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/digital400.ico';
    document.head.appendChild(link);
    
    // Update title
    document.title = 'Favicon Test 1 - digital400.ico';
  }, []);

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="text-2xl font-bold text-purple-600 mb-4">Favicon Test 1</div>
        <div className="text-gray-600 mb-8">Testing: <strong>digital400.ico</strong></div>
        
        <div className="space-y-4">
          <a href="/favicon2" className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Test 2 (400.ico)
          </a>
          <a href="/favicon3" className="block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Test 3 (digital400-d.ico)
          </a>
          <a href="/favicon4" className="block px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
            Test 4 (4.ico)
          </a>
          <a href="/" className="block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

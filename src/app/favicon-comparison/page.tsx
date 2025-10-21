'use client';

import { useState } from 'react';

export default function FaviconComparison() {
  const [selectedFavicon, setSelectedFavicon] = useState<string>('');

  const favicons = [
    {
      name: 'digital400.ico',
      path: '/digital400.ico',
      description: 'Full company name favicon',
      color: 'purple',
      testUrl: '/favicon1'
    },
    {
      name: '400.ico',
      path: '/400.ico',
      description: 'Short number-only favicon',
      color: 'blue',
      testUrl: '/favicon2'
    },
    {
      name: 'favicon.ico',
      path: '/favicon.ico',
      description: 'Default Next.js favicon',
      color: 'green',
      testUrl: '/favicon3'
    }
  ];

  const changeFavicon = (faviconPath: string, faviconName: string) => {
    // Remove existing favicon
    const existingLink = document.querySelector("link[rel*='icon']");
    if (existingLink) {
      existingLink.remove();
    }
    
    // Add new favicon
    const link = document.createElement('link') as HTMLLinkElement;
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = faviconPath;
    document.head.appendChild(link);
    
    setSelectedFavicon(faviconName);
    document.title = `Favicon Comparison - ${faviconName}`;
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 py-12">
        <div className="max-w-4xl mx-auto p-8">
          <div className="text-center mb-12">
            <div className="text-4xl font-bold mb-4">
              <span className="text-gray-900">digital</span>
              <span className="text-orange-600">400</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Favicon Comparison Tool</h1>
            <p className="text-gray-600 text-lg">
              Test and compare different favicons in real-time. Click on any favicon below to see it in your browser tab.
            </p>
            {selectedFavicon && (
              <div className="mt-4 p-4 bg-orange-100 rounded-lg">
                <p className="text-orange-800 font-medium">
                  Currently showing: <strong>{selectedFavicon}</strong>
                </p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {favicons.map((favicon, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${favicon.color}-100 rounded-lg flex items-center justify-center`}>
                    <div className={`w-8 h-8 bg-${favicon.color}-600 rounded`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{favicon.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{favicon.description}</p>
                  
                  <div className="space-y-3">
                    <button
                      onClick={() => changeFavicon(favicon.path, favicon.name)}
                      className={`w-full px-4 py-2 bg-${favicon.color}-600 text-white rounded-lg hover:bg-${favicon.color}-700 transition-colors`}
                    >
                      Test This Favicon
                    </button>
                    <a 
                      href={favicon.testUrl}
                      className={`block w-full px-4 py-2 border-2 border-${favicon.color}-600 text-${favicon.color}-600 rounded-lg hover:bg-${favicon.color}-50 transition-colors text-center`}
                    >
                      Dedicated Test Page
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Test Favicons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Tests</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    Look at the browser tab icon
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    Bookmark the page and check icon
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    Test on different screen resolutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    Check icon clarity at small sizes
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Tests</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    Test on Chrome, Firefox, Safari
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    Check mobile browsers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    Test dark/light browser themes
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    Verify loading speed and caching
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="/" 
              className="inline-block px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold pr-8 text-gray-900">{faq.question}</span>
                <span className={`text-xl text-purple-600 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
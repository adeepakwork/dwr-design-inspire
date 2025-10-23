'use client';

import { useState } from 'react';

interface TestimonialsProps {
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
  }[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">TESTIMONIALS</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="bg-white p-6 md:p-12 border-l-4 border-purple-600">
          <div className="text-4xl md:text-5xl text-purple-200 mb-4 md:mb-6">"</div>
          <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
            {testimonials[activeTestimonial].quote}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-bold text-base md:text-lg text-gray-900">{testimonials[activeTestimonial].author}</p>
              <p className="text-gray-600 text-sm">{testimonials[activeTestimonial].role}</p>
              <p className="text-purple-600 font-semibold text-sm">{testimonials[activeTestimonial].company}</p>
            </div>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-purple-600 w-8' : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
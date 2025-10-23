'use client';

import { Link2, Rocket, Shield } from 'lucide-react';

export default function ValueProposition() {
  const cards = [
    {
      icon: Link2,
      title: "Connect Everything",
      description: "Integrate data, tools, and APIs effortlessly."
    },
    {
      icon: Rocket,
      title: "Deploy Instantly",
      description: "Launch secure AI agents into workflows without complexity."
    },
    {
      icon: Shield,
      title: "Operate Securely",
      description: "Enterprise-grade compliance and control by design."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 hover:shadow-lg hover:border-purple-100 transition-all duration-300 border border-transparent"
              >
                <div className="mb-6">
                  <IconComponent className="w-10 h-10 text-purple-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
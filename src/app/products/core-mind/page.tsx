'use client';

import { useState } from 'react';
import { 
  Plug, 
  Database, 
  Lock, 
  CheckCircle, 
  Settings, 
  BarChart3,
  ShieldCheck,
  Key,
  ClipboardList,
  Building,
  CheckSquare
} from 'lucide-react';

// Import Components
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import { DeveloperSection } from '@/components/DeveloperSection';
import ManagementConsole from '@/components/ManagementConsole';
import { UseCasesSection } from '@/components/UseCasesSection';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function CoreMindPage() {
  const faqs = [
    {
      question: "What deployment options does Core Mind offer?",
      answer: "Core Mind offers flexible deployment options including cloud-hosted (AWS, Azure, GCP), private VNet deployments, on-premises installations, and hybrid configurations to meet your security and compliance requirements."
    },
    {
      question: "Which AI models does Core Mind support?",
      answer: "Core Mind is model-agnostic and supports all major AI providers including OpenAI, Anthropic, Google, Azure OpenAI, and open-source models. You can even use multiple models simultaneously."
    },
    {
      question: "How does Core Mind ensure data isolation?",
      answer: "Every tenant gets dedicated resources with strict data isolation. We implement RBAC, encryption at rest and in transit, audit logging, and support private deployments for maximum control."
    },
    {
      question: "How long does setup take?",
      answer: "Most teams are up and running within hours, not months. Our platform handles the complex AI infrastructure so you can focus on building intelligent applications immediately."
    },
    {
      question: "Can I integrate Core Mind with existing tools?",
      answer: "Absolutely! Core Mind integrates seamlessly with popular tools like Slack, Teams, Salesforce, databases, knowledge bases, and custom APIs through our extensive integration library."
    }
  ];

  const testimonials = [
    {
      quote: "Core Mind reduced our AI deployment time from 6 months to 2 weeks. The platform handles all the complexity while giving us enterprise-grade security.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechCorp"
    },
    {
      quote: "Finally, a platform that lets our developers focus on innovation instead of AI operations. Core Mind is a game-changer for our product team.",
      author: "Michael Rodriguez",
      role: "VP of Engineering",
      company: "DataFlow Systems"
    },
    {
      quote: "The security and compliance features gave us confidence to deploy AI across our entire organization. Core Mind understands enterprise needs.",
      author: "Jennifer Park",
      role: "Chief Information Security Officer",
      company: "Global Finance Inc"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Value Proposition */}
      <ValueProposition />

      {/* Enterprise Features */}
      <section id="enterprise" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-6">
              <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">FOR ENTERPRISES</div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Bring AI Into the Heart of Your Business
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Core Mind seamlessly integrates with your existing tools and infrastructure, 
                empowering teams to collaborate with AI while maintaining enterprise-grade 
                security and control. Transform workflows, boost productivity, and unlock 
                new possibilities across your organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: Plug, title: "Seamless Integrations", desc: "Connect Teams, Slack, CRMs" },
                { icon: Database, title: "Data Connectivity", desc: "Link databases and knowledge bases" },
                { icon: Lock, title: "Private Deployments", desc: "Host in your own VNet" },
                { icon: CheckCircle, title: "Security & Compliance", desc: "SOC2, ISO 27001, GDPR" },
                { icon: Settings, title: "Flexible Architecture", desc: "Multi-tenant or dedicated cloud" },
                { icon: BarChart3, title: "Real-time Analytics", desc: "Monitor performance & costs" }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-4 md:p-6 border border-gray-200 hover:shadow-md hover:border-purple-200 transition-all duration-300"
                  >
                    <div className="mb-3">
                      <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-purple-600" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold mb-2 text-sm md:text-sm text-gray-900">{feature.title}</h4>
                    <p className="text-xs text-gray-500">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <DeveloperSection />

      {/* Management Console */}
      <ManagementConsole />

      {/* Use Cases */}
      <UseCasesSection />

      {/* Security & Compliance */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">SECURITY & COMPLIANCE</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-gray-600">Built with security and compliance at its core</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { icon: ShieldCheck, title: "AES-256 + TLS 1.3", subtitle: "End-to-end Encryption" },
              { icon: Key, title: "RBAC & SSO", subtitle: "Access Control" },
              { icon: ClipboardList, title: "Audit Logs", subtitle: "Complete Traceability" },
              { icon: Building, title: "On-Prem Options", subtitle: "Full Control" },
              { icon: CheckSquare, title: "SOC2, ISO 27001", subtitle: "GDPR, HIPAA Ready" }
            ].map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-4 md:p-6 text-center hover:bg-purple-50 transition-colors duration-300"
                >
                  <div className="mb-2 md:mb-3 flex justify-center">
                    <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-purple-600" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-xs md:text-sm mb-1 text-gray-900">{badge.title}</h4>
                  <p className="text-xs text-gray-500">{badge.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">PRICING</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600">Choose the plan that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Startup",
                price: "$499",
                period: "/month",
                features: [
                  "Up to 5 AI agents",
                  "Basic integrations",
                  "Community support",
                  "Cloud deployment",
                  "10K API calls/month"
                ],
                highlighted: false
              },
              {
                name: "Professional",
                price: "$1,999",
                period: "/month",
                features: [
                  "Unlimited AI agents",
                  "Full orchestration",
                  "Priority support",
                  "Advanced analytics",
                  "100K API calls/month",
                  "Custom integrations"
                ],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                features: [
                  "Private VNet deployment",
                  "SLA guarantee",
                  "Dedicated support",
                  "Compliance packages",
                  "Unlimited API calls",
                  "Custom development"
                ],
                highlighted: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-6 md:p-8 border transition-shadow duration-300 ${
                  plan.highlighted
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white border-gray-200 hover:shadow-md'
                }`}
              >
                <h3 className="text-lg md:text-xl font-bold mb-4 uppercase tracking-wide">{plan.name}</h3>
                <div className="mb-6 md:mb-8">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? "text-gray-400" : "text-gray-500"}>{plan.period}</span>
                </div>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span className={plan.highlighted ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 font-semibold transition-colors duration-300 text-sm uppercase tracking-wide ${
                    plan.highlighted
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-purple-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Transform Your Enterprise.
            <br />
            Empower Your Developers.
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Core Mind makes AI adoption simple, secure, and scalable — for every organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <button className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-purple-600 text-white text-sm font-semibold uppercase tracking-wide hover:bg-purple-700 transition-colors duration-300">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 border-2 border-purple-400 text-white text-sm font-semibold uppercase tracking-wide hover:bg-purple-600 hover:border-purple-600 transition-all duration-300">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
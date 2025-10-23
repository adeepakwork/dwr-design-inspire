'use client';

import { useState } from 'react';
import { 
  Plug, 
  Database, 
  Lock, 
  CheckCircle, 
  Settings, 
  BarChart3,
  Bot,
  Zap,
  Network,
  MessageSquare,
  Users,
  Search,
  Code,
  Headphones,
  Cog,
  PieChart,
  ShieldCheck,
  Key,
  ClipboardList,
  Building,
  CheckSquare,
  Link2,
  Rocket
} from 'lucide-react';

// Import Components
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import ManagementConsole from '@/components/ManagementConsole';
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {[
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
            ].map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-4 md:p-6 hover:bg-gray-700 hover:border-purple-500/30 transition-all duration-300 border border-transparent"
                >
                  <div className="mb-4">
                    <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-purple-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-2 text-white">{card.title}</h3>
                  <p className="text-gray-400 text-xs">{card.description}</p>
                </div>
              );
            })}
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
{`import { CoreMind } from '@core-mind/sdk';

const agent = await CoreMind.createAgent({
  name: 'Customer Support Agent',
  model: 'gpt-4',
  tools: ['zendesk', 'slack', 'knowledge-base'],
  permissions: ['read', 'respond']
});

await agent.deploy();`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Console */}
      <ManagementConsole />

      {/* Use Cases */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">USE CASES</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Endless Possibilities
            </h2>
            <p className="text-gray-600 text-lg">See how Core Mind transforms different workflows</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
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
            ].map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 hover:shadow-md hover:border-purple-100 transition-all duration-300 border border-transparent"
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
        </div>
      </section>

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
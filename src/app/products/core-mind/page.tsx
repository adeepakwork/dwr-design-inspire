'use client';

import { useState } from 'react';
import { 
  Link2, 
  Rocket, 
  Shield, 
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
  CheckSquare
} from 'lucide-react';

export default function CoreMindPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
      <nav className="border-b border-gray-200 bg-white">
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
      
      {/* 1. Hero Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-8 uppercase tracking-wide">
            HOME / <span className="text-purple-600 font-semibold">PRODUCTS / CORE MIND</span>
          </div>

          {/* Product Name */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">Core Mind</h2>
            <p className="text-sm text-purple-600 uppercase tracking-wider mt-1 font-semibold">AI Backbone Platform</p>
          </div>

          {/* Main Heading */}
          <div className="max-w-5xl mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-0">
              The AI platform that empowers businesses to innovate, automate, and scale with confidence.
            </h1>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div>
              <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">DEPLOYMENTS</div>
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">150+</div>
              <p className="text-gray-600 leading-relaxed">
                150+ Successful Projects Delivered. We've transformed ideas into reality for over 150 clients across various industries.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">EXPERIENCE</div>
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">10+</div>
              <p className="text-gray-600 leading-relaxed">
                10+ Years of Experience. A decade of expertise in delivering innovative AI and automation solutions.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">SUCCESSFUL</div>
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">98%</div>
              <p className="text-gray-600 leading-relaxed">
                98% Client Satisfaction Rate. Our clients trust us to exceed their expectations with every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Cards */}
      <section id="features" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((card, index) => {
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

      {/* 3. For Enterprises */}
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
            
            <div className="grid grid-cols-2 gap-6">
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
                    className="bg-white p-6 border border-gray-200 hover:shadow-md hover:border-purple-200 transition-all duration-300"
                  >
                    <div className="mb-3">
                      <IconComponent className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold mb-2 text-sm text-gray-900">{feature.title}</h4>
                    <p className="text-xs text-gray-500">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. For Developers (Dark Section) */}
      <section id="developers" className="py-24 px-6 bg-gray-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                  className="bg-gray-800 p-6 hover:bg-gray-700 hover:border-purple-500/30 transition-all duration-300 border border-transparent"
                >
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-white">{card.title}</h3>
                  <p className="text-gray-400 text-xs">{card.description}</p>
                </div>
              );
            })}
          </div>

          {/* Code Snippet Preview */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-950 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-gray-500 text-sm font-mono">app.ts</span>
              </div>
              <div className="p-8">
                <pre className="text-green-400 text-xs leading-relaxed font-mono">
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

      {/* 5. Platform Architecture */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">HOW IT WORKS</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Four Simple Steps to AI Transformation
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Link2,
                title: "Connect",
                description: "Integrate data, APIs, and systems seamlessly."
              },
              {
                step: "02",
                icon: Settings,
                title: "Orchestrate",
                description: "Build agents with zero AI ops complexity."
              },
              {
                step: "03",
                icon: Rocket,
                title: "Deploy",
                description: "Choose cloud or private environments instantly."
              },
              {
                step: "04",
                icon: BarChart3,
                title: "Manage",
                description: "Unified dashboard for complete control."
              }
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index}>
                  <div className="bg-white p-8 hover:shadow-md hover:border-purple-100 transition-all duration-300 border border-transparent">
                    <div className="text-sm font-bold text-purple-600 mb-4">{step.step}</div>
                    <div className="mb-4">
                      <IconComponent className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Unified Management Console */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">MANAGEMENT CONSOLE</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Everything You Need in One Dashboard
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Dashboard Preview - Mockup */}
            <div className="bg-gray-100 p-8 rounded">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-gray-400 font-mono">Core Mind Dashboard</span>
                </div>
                {/* Dashboard Content */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-xs text-gray-500 mb-1">Active Agents</div>
                      <div className="text-2xl font-bold text-gray-900">24</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-xs text-gray-500 mb-1">API Calls</div>
                      <div className="text-2xl font-bold text-gray-900">1.2M</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-xs text-gray-500 mb-1">Uptime</div>
                      <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded p-4 flex items-end gap-2 h-32">
                    <div className="bg-gray-900 w-full h-12 rounded-t"></div>
                    <div className="bg-gray-900 w-full h-20 rounded-t"></div>
                    <div className="bg-gray-900 w-full h-16 rounded-t"></div>
                    <div className="bg-gray-900 w-full h-24 rounded-t"></div>
                    <div className="bg-gray-900 w-full h-28 rounded-t"></div>
                    <div className="bg-gray-900 w-full h-20 rounded-t"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                { icon: Bot, text: "Manage agents, data sources, and tools" },
                { icon: BarChart3, text: "Track usage, cost, and performance in real-time" },
                { icon: Zap, text: "One-click updates and deployments" },
                { icon: Users, text: "Define roles and granular permissions" },
                { icon: ClipboardList, text: "View comprehensive audit logs" }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1">
                      <IconComponent className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
                    </div>
                    <p className="text-gray-700">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Use Cases */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">USE CASES</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Endless Possibilities
            </h2>
            <p className="text-gray-600 text-lg">See how Core Mind transforms different workflows</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* 8. Security & Compliance */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">SECURITY & COMPLIANCE</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-gray-600">Built with security and compliance at its core</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                  className="bg-gray-50 p-6 text-center hover:bg-purple-50 transition-colors duration-300"
                >
                  <div className="mb-3 flex justify-center">
                    <IconComponent className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-sm mb-1 text-gray-900">{badge.title}</h4>
                  <p className="text-xs text-gray-500">{badge.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">TESTIMONIALS</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="bg-white p-12 border-l-4 border-purple-600">
            <div className="text-5xl text-purple-200 mb-6">"</div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {testimonials[activeTestimonial].quote}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg text-gray-900">{testimonials[activeTestimonial].author}</p>
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

      {/* 10. Pricing */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">PRICING</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                className={`p-8 border transition-shadow duration-300 ${
                  plan.highlighted
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white border-gray-200 hover:shadow-md'
                }`}
              >
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? "text-gray-400" : "text-gray-500"}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm">
                      <span className="text-green-500">✓</span>
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

      {/* 11. FAQ */}
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
              <div
                key={index}
                className="bg-white border border-gray-200 overflow-hidden"
              >
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

      {/* 12. Comparison Table */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">COMPARISON</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Core Mind vs Traditional AI Projects
            </h2>
          </div>

          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 gap-px bg-gray-200">
              <div className="bg-white p-6"></div>
              <div className="bg-white p-6 text-center">
                <h3 className="font-bold text-sm text-gray-600 uppercase tracking-wide">Traditional AI</h3>
              </div>
              <div className="bg-gray-900 p-6 text-center">
                <h3 className="font-bold text-sm text-white uppercase tracking-wide">Core Mind</h3>
              </div>

              {[
                { aspect: "Setup Time", traditional: "3-6 months", coremind: "Hours" },
                { aspect: "Cost", traditional: "$200K+ infrastructure", coremind: "Pay as you go" },
                { aspect: "Expertise Required", traditional: "ML engineers, DevOps", coremind: "Any developer" },
                { aspect: "Integration", traditional: "Complex custom work", coremind: "Pre-built connectors" },
                { aspect: "Scalability", traditional: "Manual provisioning", coremind: "Auto-scaling" },
                { aspect: "Security", traditional: "Build from scratch", coremind: "Enterprise-ready" }
              ].map((row, index) => (
                <>
                  <div className="bg-white p-6 font-bold text-gray-900 text-sm">{row.aspect}</div>
                  <div className="bg-white p-6 text-center text-gray-500 text-sm">{row.traditional}</div>
                  <div className="bg-gray-50 p-6 text-center text-gray-900 font-semibold text-sm">
                    {row.coremind}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="py-32 px-6 bg-gray-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Transform Your Enterprise.
            <br />
            Empower Your Developers.
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Core Mind makes AI adoption simple, secure, and scalable — for every organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-purple-600 text-white text-sm font-semibold uppercase tracking-wide hover:bg-purple-700 transition-colors duration-300">
              Request a Demo
            </button>
            <button className="px-10 py-4 border-2 border-purple-400 text-white text-sm font-semibold uppercase tracking-wide hover:bg-purple-600 hover:border-purple-600 transition-all duration-300">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-xl font-bold mb-2">
            <span className="text-white">digital</span>
            <span className="text-purple-500">400</span>
          </div>
          <p className="text-gray-500 text-sm">© 2025 digital400. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
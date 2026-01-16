import { Boxes, Code, Building2, Coins, Lock, Smartphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Boxes,
      title: 'Blockchain Development',
      description: 'Custom blockchain solutions tailored to your business needs. From smart contracts to full-stack dApps.',
    },
    {
      icon: Code,
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts using Solidity, Rust, and other blockchain languages.',
    },
    {
      icon: Coins,
      title: 'DeFi Solutions',
      description: 'Build decentralized finance platforms including DEXs, lending protocols, and yield farming.',
    },
    {
      icon: Lock,
      title: 'Security Audits',
      description: 'Comprehensive security audits to ensure your blockchain applications are bulletproof.',
    },
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Enterprise-grade blockchain integration for supply chain, identity, and business processes.',
    },
    {
      icon: Smartphone,
      title: 'Web3 Mobile Apps',
      description: 'Native mobile applications with seamless Web3 wallet integration and blockchain connectivity.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            End-to-end blockchain development services to transform your vision into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10"
            >
              <div className="bg-red-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors duration-300">
                <service.icon className="text-red-500" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MessageSquare, Lightbulb, Code2, Rocket, CheckCircle2 } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery',
      description: 'We start by understanding your business goals, technical requirements, and project vision.',
    },
    {
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Our team develops a comprehensive roadmap with architecture design and technology selection.',
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Agile development sprints with regular updates and transparent communication throughout.',
    },
    {
      icon: CheckCircle2,
      title: 'Testing',
      description: 'Rigorous testing including security audits, smart contract verification, and QA processes.',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Smooth deployment to mainnet with ongoing support and maintenance post-launch.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-red-500">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven methodology that delivers results from concept to launch
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start mb-12">
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50">
                    <step.icon size={28} />
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <div className="flex items-center mb-2">
                    <span className="text-red-500 font-bold mr-3">0{index + 1}</span>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-red-500 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

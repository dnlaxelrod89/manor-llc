import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Shield size={16} className="text-red-500" />
            <span className="text-sm text-gray-300">Trusted by 500+ Companies Worldwide</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Know the rules,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              create new ones
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Your business partner in blockchain innovation. We build custom solutions across 25+ blockchain ecosystems with proven expertise in 130+ successful projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={scrollToContact}
              className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-700 hover:border-gray-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200"
            >
              View Our Work
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <Zap className="text-red-500 mb-3 mx-auto" size={32} />
              <div className="text-3xl font-bold mb-2">130+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <Globe className="text-red-500 mb-3 mx-auto" size={32} />
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-gray-400">Blockchain Ecosystems</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <Shield className="text-red-500 mb-3 mx-auto" size={32} />
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

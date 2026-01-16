import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'DeFi', 'NFT', 'Enterprise', 'Web3'];

  const projects = [
    {
      title: 'DeFi Exchange Platform',
      category: 'DeFi',
      description: 'A decentralized exchange with advanced trading features and liquidity pools',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'NFT Marketplace',
      category: 'NFT',
      description: 'Multi-chain NFT marketplace with auction and fixed-price listings',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Supply Chain Solution',
      category: 'Enterprise',
      description: 'Blockchain-based supply chain tracking for enterprise logistics',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Web3 Gaming Platform',
      category: 'Web3',
      description: 'Play-to-earn gaming ecosystem with token economics and NFT integration',
      image: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Lending Protocol',
      category: 'DeFi',
      description: 'Decentralized lending and borrowing platform with dynamic interest rates',
      image: 'https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Identity Verification',
      category: 'Enterprise',
      description: 'Decentralized identity solution for secure credential verification',
      image: 'https://images.pexels.com/photos/8369516/pexels-photo-8369516.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-red-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our successful blockchain projects across various industries
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-red-500 text-white'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <button className="flex items-center text-red-500 hover:text-red-400 transition-colors">
                  <span className="mr-2">View Project</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

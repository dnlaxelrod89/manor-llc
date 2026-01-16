export default function TechStack() {
  const technologies = [
    { name: 'Ethereum', category: 'Layer 1' },
    { name: 'Polygon', category: 'Layer 2' },
    { name: 'Solana', category: 'Layer 1' },
    { name: 'Binance Smart Chain', category: 'Layer 1' },
    { name: 'Avalanche', category: 'Layer 1' },
    { name: 'Cosmos', category: 'Interoperability' },
    { name: 'Polkadot', category: 'Interoperability' },
    { name: 'Arbitrum', category: 'Layer 2' },
    { name: 'Optimism', category: 'Layer 2' },
    { name: 'Near Protocol', category: 'Layer 1' },
    { name: 'Cardano', category: 'Layer 1' },
    { name: 'Tezos', category: 'Layer 1' },
  ];

  const tools = [
    'Solidity',
    'Rust',
    'Web3.js',
    'Ethers.js',
    'Hardhat',
    'Truffle',
    'IPFS',
    'The Graph',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
  ];

  return (
    <section id="tech" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technology <span className="text-red-500">Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We work with cutting-edge blockchain technologies and development tools
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Blockchain Ecosystems</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="font-semibold mb-1">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Development Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3 hover:border-red-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

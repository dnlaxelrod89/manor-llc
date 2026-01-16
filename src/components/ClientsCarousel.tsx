export default function ClientsCarousel() {
  const clients = [
    'Ethereum',
    'Polygon',
    'Binance',
    'Solana',
    'Avalanche',
    'Cosmos',
    'Polkadot',
    'Cardano',
    'Chainlink',
    'Uniswap',
  ];

  return (
    <section className="py-16 bg-slate-900/50 border-y border-slate-800">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wider">
          Trusted by Leading Blockchain Projects
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-16">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors duration-200"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

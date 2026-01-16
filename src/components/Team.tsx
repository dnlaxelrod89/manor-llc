import { Linkedin, Github, Twitter } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Alex Morrison',
      role: 'CEO & Blockchain Architect',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Smart Contract Lead',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Security',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Lead Full Stack Developer',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="team" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-red-500">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expert blockchain developers and innovators driving the future of Web3
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <div className="flex space-x-3">
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Github size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Twitter size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

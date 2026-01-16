import { Phone, MessageSquare, MapPin } from 'lucide-react';

export default function RestaurantHero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/90 via-amber-950/85 to-amber-950/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-900/50 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-amber-700/50">
            <MapPin size={18} className="text-amber-400" />
            <span className="text-amber-100">795 Sanford Avenue, Newark, New Jersey</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Caribbean
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Catering Services & Special Event Venue
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Bringing authentic Caribbean flavors to your special occasions. From intimate gatherings to grand celebrations, we make every event unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="tel:973-388-0650"
              className="group bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg shadow-amber-900/50"
            >
              <Phone size={20} />
              <span>Call (973) 388-0650</span>
            </a>
            <a
              href="sms:973-381-6097"
              className="border-2 border-amber-600 hover:border-amber-500 hover:bg-amber-600/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2"
            >
              <MessageSquare size={20} />
              <span>Text (973) 381-6097</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-amber-900/40 backdrop-blur-sm rounded-2xl p-6 border border-amber-700/50">
              <div className="text-3xl font-bold mb-2 text-amber-400">$4,000</div>
              <div className="text-amber-100">Base Package</div>
              <div className="text-sm text-amber-300 mt-1">Up to 150 guests</div>
            </div>
            <div className="bg-amber-900/40 backdrop-blur-sm rounded-2xl p-6 border border-amber-700/50">
              <div className="text-3xl font-bold mb-2 text-amber-400">10</div>
              <div className="text-amber-100">Years Experience</div>
              <div className="text-sm text-amber-300 mt-1">Serving Newark, NJ</div>
            </div>
            <div className="bg-amber-900/40 backdrop-blur-sm rounded-2xl p-6 border border-amber-700/50">
              <div className="text-3xl font-bold mb-2 text-amber-400">Licensed</div>
              <div className="text-amber-100">Liquor License</div>
              <div className="text-sm text-amber-300 mt-1">Full bar available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

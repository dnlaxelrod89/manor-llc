import { Phone, MessageSquare, ChefHat, Users, Calendar } from 'lucide-react';

export default function CateringInfo() {
  return (
    <section id="catering" className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-950">
              Caribbean-Style <span className="text-amber-600">Catering</span>
            </h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl shadow-amber-900/10 p-8 md:p-12 border border-amber-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Manor Restaurant, located at <strong className="text-amber-900">795 Sanford Avenue, Newark, New Jersey</strong>, provides premium catering services specializing in <strong className="text-amber-900">Caribbean-style cuisine</strong> throughout Newark, NJ. We clearly list the dishes and services we specialize in to help you plan your event with confidence.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3 mb-4">
                <Users className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-amber-950 mb-2">Base Catering Package</h3>
                  <p className="text-gray-700">
                    Our base catering package starts at <strong className="text-amber-900 text-2xl">$4,000</strong>, which covers food for up to <strong className="text-amber-900">150 people</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">Get Your Custom Quote</h3>
              <p className="mb-6 text-amber-50">
                For an exact price estimate tailored to your event, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:973-388-0650"
                  className="flex items-center justify-center space-x-2 bg-white text-amber-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-50 transition-all duration-200"
                >
                  <Phone size={20} />
                  <span>(973) 388-0650</span>
                </a>
                <a
                  href="sms:973-381-6097"
                  className="flex items-center justify-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-200"
                >
                  <MessageSquare size={20} />
                  <span>(973) 381-6097</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Calendar className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-amber-950 mb-2">Events We Cater</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Birthday Parties</li>
                    <li>• Weddings</li>
                    <li>• Funerals & Repasts</li>
                    <li>• Corporate Events</li>
                    <li>• Church Gatherings</li>
                    <li>• And More!</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ChefHat className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-amber-950 mb-2">Our Specialty</h4>
                  <p className="text-gray-700">
                    Authentic Caribbean cuisine prepared with the finest ingredients and traditional recipes passed down through generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

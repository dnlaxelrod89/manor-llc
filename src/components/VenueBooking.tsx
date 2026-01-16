import { Phone, MessageSquare, Sparkles, Utensils, Wine, Video } from 'lucide-react';

export default function VenueBooking() {
  const youtubeUrl = "https://youtu.be/A3nXf4uneY4";
function getYouTubeId(url) {
  return (
    url.match(/v=([^&]+)/)?.[1] ||
    url.match(/youtu\.be\/([^?]+)/)?.[1] ||
    url.match(/embed\/([^?]+)/)?.[1] ||
    ""
  );
}

  return (
    <section id="venue" className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-950">
              Book Our <span className="text-amber-600">Venue</span>
            </h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Host your special occasion at The Manor Restaurant. Our elegant venue is perfect for celebrations of all kinds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl shadow-xl shadow-amber-900/10 p-8 border border-amber-100">
              <Sparkles className="text-amber-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-amber-950 mb-4">Events We Host</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">•</span>
                  <span>Birthday Parties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">•</span>
                  <span>Weddings & Receptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">•</span>
                  <span>Post-Funeral Gatherings & Repasts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">•</span>
                  <span>Church Events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">•</span>
                  <span>Corporate Functions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">•</span>
                  <span>Private Functions & Celebrations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-amber-900/10 p-8 border border-amber-100">
              <Utensils className="text-amber-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-amber-950 mb-4">Flexible Options</h3>
              <div className="space-y-6">
                <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-600">
                  <h4 className="font-bold text-amber-950 mb-2">Option 1: Venue + Catering</h4>
                  <p className="text-gray-700">
                    Rent our venue and enjoy our premium Caribbean catering service. Both priced separately for your convenience.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-600">
                  <h4 className="font-bold text-amber-950 mb-2">Option 2: Venue Only</h4>
                  <p className="text-gray-700">
                    Rent our venue and use your own independent catering service. Perfect for those with specific preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-900 to-amber-950 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <Wine className="text-amber-300" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold">Licensed Liquor Provider</h3>
                </div>
                <p className="text-amber-100 text-lg leading-relaxed">
                  The Manor Restaurant LLC is one of the few establishments in Newark, NJ that holds a <strong className="text-amber-300">valid liquor license</strong>, authorizing us to sell alcohol on-site for your events.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-xl shadow-amber-900/10 p-8 md:p-12 border border-amber-100">
            <div className="flex items-center justify-center mb-6">
              <Video className="text-amber-600 mr-3" size={32} />
              <h3 className="text-2xl md:text-3xl font-bold text-amber-950">Tour Our Venue</h3>
            </div>
            <p className="text-center text-gray-700 mb-8">
              Watch the video below for a clear view of our venue's size, layout, and overall quality.
            </p>

            <div className="relative w-full overflow-hidden rounded-2xl border-2 border-amber-300 shadow-inner bg-black">
  {/* 16:9 responsive */}
  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
    <iframe
      className="absolute inset-0 h-full w-full"
      src={`https://www.youtube.com/embed/${getYouTubeId(youtubeUrl)}?rel=0&modestbranding=1`}
      title="Venue tour video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
</div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-6">
                To book our venue or receive more information, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:973-388-0650"
                  className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg shadow-amber-900/30"
                >
                  <Phone size={20} />
                  <span>Call (973) 388-0650</span>
                </a>
                <a
                  href="sms:973-381-6097"
                  className="flex items-center space-x-2 border-2 border-amber-600 hover:bg-amber-50 text-amber-900 px-8 py-4 rounded-full font-semibold transition-all duration-200"
                >
                  <MessageSquare size={20} />
                  <span>Text (973) 381-6097</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

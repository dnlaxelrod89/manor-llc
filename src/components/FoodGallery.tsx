import { useState } from 'react';
import { X } from 'lucide-react';

export default function FoodGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const foodImages = [
    'https://i.imgur.com/RHGRAfw.jpeg',
    'https://i.imgur.com/Nt8TrnL.png',
    'https://i.imgur.com/LsLoj7p.png',
    'https://i.imgur.com/spRX87R.jpeg',
    'https://i.imgur.com/EBfw7Mk.jpeg',
    'https://i.imgur.com/VfGJEoU.jpeg',
    'https://i.imgur.com/ry73kG1.jpeg',
    'https://i.imgur.com/Qw2mnOI.jpeg',
    'https://i.imgur.com/xxvkxAy.jpeg',
    'https://i.imgur.com/3le9yrX.png',
    'https://i.imgur.com/mWwNYeK.png',
    'https://i.imgur.com/ZEjiiEL.jpeg',
    'https://i.imgur.com/wxtelHg.png',
    'https://i.imgur.com/ZngLuki.png',
    'https://i.imgur.com/YajTSCO.png',
    'https://i.imgur.com/CpEutcE.png'
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-950">
            Our <span className="text-amber-600">Cuisine</span>
          </h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Below are images and examples of the delicious Caribbean food we serve
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {foodImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={image}
                alt={`Caribbean cuisine image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-amber-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">Image #{index + 1}</p>
                  <p className="text-amber-200 text-sm">Click to view larger</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}

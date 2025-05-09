'use client';

import Image from "next/image";

interface Destination {
  title: string;
  description: string;
  image: string;
  country: string;
  price: string;
  duration: string;
}

const destinations: Destination[] = [
  {
    title: 'Makkah & Madinah',
    description: 'Pèlerinage spirituel dans les villes saintes',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop',
    country: 'Arabie Saoudite',
    price: 'À partir de 1 650 000 F',
    duration: '7-14 jours'
  },
  {
    title: 'Paris',
    description: 'La ville lumière et ses monuments emblématiques',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop',
    country: 'France',
    price: 'À partir de 525 000 F',
    duration: '3-7 jours'
  },
  {
    title: 'Dubai',
    description: 'Modernité et luxe au cœur du désert',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    country: 'Émirats Arabes Unis',
    price: 'À partir de 790 000 F',
    duration: '5-10 jours'
  }
];

const PopularDestinations = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Destinations
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Explorez le Monde avec Nous</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos destinations les plus populaires et commencez à planifier votre prochaine aventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={destination.image} 
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#EA8D1C] text-white text-sm font-medium rounded-full">
                    {destination.country}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.title}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-600">{destination.price}</span>
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#EA8D1C] transition-colors">
                    Découvrir
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-[#EA8D1C] transition-colors">
            Voir toutes les destinations
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#EA8D1C] to-blue-500" />
    </section>
  );
};

export default PopularDestinations; 
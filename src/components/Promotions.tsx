'use client';

import Image from "next/image";

interface Promotion {
  title: string;
  description: string;
  discount: string;
  duration: string;
  image: string;
}

const promotions: Promotion[] = [
  {
    title: 'Dubai Shopping Festival',
    description: 'Profitez de réductions exclusives sur les vols et hôtels pendant le festival',
    discount: '-30%',
    duration: 'Offre limitée',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Week-end à Paris',
    description: 'Séjour romantique dans la ville lumière avec petit-déjeuner inclus',
    discount: '-25%',
    duration: 'Jusqu\'au 31/12',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop'
  }
];

const Promotions = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Offres Spéciales
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos Meilleures Offres du Moment</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profitez de nos promotions exclusives et réalisez vos rêves de voyage à des prix imbattables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[16/9]"
            >
              <Image 
                src={promo.image} 
                alt={promo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#EA8D1C] rounded-full text-sm font-medium">
                    {promo.discount}
                  </span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">
                    {promo.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                <p className="text-sm opacity-90 mb-4">{promo.description}</p>
                <button className="inline-flex items-center text-white font-medium hover:text-[#EA8D1C] transition-colors">
                  Réserver maintenant
                  <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#EA8D1C] to-blue-500" />
    </section>
  );
};

export default Promotions; 
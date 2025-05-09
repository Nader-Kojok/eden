'use client';

import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Amadou Diop',
    role: 'Pèlerin Hajj 2023',
    text: 'Une expérience inoubliable grâce à Eden Travel. L\'organisation était parfaite et le service exceptionnel. Je recommande vivement leurs services pour le Hajj.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    location: 'Dakar, Sénégal',
    rating: 5
  },
  {
    name: 'Fatou Ndiaye',
    role: 'Voyage Paris',
    text: 'Je recommande vivement Eden Travel. Le personnel est très professionnel et les prix sont très compétitifs. Mon séjour à Paris était parfaitement organisé.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    location: 'Saint-Louis, Sénégal',
    rating: 5
  },
  {
    name: 'Moussa Diallo',
    role: 'Circuit Dubai',
    text: 'Un voyage de rêve organisé par Eden Travel. Tout était parfaitement planifié et le service était impeccable. Je reviendrai certainement pour mes prochains voyages.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    location: 'Touba, Sénégal',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ce que nos clients disent</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les expériences de nos voyageurs satisfaits et leurs aventures mémorables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm opacity-90">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-[#EA8D1C]" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{testimonial.text}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">{testimonial.role}</span>
                  <button className="text-sm font-medium text-gray-600 hover:text-[#EA8D1C] transition-colors">
                    Lire plus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-[#EA8D1C] transition-colors">
            Voir tous les témoignages
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#EA8D1C] to-blue-500" />
    </section>
  );
};

export default Testimonials; 
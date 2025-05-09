import Image from "next/image";
import Link from "next/link";

interface Promotion {
  title: string;
  description: string;
  image: string;
  price: string;
}

const promotions: Promotion[] = [
  {
    title: 'Hajj 2024',
    description: 'Réservation anticipée avec 10% de réduction',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop',
    price: 'À partir de 3 500 000 FCFA'
  },
  {
    title: 'Paris en Été',
    description: 'Séjour 7 nuits avec petit-déjeuner inclus',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    price: 'À partir de 850 000 FCFA'
  }
];

const Promotions = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Offres Spéciales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promo, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl">
              <div className="relative h-[400px]">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-xl mb-4">{promo.description}</p>
                  <p className="text-2xl font-bold text-[#EA8D1C] group-hover:text-[#C88A3A] transition-colors">{promo.price}</p>
                  <Link 
                    href="/contact"
                    className="inline-block mt-4 bg-white text-black px-6 py-2 rounded-md text-lg font-semibold hover:bg-[#EA8D1C] hover:text-white transition-all"
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions; 
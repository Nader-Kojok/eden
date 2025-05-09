import Image from "next/image";

interface Destination {
  title: string;
  description: string;
  image: string;
}

const destinations: Destination[] = [
  {
    title: 'Makkah & Madinah',
    description: 'Pèlerinage spirituel',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Paris',
    description: 'La ville lumière',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop'
  },
  {
    title: 'Dubai',
    description: 'Modernité et luxe',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop'
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Destinations Populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl">
              <div className="relative h-[300px]">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
                  <p className="text-lg">{destination.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations; 
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Amadou Diop',
    role: 'Pèlerin Hajj 2023',
    text: 'Une expérience inoubliable grâce à Eden Travel. L\'organisation était parfaite et le service exceptionnel.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Fatou Ndiaye',
    role: 'Voyage Paris',
    text: 'Je recommande vivement Eden Travel. Le personnel est très professionnel et les prix sont très compétitifs.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Moussa Diallo',
    role: 'Circuit Dubai',
    text: 'Un voyage de rêve organisé par Eden Travel. Tout était parfaitement planifié et le service était impeccable.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Ce que disent nos clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
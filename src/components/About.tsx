import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">À Propos d&apos;Eden Travel</h2>
            <p className="text-gray-600 mb-4">
              L&apos;agence s&apos;est donnée la mission d&apos;être un point d&apos;ancrage dans la vente de billet d&apos;avion pour toute destination.
            </p>
            <p className="text-gray-600">
              Nous vous proposons des meilleurs circuits, séjours, Hajj et Omra et pour vos voyages de dernière minute ou planifier à l&apos;avance.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
              alt="Eden Travel Agency Office"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop"
          alt="Beautiful travel destination"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
          Découvrez Votre Prochaine Aventure
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
          Votre partenaire de confiance pour les vols, circuits et pèlerinages dans le monde entier
        </p>
        <Link 
          href="/contact"
          className="bg-[#EA8D1C] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#C88A3A] transition-all"
        >
          Réserver Maintenant
        </Link>
      </div>
    </section>
  );
};

export default Hero; 
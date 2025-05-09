'use client';

import Image from "next/image";

const About = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            À Propos
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Votre Partenaire de Confiance en Voyage</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Depuis plus de 15 ans, nous accompagnons nos clients dans leurs aventures avec passion et expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Notre équipe de voyage" 
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Notre Mission</h3>
            <p className="text-gray-600">
              Nous nous engageons à offrir des expériences de voyage exceptionnelles, en combinant service personnalisé, expertise locale et prix compétitifs.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check-circle text-blue-600"></i>
                  <span className="font-medium">Service 24/7</span>
                </div>
                <p className="text-sm text-gray-600">Support disponible à tout moment</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check-circle text-blue-600"></i>
                  <span className="font-medium">Prix Garantis</span>
                </div>
                <p className="text-sm text-gray-600">Meilleur rapport qualité-prix</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check-circle text-blue-600"></i>
                  <span className="font-medium">Expertise Locale</span>
                </div>
                <p className="text-sm text-gray-600">Connaissance approfondie</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check-circle text-blue-600"></i>
                  <span className="font-medium">Sécurité Totale</span>
                </div>
                <p className="text-sm text-gray-600">Voyages sécurisés</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#EA8D1C] to-blue-500" />
    </section>
  );
};

export default About; 
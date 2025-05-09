"use client";

import { FaPlane, FaPlaneDeparture, FaPlaneArrival, FaPlaneCircleCheck } from "react-icons/fa6";
import { useState } from "react";

interface Partner {
  name: string;
  description: string;
  website: string;
  foundedYear: number;
  icon: React.ReactNode;
}

const partners: Partner[] = [
  {
    name: 'Air Senegal',
    description: 'Compagnie aérienne nationale du Sénégal, offrant des vols domestiques et internationaux.',
    website: 'https://www.airsenegal.com',
    foundedYear: 2016,
    icon: <FaPlane className="w-12 h-12 text-blue-600" />
  },
  {
    name: 'Turkish Airlines',
    description: 'Plus grande compagnie aérienne de Turquie, desservant plus de 300 destinations.',
    website: 'https://www.turkishairlines.com',
    foundedYear: 1933,
    icon: <FaPlaneDeparture className="w-12 h-12 text-red-600" />
  },
  {
    name: 'Air France',
    description: 'Compagnie aérienne française de référence, membre fondateur de SkyTeam.',
    website: 'https://www.airfrance.com',
    foundedYear: 1933,
    icon: <FaPlaneArrival className="w-12 h-12 text-blue-800" />
  },
  {
    name: 'Emirates',
    description: 'Compagnie aérienne basée à Dubaï, reconnue pour son service premium.',
    website: 'https://www.emirates.com',
    foundedYear: 1985,
    icon: <FaPlaneCircleCheck className="w-12 h-12 text-emerald-600" />
  }
];

const Partners = () => {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  const handlePartnerHover = (partnerName: string | null) => {
    setHoveredPartner(partnerName);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nos Partenaires</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous collaborons avec les meilleures compagnies aériennes du monde pour vous offrir 
            une expérience de voyage exceptionnelle et des services de qualité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => handlePartnerHover(partner.name)}
              onMouseLeave={() => handlePartnerHover(null)}
              role="article"
              aria-label={`Information sur ${partner.name}`}
            >
              <div className="flex justify-center items-center h-32 mb-4">
                {partner.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-center">{partner.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{partner.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Depuis {partner.foundedYear}</span>
                <a 
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  aria-label={`Visiter le site web de ${partner.name}`}
                >
                  Visiter le site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 
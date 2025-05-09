'use client';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Billets d\'Avion',
    description: 'Meilleurs prix pour toutes destinations',
    icon: 'fa-solid fa-plane'
  },
  {
    title: 'Tours & Circuits',
    description: 'Visites guidées et circuits personnalisés',
    icon: 'fa-solid fa-map-location-dot'
  },
  {
    title: 'Hajj & Omra',
    description: 'Voyages spirituels facilités',
    icon: 'fa-solid fa-mosque'
  },
  {
    title: 'Offres de Dernière Minute',
    description: 'Offres spéciales et réductions',
    icon: 'fa-solid fa-bolt'
  }
];

const Services = () => {
  const handleServiceClick = (serviceTitle: string) => {
    // You can implement the navigation or action here
    console.log(`Service clicked: ${serviceTitle}`);
  };

  return (
    <section className="relative py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Nos Services
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Comment pouvons-nous vous aider ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de voyage conçus pour rendre votre expérience inoubliable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              role="article"
              aria-labelledby={`service-title-${index}`}
            >
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <i 
                    className={`${service.icon} text-3xl text-blue-600 group-hover:text-[#EA8D1C] transition-colors`}
                    aria-hidden="true"
                  />
                </div>
                
                <h3 
                  id={`service-title-${index}`}
                  className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors"
                >
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <button 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-[#EA8D1C] transition-colors"
                  onClick={() => handleServiceClick(service.title)}
                  aria-label={`En savoir plus sur ${service.title}`}
                >
                  En savoir plus
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

export default Services; 
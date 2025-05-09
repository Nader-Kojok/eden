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
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Nos Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all group"
            >
              <i className={`${service.icon} text-4xl mb-4 text-blue-600 group-hover:text-[#EA8D1C] transition-colors`}></i>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 
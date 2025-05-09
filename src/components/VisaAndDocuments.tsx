'use client';

interface VisaService {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const visaServices: VisaService[] = [
  {
    title: 'Visa Schengen',
    description: 'Assistance complète pour l&apos;obtention de votre visa Schengen',
    icon: 'fa-solid fa-passport',
    features: [
      'Réservation d&apos;hôtel',
      'Attestation bancaire',
      'Assurance voyage',
      'Billet d&apos;avion'
    ]
  },
  {
    title: 'Visa Hajj & Omra',
    description: 'Accompagnement pour votre visa de pèlerinage',
    icon: 'fa-solid fa-mosque',
    features: [
      'Visa saoudien',
      'Vaccination obligatoire',
      'Certificat de conversion',
      'Réservation hôtel'
    ]
  },
  {
    title: 'Documents de Voyage',
    description: 'Préparation de tous vos documents de voyage',
    icon: 'fa-solid fa-file-circle-check',
    features: [
      'Passeport',
      'Carte d&apos;identité',
      'Certificat de vaccination',
      'Autorisation de sortie'
    ]
  }
];

const VisaAndDocuments = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Documents & Visa
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Voyagez en Toute Sérénité</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous vous accompagnons dans toutes les démarches administratives pour un voyage sans tracas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visaServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <i className={`${service.icon} text-3xl text-blue-600`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="inline-flex items-center text-blue-600 font-medium hover:text-[#EA8D1C] transition-colors">
                En savoir plus
                <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Des Questions sur les Visas ?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Notre équipe d&apos;experts est là pour vous accompagner dans toutes vos démarches administratives
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-[#EA8D1C] text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
              Contactez-nous
              <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#EA8D1C] to-blue-500" />
    </section>
  );
};

export default VisaAndDocuments; 
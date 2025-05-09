interface VisaService {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const visaServices: VisaService[] = [
  {
    title: 'Visa Schengen',
    description: 'Assistance complète pour l\'obtention de votre visa Schengen',
    icon: 'fa-solid fa-passport',
    features: [
      'Réservation d\'hôtel',
      'Attestation bancaire',
      'Assurance voyage',
      'Billet d\'avion'
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
      'Carte d\'identité',
      'Certificat de vaccination',
      'Autorisation de sortie'
    ]
  }
];

const VisaAndDocuments = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Visa & Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visaServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group">
              <i className={`${service.icon} text-4xl mb-4 text-blue-600 group-hover:text-[#EA8D1C] transition-colors`}></i>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <i className="fa-solid fa-check text-green-500 group-hover:text-[#EA8D1C] mr-2 transition-colors"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaAndDocuments; 
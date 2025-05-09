'use client';

import { CreditCard, Calendar, Shield, TrendingUp, Clock, Users } from 'lucide-react';

const PaymentPlans = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: "Paiement Flexible",
      description: "Choisissez le nombre de mensualités qui vous convient le mieux"
    },
    {
      icon: Calendar,
      title: "Échéances Adaptées",
      description: "Planifiez vos paiements selon vos revenus et votre budget"
    },
    {
      icon: Shield,
      title: "Sécurité Garantie",
      description: "Transactions sécurisées et protection de vos données"
    },
    {
      icon: TrendingUp,
      title: "Sans Frais Supplémentaires",
      description: "Profitez de nos services sans coûts cachés"
    },
    {
      icon: Clock,
      title: "Traitement Rapide",
      description: "Validation de votre dossier sous 24h pour un départ rapide"
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Un conseiller dédié pour vous guider dans vos démarches"
    }
  ];

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Paiement
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Plans de Paiement Flexibles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Réalisez vos rêves de voyage avec nos solutions de paiement adaptées à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => window.location.href = '/contact'}
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-[#EA8D1C] transition-colors"
          >
            Demander plus d&apos;informations
          </button>
          <button 
            onClick={() => window.location.href = '/services'}
            className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors"
          >
            Voir nos services
          </button>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#EA8D1C] to-blue-500" />
    </section>
  );
};

export default PaymentPlans; 
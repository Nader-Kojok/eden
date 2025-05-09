'use client';

import { CreditCard, Calendar, Shield, TrendingUp } from 'lucide-react';

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
    }
  ];

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleContactClick();
    }
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Paiement en Toute Sérénité
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profitez de nos services avec un paiement adapté à vos besoins. 
            Choisissez le plan qui vous convient et gérez vos paiements en toute flexibilité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              role="article"
              aria-labelledby={`benefit-title-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 
                  id={`benefit-title-${index}`}
                  className="text-xl font-semibold text-gray-900 mb-2"
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleContactClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label="En savoir plus sur nos plans de paiement"
          >
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlans; 
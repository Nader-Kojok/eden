'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Quels sont les documents nécessaires pour un voyage ?',
    answer: 'Les documents essentiels incluent un passeport valide, visa (selon la destination), billets d\'avion, réservation d\'hôtel, et assurance voyage. Pour le Hajj et l\'Omra, des documents supplémentaires sont requis.'
  },
  {
    question: 'Comment réserver un voyage avec Eden Tours & Travel ?',
    answer: 'Vous pouvez réserver via notre site web, par téléphone, ou en visitant notre agence à Dakar. Nous acceptons les paiements en espèces, par virement bancaire, ou par carte de crédit.'
  },
  {
    question: 'Quelle est la politique d\'annulation ?',
    answer: 'Notre politique d\'annulation varie selon le type de voyage. Pour les vols, les conditions dépendent de la compagnie aérienne. Pour les forfaits, nous appliquons des frais d\'annulation progressifs.'
  },
  {
    question: 'Proposez-vous des services de transfert aéroport ?',
    answer: 'Oui, nous proposons des services de transfert aéroport pour tous nos clients. Le service peut être réservé lors de la réservation de votre voyage.'
  },
  {
    question: 'Quels sont les délais pour obtenir un visa ?',
    answer: 'Les délais varient selon le type de visa et la destination. Pour un visa Schengen, comptez environ 15 jours ouvrables. Pour le visa Hajj/Omra, le délai est généralement de 7 à 10 jours ouvrables. Nous vous recommandons de faire votre demande au moins 1 mois avant votre départ.'
  },
  {
    question: 'Comment fonctionne l\'assurance voyage ?',
    answer: 'Nous proposons différentes formules d\'assurance voyage adaptées à vos besoins. L\'assurance couvre généralement les frais médicaux, l\'annulation, le rapatriement et la perte de bagages. Nous vous conseillons de souscrire à une assurance dès la réservation de votre voyage.'
  },
  {
    question: 'Quelles sont les conditions pour le Hajj et l\'Omra ?',
    answer: 'Pour le Hajj et l\'Omra, vous devez être musulman, avoir un passeport valide d\'au moins 6 mois, et être en bonne santé. Nous vous accompagnons dans toutes les démarches administratives et religieuses nécessaires, y compris la réservation des hôtels à La Mecque et Médine.'
  },
  {
    question: 'Proposez-vous des voyages en groupe ?',
    answer: 'Oui, nous organisons régulièrement des voyages en groupe pour différentes destinations. Ces voyages offrent plusieurs avantages : tarifs préférentiels, accompagnateur dédié, et programme d\'activités organisé. Consultez notre calendrier des départs de groupe sur notre site web.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Questions Fréquentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trouvez rapidement des réponses à vos questions sur nos services et procédures
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="text-gray-600">{faq.answer}</p>
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

export default FAQ; 
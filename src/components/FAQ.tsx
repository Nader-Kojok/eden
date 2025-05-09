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
    question: 'Comment réserver un voyage avec Eden Travel ?',
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
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20">Questions Fréquentes</h2>
        <div className="space-y-6">
          {faqItems.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#EA8D1C] transition-colors pr-4">
                  {faq.question}
                </h3>
                <i className="fa-solid fa-chevron-down text-gray-500 group-hover:text-[#EA8D1C] transition-all group-open:rotate-180 flex-shrink-0"></i>
              </summary>
              <div className="px-8 pb-8">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
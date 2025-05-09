"use client";

import { useEffect, useRef } from 'react';

interface Partner {
  name: string;
  initials: string;
  color: string;
}

const partners: Partner[] = [
  { name: 'Air Senegal', initials: 'AS', color: '#1E40AF' },
  { name: 'Turkish Airlines', initials: 'TA', color: '#B91C1C' },
  { name: 'Air France', initials: 'AF', color: '#1E3A8A' },
  { name: 'Emirates', initials: 'EM', color: '#047857' },
  { name: 'Qatar Airways', initials: 'QA', color: '#7C2D12' },
  { name: 'Marriott', initials: 'MR', color: '#1E3A8A' },
  { name: 'Hilton', initials: 'HL', color: '#1E40AF' },
  { name: 'Accor', initials: 'AC', color: '#B91C1C' },
  { name: 'Booking.com', initials: 'BK', color: '#047857' },
  { name: 'Expedia', initials: 'EX', color: '#7C2D12' },
  { name: 'TripAdvisor', initials: 'TA', color: '#1E3A8A' },
  { name: 'Airbnb', initials: 'AB', color: '#B91C1C' }
];

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const lastTimestampRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Reduced speed for smoother movement

    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }

      const elapsed = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (!scrollContainer) return;

      scrollAmount += scrollSpeed * (elapsed / 16); // Normalize to 60fps
      
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
      animationRef.current = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    startAnimation();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Partenaires
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos Partenaires de Confiance</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous collaborons avec les meilleurs partenaires du secteur pour vous offrir des services de qualité
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden whitespace-nowrap py-4 will-change-scroll"
          >
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div 
                key={`first-${index}`}
                className="group flex-shrink-0 w-48 aspect-[3/2] bg-white rounded-2xl border border-gray-100/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_-3px_rgba(0,0,0,0.1),0_12px_24px_-2px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                  style={{ 
                    backgroundColor: partner.color,
                    boxShadow: `0 4px 12px ${partner.color}40`
                  }}
                >
                  {partner.initials}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium text-gray-900 truncate">{partner.name}</p>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div 
                key={`second-${index}`}
                className="group flex-shrink-0 w-48 aspect-[3/2] bg-white rounded-2xl border border-gray-100/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_-3px_rgba(0,0,0,0.1),0_12px_24px_-2px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                  style={{ 
                    backgroundColor: partner.color,
                    boxShadow: `0 4px 12px ${partner.color}40`
                  }}
                >
                  {partner.initials}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium text-gray-900 truncate">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#EA8D1C] to-blue-500" />
    </section>
  );
};

export default Partners; 
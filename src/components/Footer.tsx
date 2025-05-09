import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#EA8D1C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Eden Tours & Travel</h3>
            <p className="text-orange-50">
              Votre partenaire de confiance pour tous vos besoins de voyage, des vols aux pèlerinages.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-orange-50 hover:text-white">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-orange-50 hover:text-white">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-orange-50 hover:text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-orange-50 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/flights" className="text-orange-50 hover:text-white">
                  <i className="fa-solid fa-plane-departure mr-2"></i>
                  Réservation de Vols
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-orange-50 hover:text-white">
                  <i className="fa-solid fa-route mr-2"></i>
                  Tours & Circuits
                </Link>
              </li>
              <li>
                <Link href="/hajj-umrah" className="text-orange-50 hover:text-white">
                  <i className="fa-solid fa-kaaba mr-2"></i>
                  Hajj & Omra
                </Link>
              </li>
              <li>
                <Link href="/last-minute" className="text-orange-50 hover:text-white">
                  <i className="fa-solid fa-clock mr-2"></i>
                  Offres de Dernière Minute
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contactez-nous</h4>
            <ul className="space-y-2 text-orange-50">
              <li>
                <i className="fa-solid fa-envelope mr-2"></i>
                contact@eden-travel.com
              </li>
              <li>
                <i className="fa-solid fa-phone mr-2"></i>
                +221 XX XXX XX XX
              </li>
              <li>
                <i className="fa-solid fa-location-dot mr-2"></i>
                Dakar, Sénégal
              </li>
            </ul>
            {/* Social Links */}
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="text-orange-50 hover:text-white text-xl"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-orange-50 hover:text-white text-xl"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-orange-50 hover:text-white text-xl"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white pt-8 text-center text-sm text-orange-50">
          <p>© {new Date().getFullYear()} Eden Tours & Travel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
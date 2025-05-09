import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import PopularDestinations from "@/components/PopularDestinations";
import Testimonials from "@/components/Testimonials";
import Promotions from "@/components/Promotions";
import VisaAndDocuments from "@/components/VisaAndDocuments";
import PaymentPlans from "@/components/PaymentPlans";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full relative">
      <Hero />
      
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <Services />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <About />
        </div>
      </section>

      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <PopularDestinations />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <Testimonials />
        </div>
      </section>

      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <Promotions />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <VisaAndDocuments />
        </div>
      </section>

      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <PaymentPlans />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <FAQ />
        </div>
      </section>

      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <Partners />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <ContactForm />
        </div>
      </section>

      {/* Floating Action Button */}
      <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        size="icon"
        asChild
      >
        <a href="tel:+1234567890" aria-label="Call us">
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
}

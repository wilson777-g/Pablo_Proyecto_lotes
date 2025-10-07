import { Hero } from "@/components/Hero";
import { PropertyTypes } from "@/components/PropertyTypes";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { AgentProfile } from "@/components/AgentProfile";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PropertyTypes />
      <FeaturedProperties />
      <AgentProfile />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

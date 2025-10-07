import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Award, MessageCircle } from "lucide-react";

export const AgentProfile = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/573123456789?text=Hola%20Pablo,%20quiero%20información%20sobre%20las%20propiedades", "_blank");
  };

  const handleTikTok = () => {
    window.open("https://www.tiktok.com/@pablocamacho", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-border shadow-[var(--shadow-elegant)]">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-gradient-to-br from-primary to-accent p-8 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                    <div className="text-center text-primary-foreground">
                      <Award className="w-16 h-16 mx-auto mb-2" />
                      <p className="font-semibold">Asesor</p>
                      <p className="text-sm">Certificado</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 bg-card">
                  <h3 className="text-3xl font-bold mb-2 text-foreground">
                    Pablo Fernando Camacho Culma
                  </h3>
                  <p className="text-accent font-semibold mb-4">Asesor Comercial Inmobiliario</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Con años de experiencia en el sector inmobiliario de Cundinamarca y Tolima, 
                    te ayudo a encontrar la propiedad perfecta que se ajuste a tus necesidades y 
                    presupuesto. Especializado en lotes, casas y apartamentos.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="w-5 h-5 mr-3 text-primary" />
                      <span>+57 312 345 6789</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="w-5 h-5 mr-3 text-primary" />
                      <span>pablo.camacho@propiedades.com</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Sígueme en redes sociales:</h4>
                    <div className="flex gap-3">
                      <button
                        onClick={handleWhatsApp}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all shadow-md hover:shadow-lg"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleTikTok}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#000000] hover:bg-[#222222] text-white transition-all shadow-md hover:shadow-lg"
                        aria-label="TikTok"
                      >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                    size="lg"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Contactar por WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

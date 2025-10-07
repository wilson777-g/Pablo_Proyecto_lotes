import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es requerido").max(100),
  telefono: z.string().trim().min(7, "Teléfono inválido").max(20),
  email: z.string().trim().email("Email inválido").max(255),
  mensaje: z.string().trim().min(1, "El mensaje es requerido").max(1000),
});

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      const message = encodeURIComponent(
        `Hola Pablo, mi nombre es ${formData.nombre}.\n\nTeléfono: ${formData.telefono}\nEmail: ${formData.email}\n\nMensaje: ${formData.mensaje}`
      );
      window.open(`https://wa.me/573123456789?text=${message}`, "_blank");
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Te redirigiremos a WhatsApp para continuar la conversación.",
      });
      
      setFormData({ nombre: "", telefono: "", email: "", mensaje: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Error en el formulario",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section className="py-20 bg-muted" id="contacto">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            ¿Interesado en una Propiedad?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Déjanos tus datos y te contactaremos de inmediato
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] border border-border">
            <div>
              <Input
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
                className="h-12"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                required
                className="h-12"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12"
              />
            </div>
            <div>
              <Textarea
                placeholder="Cuéntanos qué tipo de propiedad buscas..."
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                required
                rows={5}
                className="resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12"
              size="lg"
            >
              <Send className="mr-2 w-5 h-5" />
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

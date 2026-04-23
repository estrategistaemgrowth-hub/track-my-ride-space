import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { z } from "zod";
import { OPEN_CONTACT_POPUP_EVENT } from "@/lib/contactPopup";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Informe seu nome").max(100),
  phone: z.string().trim().min(1, "Informe seu telefone").max(20),
  email: z.string().trim().email("Email inválido").max(255),
  message: z.string().trim().max(500).optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactPopup = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [form, setForm] = useState<ContactForm>({ name: "", phone: "", email: "", message: "" });

  useEffect(() => {
    const dismissed = sessionStorage.getItem("contact-popup-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      setSubmitted(false);
      setOpen(true);
    };
    window.addEventListener(OPEN_CONTACT_POPUP_EVENT, handler);
    return () => window.removeEventListener(OPEN_CONTACT_POPUP_EVENT, handler);
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("contact-popup-dismissed", "true");
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const text = `Olá! Meu nome é ${encodeURIComponent(result.data.name)}.%0A` +
      `Email: ${encodeURIComponent(result.data.email)}%0A` +
      `Telefone: ${encodeURIComponent(result.data.phone)}%0A` +
      (result.data.message ? `Mensagem: ${encodeURIComponent(result.data.message)}` : "");

    window.open(`https://wa.me/5547997725644?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(handleClose, 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-primary px-6 py-5 flex items-center justify-between">
          <div>
            <p className="font-heading text-secondary text-xs font-bold tracking-widest uppercase">Fale Conosco</p>
            <h3 className="font-heading text-xl font-extrabold text-primary-foreground mt-1">
              Solicite um orçamento
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
          >
            <X className="text-primary-foreground" size={16} />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
              <Send className="text-secondary" size={28} />
            </div>
            <p className="font-heading font-bold text-foreground text-lg">Mensagem enviada!</p>
            <p className="font-body text-muted-foreground text-sm mt-2">Entraremos em contato em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
            <div>
              <label className="font-heading text-sm font-semibold text-foreground mb-1 block">Nome *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Seu nome completo"
                className="w-full px-4 py-3 rounded-lg border border-border bg-muted font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="font-heading text-sm font-semibold text-foreground mb-1 block">Telefone *</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="(00) 00000-0000"
                className="w-full px-4 py-3 rounded-lg border border-border bg-muted font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="font-heading text-sm font-semibold text-foreground mb-1 block">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-muted font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="font-heading text-sm font-semibold text-foreground mb-1 block">Mensagem</label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Como podemos ajudar?"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-border bg-muted font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground py-3.5 rounded-lg font-heading font-bold text-sm hover:brightness-110 transition glow-pulse flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Enviar via WhatsApp
            </button>

            <p className="font-body text-xs text-muted-foreground text-center">
              Seus dados não serão compartilhados com terceiros.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPopup;

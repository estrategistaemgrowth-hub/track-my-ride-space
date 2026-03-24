import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contato" className="py-24 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="font-heading text-secondary font-bold text-sm tracking-widest uppercase mb-3">Contato</p>
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Como podemos atender sua empresa
        </h2>
        <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
          A TFP Logística é a parceira ideal para empresas que buscam regularidade, previsibilidade e segurança nas entregas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <a href="tel:+5547997725644" className="bg-background rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition group">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center group-hover:bg-secondary transition-colors">
            <Phone className="text-primary-foreground" size={28} />
          </div>
          <h3 className="font-heading font-bold text-foreground mb-1">Telefone</h3>
          <p className="font-body text-muted-foreground">(47) 99772-5644</p>
        </a>

        <a href="mailto:comercial.transporteseguro@outlook.com" className="bg-background rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition group">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center group-hover:bg-secondary transition-colors">
            <Mail className="text-primary-foreground" size={28} />
          </div>
          <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
          <p className="font-body text-muted-foreground text-sm break-all">comercial.transporteseguro@outlook.com</p>
        </a>

        <div className="bg-background rounded-2xl p-8 text-center shadow-lg">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
            <MapPin className="text-primary-foreground" size={28} />
          </div>
          <h3 className="font-heading font-bold text-foreground mb-1">Endereço</h3>
          <p className="font-body text-muted-foreground">Nº 271 – Sala 4</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;

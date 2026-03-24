import logo from "@/assets/logo-clean.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-12 border-t border-primary-foreground/10">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 items-start mb-8">
        <div>
          <img src={logo} alt="TFP Logística" className="h-16 mb-4" />
          <p className="font-body text-sm text-primary-foreground/60">
            Segurança no Transporte · Confiança na Entrega.
          </p>
        </div>

        <a href="tel:+5547997725644" className="flex items-start gap-3 group">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
            <Phone className="text-secondary" size={18} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm">Telefone</h4>
            <p className="font-body text-primary-foreground/60 text-sm">(47) 99772-5644</p>
          </div>
        </a>

        <a href="mailto:comercial.transporteseguro@outlook.com" className="flex items-start gap-3 group">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
            <Mail className="text-secondary" size={18} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm">Email</h4>
            <p className="font-body text-primary-foreground/60 text-sm break-all">comercial.transporteseguro@outlook.com</p>
          </div>
        </a>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="text-secondary" size={18} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm">Endereço</h4>
            <p className="font-body text-primary-foreground/60 text-sm">Nº 271 – Sala 4</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6">
        <p className="font-body text-xs text-primary-foreground/40 text-center">
          © {new Date().getFullYear()} TFP Logística. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

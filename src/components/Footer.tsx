import logo from "@/assets/logo-clean.png";
import { Phone, Mail, MapPin } from "lucide-react";
import { openContactPopup } from "@/lib/contactPopup";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Cobertura", href: "#cobertura" },
];

const Footer = () => (
  <footer className="bg-primary">
    {/* Main footer */}
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src={logo} alt="TFP Logística" className="h-20 mb-5" />
          <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">
            Transporte rodoviário de cargas com agilidade, segurança e cobertura em todo o território nacional.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-heading font-bold text-secondary text-sm tracking-widest uppercase mb-5">Navegação</h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-body text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-secondary text-sm tracking-widest uppercase mb-5">Contato</h4>
          <ul className="space-y-4">
            <li>
              <button type="button" onClick={openContactPopup} className="flex items-center gap-3 group text-left">
                <div className="w-9 h-9 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center group-hover:border-secondary/40 transition-colors">
                  <Phone className="text-secondary" size={16} />
                </div>
                <div>
                  <p className="font-body text-sm text-primary-foreground/80 group-hover:text-secondary transition-colors">(47) 99772-5644</p>
                </div>
              </button>
            </li>
            <li>
              <a href="mailto:comercial.transporteseguro@outlook.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center group-hover:border-secondary/40 transition-colors">
                  <Mail className="text-secondary" size={16} />
                </div>
                <div>
                  <p className="font-body text-xs text-primary-foreground/80 group-hover:text-secondary transition-colors break-all">comercial.transporteseguro@outlook.com</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-heading font-bold text-secondary text-sm tracking-widest uppercase mb-5">Endereço</h4>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-secondary" size={16} />
            </div>
            <p className="font-body text-sm text-primary-foreground/80">Nº 271 – Sala 4</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/8">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-body text-xs text-primary-foreground/35">
          © {new Date().getFullYear()} TFP Logística. Todos os direitos reservados.
        </p>
        <p className="font-body text-xs text-primary-foreground/35">
          Segurança no Transporte · Confiança na Entrega
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

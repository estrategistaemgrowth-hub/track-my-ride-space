import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-clean.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio">
          <img src={logo} alt="TFP Logística" className="h-20" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading text-sm font-semibold text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+5547997725644"
          className="hidden lg:flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-heading font-bold text-sm hover:brightness-110 transition"
        >
          <Phone size={16} />
          (47) 99772-5644
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-heading text-sm font-semibold text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+5547997725644"
            className="mx-6 mt-2 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-heading font-bold text-sm"
          >
            <Phone size={16} />
            (47) 99772-5644
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

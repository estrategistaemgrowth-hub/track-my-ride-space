import logo from "@/assets/logo-clean.png";

const Footer = () => (
  <footer className="bg-primary py-12 border-t border-primary-foreground/10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="TFP Logística" className="h-16" />
        <p className="font-body text-sm text-primary-foreground/60 text-center">
          © {new Date().getFullYear()} TFP Logística. Todos os direitos reservados. Segurança no Transporte · Confiança na Entrega.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

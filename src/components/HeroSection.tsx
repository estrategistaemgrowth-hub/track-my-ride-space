import heroImg from "@/assets/hero-truck.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Caminhão TFP Logística na estrada"
        className="w-full h-full object-cover animate-[scale-in_1.2s_ease-out_forwards]"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
    </div>

    <div className="container mx-auto px-4 relative z-10 pt-24">
      <div className="max-w-2xl">
        <p className="font-heading text-secondary font-bold text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
          Segurança no Transporte · Confiança na Entrega
        </p>
        <h1
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-900 text-primary-foreground leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Vamos levar sua carga <span className="text-secondary">mais longe.</span>
        </h1>
        <p
          className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Transporte rodoviário de cargas com agilidade, segurança e cobertura em todo o território nacional.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="#contato"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-heading font-bold text-base hover:brightness-110 transition glow-pulse"
          >
            Solicite um Orçamento
          </a>
          <a
            href="#quem-somos"
            className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-bold text-base hover:bg-primary-foreground/10 transition"
          >
            Conheça a TFP
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

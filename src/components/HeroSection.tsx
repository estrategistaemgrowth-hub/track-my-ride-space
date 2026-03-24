import heroImg from "@/assets/hero-truck.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-primary">
    {/* Animated road background */}
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,30%,15%)] via-[hsl(210,25%,20%)] to-[hsl(210,20%,25%)]" />
    
    {/* Moving road lines */}
    <div className="absolute bottom-0 left-0 right-0 h-32">
      <div className="absolute inset-0 bg-[hsl(0,0%,20%)]" />
      <div className="animate-road-lines absolute top-1/2 left-0 w-[200%] h-1 flex gap-16">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-20 h-1 bg-secondary/60 rounded flex-shrink-0" />
        ))}
      </div>
    </div>

    {/* Truck image with driving animation */}
    <div className="absolute right-0 bottom-16 md:bottom-20 w-[60%] md:w-[55%] lg:w-[50%] z-[1] animate-truck-drive">
      <img
        src={heroImg}
        alt="Caminhão TFP Logística na estrada"
        className="w-full h-auto object-contain drop-shadow-2xl animate-truck-bounce"
      />
    </div>

    {/* Overlay gradient for text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent z-[2]" />

    <div className="container mx-auto px-4 relative z-10 pt-24">
      <div className="max-w-2xl">
        <p className="font-heading text-secondary font-bold text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
          Segurança no Transporte · Confiança na Entrega
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-900 text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Vamos levar sua carga <span className="text-secondary">mais longe.</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Transporte rodoviário de cargas com agilidade, segurança e cobertura em todo o território nacional.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="#contato"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-heading font-bold text-base hover:brightness-110 transition"
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

import { Package, Truck, Settings, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Package, title: "Carga Fracionada", desc: "Ideal para menores volumes, compartilhando o veículo com outras cargas." },
  { icon: Truck, title: "Carga Lotação", desc: "Veículo exclusivo para um único embarcador." },
  { icon: Settings, title: "Carga Dedicada", desc: "Operação customizada conforme a necessidade do cliente." },
  { icon: Zap, title: "Serviço Expresso", desc: "Solução rápida para cargas urgentes, com prioridade na coleta e entrega." },
];

const ServicesSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="servicos" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-16 reveal ${titleVisible ? "visible" : ""}`}>
          <p className="font-heading text-secondary font-bold text-sm tracking-widest uppercase mb-3">O Que Fazemos</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-primary-foreground">
            Soluções completas em transporte
          </h2>
        </div>
        <div ref={gridRef} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children ${gridVisible ? "" : ""}`}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 group card-lift reveal-scale ${gridVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 group-hover:rotate-6 transition-all duration-300">
                <s.icon className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary-foreground mb-3">{s.title}</h3>
              <p className="font-body text-primary-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

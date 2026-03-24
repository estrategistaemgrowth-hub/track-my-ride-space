import { Apple, ShoppingBag, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const segments = [
  { icon: Apple, label: "Alimentos e produtos alimentícios" },
  { icon: ShoppingBag, label: "Mercadorias secas dentro das normas de transporte" },
  { icon: Wrench, label: "Operações personalizadas conforme o tipo de produto e a necessidade do embarcador" },
];

const SegmentsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-16 reveal ${titleVisible ? "visible" : ""}`}>
          <p className="font-heading text-secondary font-bold text-sm tracking-widest uppercase mb-3">Segmentos Atendidos</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground">
            Foco em produtos seguros
          </h2>
          <p className="font-body text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Atuamos com foco em produtos que não envolvem riscos químicos, garantindo segurança e conformidade.
          </p>
        </div>
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {segments.map((s, i) => (
            <div
              key={s.label}
              className={`bg-background rounded-2xl p-8 shadow-lg text-center card-lift reveal-scale ${gridVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <s.icon className="text-secondary" size={28} />
              </div>
              <p className="font-heading font-semibold text-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;

import { Globe, TruckIcon, Route } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { icon: Globe, title: "Atuação em todos os estados brasileiros" },
  { icon: TruckIcon, title: "Soluções de transporte para diferentes regiões e modais de distribuição" },
  { icon: Route, title: "Planejamento de rotas alinhado a prazo, custo e nível de serviço" },
];

const CoverageSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  return (
    <section id="cobertura" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={leftRef} className={`reveal-left ${leftVisible ? "visible" : ""}`}>
            <p className="font-heading text-secondary font-bold text-sm tracking-widest uppercase mb-3">Cobertura Geográfica Nacional</p>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              Onde o cliente vende, a TFP chega.
            </h2>
            <p className="font-body text-primary-foreground/70 text-lg mb-10">
              Porque resultado só existe quando o produto chega no lugar certo.
            </p>
            <div className="space-y-6">
              {items.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 card-lift rounded-xl p-3"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex-shrink-0 flex items-center justify-center">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <p className="font-heading font-semibold text-primary-foreground pt-2">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div ref={rightRef} className={`flex items-center justify-center reveal-scale ${rightVisible ? "visible" : ""}`}>
            <div className="w-full max-w-md aspect-square rounded-full bg-primary-foreground/5 border-2 border-secondary/30 flex items-center justify-center relative float">
              <div className="text-center">
                <p className={`font-heading text-7xl font-black text-secondary count-up ${rightVisible ? "visible" : ""}`}>27</p>
                <p className="font-heading text-xl font-bold text-primary-foreground">estados atendidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;

import { ShieldCheck, FileCheck, Wifi, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: ShieldCheck, title: "Averbação integrada e direta", desc: "Oferecendo mais controle e rastreabilidade das operações seguradas" },
  { icon: FileCheck, title: "Apólice de seguro abrangente", desc: "Garantindo proteção à carga durante todo o trajeto" },
  { icon: Wifi, title: "Cobertura desde a coleta até a entrega", desc: "Seguindo as exigências legais e de mercado" },
  { icon: BarChart3, title: "Processos padronizados", desc: "Para reduzir riscos e preservar a integridade da mercadoria" },
];

const SecuritySection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="seguranca" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-16 reveal ${titleVisible ? "visible" : ""}`}>
          <p className="font-heading text-secondary font-bold text-sm tracking-widest uppercase mb-3">Segurança e Seguro de Cargas</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Segurança não é opcional
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Na TFP Logística, segurança é padrão da operação. O cliente embarca sabendo exatamente que sua carga está segurada e monitorada.
          </p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`relative bg-primary rounded-2xl p-8 text-center overflow-hidden group card-lift reveal-scale ${gridVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <f.icon className="text-secondary" size={36} />
              </div>
              <h3 className="font-heading font-bold text-primary-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-primary-foreground/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

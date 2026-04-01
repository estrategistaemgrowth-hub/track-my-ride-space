import truckImg from "@/assets/truck_new.png";
import { TrendingUp, Shield, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  return (
    <section id="quem-somos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={leftRef} className={`reveal-left ${leftVisible ? "visible" : ""}`}>
            <p className="font-heading text-secondary font-bold text-sm tracking-widest uppercase mb-3">Quem Somos</p>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Especialistas em transporte rodoviário de cargas
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              A TFP Logística é uma empresa especializada em transporte rodoviário de cargas, com atuação em todo o território nacional. Nosso foco é oferecer agilidade, segurança e flexibilidade, conectando empresas a seus clientes em todos os estados do país, com operações estruturadas e gestão profissional.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, label: "Agilidade", desc: "Entregas rápidas e eficientes" },
                { icon: Shield, label: "Segurança", desc: "Carga protegida e monitorada" },
                { icon: MapPin, label: "Cobertura", desc: "Todo território nacional" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="text-center card-lift rounded-xl p-4"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-primary flex items-center justify-center">
                    <item.icon className="text-secondary" size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{item.label}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div ref={rightRef} className={`relative reveal-right ${rightVisible ? "visible" : ""}`}>
            <img
              src={truckImg}
              alt="Caminhão TFP Logística"
              className="w-full drop-shadow-2xl"
              loading="lazy"
              width={1400}
              height={800}
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl font-heading font-extrabold text-2xl shadow-xl hidden md:block float">
              +10 anos<br /><span className="text-base font-semibold opacity-90">de experiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

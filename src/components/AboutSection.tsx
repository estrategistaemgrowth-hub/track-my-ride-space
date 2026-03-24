import warehouseImg from "@/assets/warehouse.jpg";
import { TrendingUp, Shield, MapPin } from "lucide-react";

const AboutSection = () => (
  <section id="quem-somos" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
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
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-primary flex items-center justify-center">
                  <item.icon className="text-secondary" size={26} />
                </div>
                <h3 className="font-heading font-bold text-foreground">{item.label}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={warehouseImg} alt="Armazém TFP Logística" className="rounded-2xl shadow-2xl w-full" loading="lazy" width={1280} height={720} />
          <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl font-heading font-extrabold text-2xl shadow-xl hidden md:block">
            +10 anos<br /><span className="text-base font-semibold opacity-90">de experiência</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

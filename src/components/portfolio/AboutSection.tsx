import { User, MapPin, Calendar, Coffee } from "lucide-react";

const stats = [
  { value: "3+", label: "Anos de experiência" },
  { value: "3+", label: "Empresas onde trabalhei" },
  { value: "10+", label: "Certificações obtidas" },
  { value: "∞", label: "Café consumido" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono text-primary text-sm">01. sobre mim</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Desenvolvedora apaixonada por{" "}
              <span className="gradient-blue-text">criar experiências</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Sou uma desenvolvedora Full Stack com mais de 3 anos de experiência
                construindo aplicações web modernas e escaláveis. Tenho foco em
                escrever código limpo, bem estruturado e de fácil manutenção.
              </p>
              <p>
                Trabalho com tecnologias como React, Node.js, TypeScript, Java e
                bancos de dados SQL e NoSQL. Gosto muito de UI/UX e sempre me
                preocupo com a experiência do usuário final.
              </p>
              <p>
                Quando não estou codando, estou aprendendo algo novo, contribuindo
                para projetos open source ou tomando café enquanto leio sobre
                as últimas tendências em tecnologia.
              </p>
            </div>

            {/* Info pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: MapPin, text: "Florianópolis, Brasil" },
                { icon: Calendar, text: "Disponível de segunda à sexta-feira" },
                { icon: Coffee, text: "Viciada em café" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border text-sm text-muted-foreground"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/30 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.1)] transition-all duration-300 group"
              >
                <div className="text-4xl font-bold gradient-blue-text mb-2 group-hover:text-glow transition-all">
                  {value}
                </div>
                <div className="text-muted-foreground text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

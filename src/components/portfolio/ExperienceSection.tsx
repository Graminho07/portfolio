import { Briefcase, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Estudante - Técnico",
    company: "Sesi Senai",
    period: "2021 - 2023",
    description:
      "Aos 16 anos, no Ensino Médio, comecei a estudar tecnologia e me apaixonei pela área, tive matérias como: Redes de computadores, Lógica de Programação, Banco de Dados, Teste e Manutenção de Sistemas, Desenvolvimento de Software, entre outras. No final do ano de 2023, me formei como Técnica em Desenvolvimento de Sistemas, e desde então tenho me aperfeiçoado cada vez mais.",
    tags: ["React", "React Native", "Java", "Node.js", "TypeScript", "AWS", "PostgreSQL", "MySQL", "Git"],
    current: false,
  },
  {
    role: "Estudante - Faculdade",
    company: "Estácio",
    period: "2024 - Presente",
    description:
      "Após o Ensino Médio, decidi que gostaria de fazer Ciência da Computação, e atualmente estou cursando o 5° período, onde eu tenho estudado muito por fora da faculdade, com a ajuda sempre presente do meu mentor particular.",
    tags: ["Ciência da Computação"],
    current: true,
  },
  {
    role: "Full-Stack Freelancer",
    company: "Altys",
    period: "2024 - 2025 Março",
    description:
      "Projetos freelance de diferentes clientes em desenvolvimento full-stack, com foco em React, Next.js, Node.js e MongoDB. Trabalho com design de interfaces modernas e responsivas.",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Git"],
    current: false,
  },
  {
    role: "Estágio em Desenvolvimento",
    company: "Dígitro",
    period: "Abril 2025 - Dezembro 2025",
    description:
      "Estágio em desenvolvimento de sistemas, mais focado em frontend e em sistemas legados, utilizando, React, TypeScript e Tailwind CSS e Java 6. Participei de projetos internos da empresa, contribuindo para a construção de interfaces de usuário modernas, além de colaborar com a equipe de desenvolvimento para implementar novas funcionalidades e melhorias.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Java", "Git"],
    current: false,
  },
  {
    role: "Dev Júnior",
    company: "Orsegups",
    period: "Dezembro 2025 - Atualmente",
    description:
      "Atualmente atuo como desenvolvedora júnior, com foco em desenvolvimento backend utilizando Java e Spring Boot, Participo ativamente do ciclo de desenvolvimento, desde a análise de requisitos até a implementação e manutenção de sistemas, buscando sempre entregar soluções eficientes e de alta qualidade.",
    tags: ["Java", "Spring Boot", "Git"],
    current: true,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experiencias" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono text-primary text-sm">02. experiências</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 top-6 items-center justify-center">
                  {exp.current && (
                    <span className="absolute w-8 h-8 rounded-full bg-primary/20 animate-ping" />
                  )}
                </div>

                {/* Period label */}
                <div
                  className={`md:w-1/2 flex ${
                    i % 2 === 0 ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12"
                  } items-start pt-4`}
                >
                  <span className="font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                {/* Card */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/30 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.08)] transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-xl text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          Atual
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground border border-border font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

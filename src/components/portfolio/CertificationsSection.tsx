import { Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "Técnica em Desenvolvimento de Sistemas",
    issuer: "Sesi Senai",
    date: "Dezembro 2023",
    url: "https://drive.google.com/file/d/1bBoaA2URla3UgzCUBPip4fKBM5dGEjdv/view?usp=sharing",
    tags: ["Senai", "Ensino Médio", "Técnico"],
    featured: true,
  },
  {
    title: "Introdução a Computação Quântica",
    issuer: "LNCC - Laboratório Nacional de Computação Científica",
    date: "Março 2025",
    url: "https://drive.google.com/file/d/1EHLTvSjvNEpW9ACtw95HGopU6Iyzd9XU/view?usp=sharing",
    tags: ["Computação Quântica", "Qubit", "Átomo"],
    featured: true,
  },
  {
    title: "Computação Quântica avançada",
    issuer: "LNCC - Laboratório Nacional de Computação Científica",
    date: "Março 2025",
    url: "https://drive.google.com/file/d/18702345678901234567890123456789/view?usp=sharing",
    tags: ["Computação Quântica", "Superposição", "Emaranhamento"],
    featured: true,
  },
  {
    title: "Aprendizado de máquina quântico",
    issuer: "LNCC - Laboratório Nacional de Computação Científica",
    date: "Março 2025",
    url: "https://drive.google.com/file/d/16208rXWGC81_0tce8ptV05FEYnCGiaxf/view?usp=sharing",
    tags: ["Computação Quântica", "Machine Learning", "Algoritmos"],
    featured: true,
  },
  {
    title: "Desenvolvimento backend Java",
    issuer: "Rocketseat",
    date: "Fevereiro 2024",
    url: "https://drive.google.com/file/d/1gv-37VdTY5RRVey-gJ37xCyM39dtPMhL/view?usp=sharing",
    tags: ["Java", "Spring Boot", "Maven"],
    featured: false,
  },
  {
    title: "Desenvolvimento backend Java",
    issuer: "Rocketseat",
    date: "Abril 2024",
    url: "https://drive.google.com/file/d/1ofO7Mc3yTePc5icnAdyCcZ_ZxjC1nRBP/view?usp=sharing",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    featured: false,
  },
  {
    title: "Desenvolvimento em Python",
    issuer: "Rocketseat",
    date: "Fevereiro 2025",
    url: "https://drive.google.com/file/d/1oWWm6yDNrnOVzokReIO54SyFX310gqZB/view?usp=sharing",
    tags: ["Python", "Flask", "SQLAlchemy"],
    featured: false,
  },
  {
    title: "Inteligência Artificial na prática",
    issuer: "Rocketseat",
    date: "Julho 2024",
    url: "https://drive.google.com/file/d/1Uq7N09zP5g1ViMKMuH2tTfMH_-9fwHD3/view?usp=sharing",
    tags: ["Python", "Inteligência Artificial", "Langchain"],
    featured: false,
  },
  {
    title: "Inteligência Artificial na prática",
    issuer: "Rocketseat",
    date: "Fevereiro 2025",
    url: "https://drive.google.com/file/d/1yMwH55uji4yDcAMhd2YMF76ACCZVfoAC/view?usp=sharing",
    tags: ["Python", "Inteligência Artificial", "duckduckgo"],
    featured: false,
  },
  {
    title: "JavaScript",
    issuer: "Rocketseat",
    date: "Setembro 2024",
    url: "https://drive.google.com/file/d/1XgoNfmBvIAgNIH0g7oSSz1xrT-3X5Y4A/view?usp=sharing",
    tags: ["JavaScript", "Node.js", "Async"],
    featured: false,
  },
  {
    title: "Certificado de participação em evento de tecnologia",
    issuer: "TDC",
    date: "Julho 2025",
    url: "https://drive.google.com/file/d/1PdrKjKpNhyne-AoM9UuajBg1zvcWWye8/view?usp=sharing",
    tags: ["TDC", "Eventos de T.I", "Participação"],
    featured: false,
  },
  {
    title: "Supercomputador Santos Dumont",
    issuer: "LNCC - Laboratório Nacional de Computação Científica",
    date: "Março 2025",
    url: "https://drive.google.com/file/d/1urgNGzFc8rs8RAAcSdU0Ts5ccsdKF0_d/view?usp=sharing",
    tags: ["Supercomputador Santos Dumont", "VPN", "Acesso Remoto"],
    featured: false,
  },
];

export default function CertificationsSection() {
  return (
    <section id="certificacoes" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Award className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono text-primary text-sm">04. certificações</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Featured certs */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {certifications
            .filter((c) => c.featured)
            .map((cert) => (
              <div
                className="p-7 rounded-2xl card-gradient border border-border hover:border-primary/30 hover:shadow-[0_0_40px_hsl(217_91%_60%/0.1)] transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded font-mono">
                      destaque
                    </span>
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary/80 text-sm font-medium mb-3">{cert.issuer}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Emitido: {cert.date}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-mono mb-5">
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground border border-border font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Other certs grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications
            .filter((c) => !c.featured)
            .map((cert) => (
              <div
                className="p-5 rounded-xl card-gradient border border-border hover:border-primary/30 hover:shadow-[0_0_25px_hsl(217_91%_60%/0.08)] transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <Award className="w-4 h-4 text-primary" />
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors text-sm">
                  {cert.title}
                </h3>
                <p className="text-primary/70 text-xs font-medium mb-2">{cert.issuer}</p>

                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>
                <p className="text-xs text-muted-foreground font-mono mb-4 truncate">
                </p>

                <div className="flex flex-wrap gap-1 mt-auto">
                  {cert.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-1.5 py-0.5 rounded bg-secondary text-muted-foreground font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

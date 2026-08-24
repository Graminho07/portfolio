import { ArrowDown, Github, Icon, Instagram, Linkedin, Mail, Terminal } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--blue-glow)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--blue-glow)/0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-up">
          <span className="gradient-text">Olá, eu sou</span>
          <br />
          <span className="text-foreground">Liara Graminho Victor</span>
        </h1>

        {/* Sub */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <Terminal className="w-5 h-5 text-primary" />
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            Full Stack Developer | Palestrante | Criadora de Conteúdo
          </p>
        </div>

        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Transformo ideias em produtos digitais incríveis. Apaixonada por código
          limpo, UX impecável e soluções que fazem a diferença.
        </p>

        {/* Actions */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#certificacoes"
            onClick={(e) => { e.preventDefault(); document.getElementById("certificacoes")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.5)] transition-all duration-300 text-sm"
          >
            Ver Certificações
          </a>
          <a
            href="#contato"
            onClick={(e) => { e.preventDefault(); document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3.5 rounded-xl border border-border text-foreground font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-sm"
          >
            Entre em contato
          </a>
        </div>

        {/* Socials */}
        <div
          className="flex items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: Github, href: "https://github.com/Graminho07", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/liara-graminho-victor/", label: "LinkedIn" },
            { icon: Instagram, href: "https://www.instagram.com/liara.dev/", label: "Instagram" },
            { icon: Mail, href: "mailto:liaragraminhovictor@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}

import { FolderOpen, ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "SaaS Dashboard",
    description:
      "Plataforma de analytics em tempo real com dashboards interativos, múltiplos workspaces e autenticação multi-tenant. Suporta mais de 10k usuários ativos.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    live: "https://exemplo.com",
    featured: true,
    stars: 128,
  },
  {
    title: "E-commerce API",
    description:
      "API REST robusta para e-commerce com gestão de produtos, pedidos, pagamentos via Stripe e notificações em tempo real com WebSockets.",
    tags: ["Node.js", "Express", "MongoDB", "Stripe", "WebSocket"],
    github: "https://github.com",
    live: "https://exemplo.com",
    featured: true,
    stars: 89,
  },
  {
    title: "DevBlog Platform",
    description:
      "Plataforma de blog para devs com markdown, syntax highlighting, tags, busca full-text e RSS feed. SEO otimizado.",
    tags: ["Next.js", "TypeScript", "Prisma", "PlanetScale"],
    github: "https://github.com",
    live: "https://exemplo.com",
    featured: false,
    stars: 54,
  },
  {
    title: "Task Manager CLI",
    description:
      "Ferramenta de linha de comando para gerenciar tarefas com suporte a projetos, tags, prioridades e relatórios em CSV.",
    tags: ["Python", "Click", "SQLite", "Rich"],
    github: "https://github.com",
    live: null,
    featured: false,
    stars: 72,
  },
  {
    title: "Chat em Tempo Real",
    description:
      "App de chat com salas, mensagens diretas, compartilhamento de arquivos e histórico persistente. Mobile-first.",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://exemplo.com",
    featured: false,
    stars: 43,
  },
  {
    title: "Open Source UI Kit",
    description:
      "Biblioteca de componentes React com design system próprio, dark/light mode, acessibilidade e Storybook docs.",
    tags: ["React", "TypeScript", "TailwindCSS", "Storybook"],
    github: "https://github.com",
    live: "https://exemplo.com",
    featured: false,
    stars: 201,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <FolderOpen className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono text-primary text-sm">04. projetos</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Featured */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="p-7 rounded-2xl card-gradient border border-border hover:border-primary/30 hover:shadow-[0_0_40px_hsl(217_91%_60%/0.1)] transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded font-mono">
                      destaque
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3" />
                      {project.stars}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="p-5 rounded-xl card-gradient border border-border hover:border-primary/30 hover:shadow-[0_0_25px_hsl(217_91%_60%/0.08)] transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <FolderOpen className="w-4 h-4 text-primary" />
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3" />
                      {project.stars}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-sm">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
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

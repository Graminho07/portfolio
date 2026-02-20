import { Zap } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React / React Native", level: 65 },
      { name: "TypeScript", level: 65 },
      { name: "TailwindCSS", level: 40 },
      { name: "Figma", level: 50 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", level: 70 },
      { name: "Node.js", level: 80 },
      { name: "Python", level: 50 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Banco de Dados",
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 65 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 30 },
      { name: "AWS (EC2, S3, RDS)", level: 5 },
      { name: "CI/CD (GitHub Actions)", level: 80 },
      { name: "Linux", level: 50 },
    ],
  },
];

const techIcons = [
  "React", "React Native", "TypeScript", "Node.js", "Next.js", "PostgreSQL",
  "Docker", "AWS", "MongoDB", "MySQL", "Java", "Spring Boot",
  "Python", "Git", "Figma", "TailwindCSS",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono text-primary text-sm">03. skills</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="font-bold text-lg text-foreground mb-6 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-primary" />
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-primary font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-blue-bright transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech pill cloud */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm font-mono mb-6">// tecnologias que uso</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techIcons.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl border border-border bg-secondary text-sm text-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-200 cursor-default font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

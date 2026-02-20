import { Mail, MessageSquare, Send, Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { sendEmailAction } from "@/actions/sendEmail";

const socials = [
  { icon: Github, label: "GitHub", handle: "@Graminho07", href: "https://github.com/Graminho07" },
  { icon: Linkedin, label: "LinkedIn", handle: "Liara Graminho Victor", href: "https://www.linkedin.com/in/liara-graminho-victor/" },
  { icon: Instagram, label: "Instagram", handle: "@liara.dev", href: "https://www.instagram.com/liara.dev/" },
  { icon: Mail, label: "Email", handle: "liaragraminhovictor@gmail.com", href: "mailto:liaragraminhovictor@gmail.com" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await sendEmailAction(form);
    
    if (result.success) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
    
    setLoading(false);
  };

  return (
    <section id="contato" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono text-primary text-sm">05. contato</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Vamos trabalhar{" "}
              <span className="gradient-blue-text">juntos?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Estou sempre aberta a novos projetos, oportunidades de colaboração
              ou apenas uma boa conversa sobre tecnologia. Me mande uma mensagem!
            </p>

            <div className="space-y-4">
              {socials.map(({ icon: Icon, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{label}</div>
                    <div className="text-muted-foreground text-sm font-mono">{handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seuemail@exemplo.com"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Olá! Gostaria de falar sobre..."
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.4)] transition-all duration-300 text-sm disabled:opacity-50"
              >
                {loading ? (
                  <>Enviando...</>
                ) : sent ? (
                  <>Mensagem enviada! ✓</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar mensagem
                  </>
                )}
              </button>
              {sent && (
                <p className="text-center text-primary text-sm animate-fade-in">
                  Obrigado pelo contato! Responderei em breve.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-muted-foreground text-sm">
          &lt;Dev/&gt; — Feito com 💙 e muito ☕
        </span>
        <span className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Liara. Todos os direitos reservados.
        </span>
      </div>
    </section>
  );
}

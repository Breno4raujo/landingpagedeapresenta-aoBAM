import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Github, Mail, Linkedin, ExternalLink, Code2, Sparkles, Rocket, Download, MapPin, GraduationCap, Target, Award, Briefcase } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import projTasks from "@/assets/proj-tasks.png";
import projStudents from "@/assets/proj-students.png";
import projHire from "@/assets/proj-hire.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const projects = [
  {
    title: "Task Manager",
    description: "Aplicação web full stack de gerenciamento de tarefas com atualizações dinâmicas via API, sem recarregar a página.",
    image: projTasks,
    tags: ["JavaScript", "Node.js", "Express", "API"],
    repo: "https://github.com/Breno4raujo/Task-manager",
    live: "https://api-tarefas-4slt.onrender.com/",
  },
  {
    title: "Gerenciador de Estudantes",
    description: "Programa em JavaScript que roda no terminal: cadastro de alunos, busca, cálculo de médias e gestão completa de notas.",
    image: projStudents,
    tags: ["JavaScript", "Node.js", "CLI"],
    repo: "https://github.com/Breno4raujo/Projeto-Gerenciador-de-Estudantes",
    live: null,
  },
  {
    title: "Quer me Contratar?",
    description: "Landing page interativa e descontraída que aborda empregabilidade de forma criativa — pura prática de HTML e CSS.",
    image: projHire,
    tags: ["HTML", "CSS", "Interativo"],
    repo: "https://github.com/Breno4raujo/Projeto-Quer-Me-Contratar-",
    live: "https://breno4raujo.github.io/Projeto-Quer-Me-Contratar-/",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground text-sm shadow-glow">BA</span>
            <span>Breno Araujo</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#projetos" className="hover:text-foreground transition-colors">Projetos</a>
            <a href="#curriculo" className="hover:text-foreground transition-colors">Currículo</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </div>
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Contratar <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-radial" />

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground mb-6">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Disponível para novas oportunidades
              </div>
              <h1
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Olá, sou <span className="text-gradient">Breno Araujo</span>
                <br />
                Desenvolvedor <span className="text-gradient">Full Stack</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Construo aplicações web modernas com JavaScript, React, Node.js e Express. Curioso, dedicado e motivado por desafios — em busca da primeira oportunidade para gerar impacto real em um time.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projetos"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
                >
                  Ver projetos <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/Breno_Araujo_Curriculo.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold hover:bg-card transition"
                >
                  <Download className="h-4 w-4" /> Baixar CV
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold hover:bg-card transition"
                >
                  <Mail className="h-4 w-4" /> Falar comigo
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Brasil · Remoto</div>
                <div className="flex items-center gap-2"><Code2 className="h-4 w-4" /> Full Stack JS</div>
                <div className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> 23 anos · ADS</div>
              </div>
            </div>

            {/* Code card */}
            <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
              <div className="relative glass rounded-2xl p-5 shadow-soft animate-float">
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="h-3 w-3 rounded-full bg-destructive/80" />
                  <span className="h-3 w-3 rounded-full bg-accent/80" />
                  <span className="h-3 w-3 rounded-full bg-primary/80" />
                  <span className="ml-3 text-xs text-muted-foreground">breno.dev.js</span>
                </div>
                <pre className="text-[13px] leading-relaxed text-muted-foreground overflow-x-auto">
{`const breno = {
  role: "Full Stack Developer",
  stack: ["React", "Node", "Express"],
  traits: ["curioso", "dedicado",
           "movido a desafios"],
  status: "open to work",
  hire: () => "vamos construir? 🚀",
};

console.log(breno.hire());`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 relative">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Sobre mim</SectionLabel>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight max-w-3xl" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Da curiosidade por <span className="text-gradient">games</span> ao propósito de criar soluções reais.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <JourneyCard
              icon={<Sparkles className="h-5 w-5" />}
              title="Início"
              text="Minha paixão por tecnologia começou cedo, com o primeiro contato com videogames — e a curiosidade de entender como tudo funcionava por trás."
            />
            <JourneyCard
              icon={<Code2 className="h-5 w-5" />}
              title="Aprendizado"
              text="Experiência prática com HTML, CSS, JavaScript, React, Node, Express, APIs e Git. Já entreguei projetos como Task Manager e Gerenciador de Estudantes."
            />
            <JourneyCard
              icon={<Rocket className="h-5 w-5" />}
              title="Atualidade"
              text="Formado em ADS e em curso intensivo Full Stack. Procurando minha primeira oportunidade para crescer, contribuir e entregar valor em um time."
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-radial opacity-50" />
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Stack & Ferramentas</SectionLabel>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Tecnologias que <span className="text-gradient">domino</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((s) => (
              <div
                key={s.name}
                className="glass rounded-xl p-5 flex flex-col items-center gap-3 hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                <img src={s.icon} alt={s.name} width={40} height={40} loading="lazy" className="h-10 w-10" />
                <span className="text-sm font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Projetos selecionados</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-3">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              O que eu já <span className="text-gradient">construí</span>
            </h2>
            <a
              href="https://github.com/Breno4raujo?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              Ver todos no GitHub <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group glass rounded-2xl overflow-hidden flex flex-col hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3 text-sm">
                    <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition">
                      <Github className="h-4 w-4" /> Código
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition">
                        <ExternalLink className="h-4 w-4" /> Live demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CURRÍCULO */}
      <section id="curriculo" className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-radial opacity-40" />
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Currículo</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-3">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Formação e <span className="text-gradient">objetivos</span>
            </h2>
            <a
              href="/Breno_Araujo_Curriculo.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              <Download className="h-4 w-4" /> Baixar CV em PDF
            </a>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                  <Target className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Objetivo profissional</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Atuar na área de tecnologia em busca da minha primeira oportunidade profissional para adquirir experiência prática, contribuir com soluções eficientes e evoluir continuamente como desenvolvedor. Tenho interesse em desenvolvimento de software, back-end, front-end e soluções tecnológicas em geral.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Resumo profissional</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Graduado em Análise e Desenvolvimento de Sistemas, com formação em andamento em Desenvolvimento Full Stack. Conhecimento prático em aplicações web e APIs com foco em JavaScript, Node.js e boas práticas. Facilidade de aprendizado, trabalho em equipe e vivência profissional que exige organização, responsabilidade e resolução de problemas.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8 md:col-span-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Formação acadêmica</h3>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="relative pl-5 border-l-2 border-primary/40">
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-gradient-primary shadow-glow" />
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold">Concluído · 2024</p>
                  <h4 className="mt-1 font-bold">Análise e Desenvolvimento de Sistemas</h4>
                  <p className="text-sm text-muted-foreground mt-1">Universidade Cruzeiro do Sul</p>
                </div>
                <div className="relative pl-5 border-l-2 border-primary/40">
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-gradient-primary shadow-glow animate-pulse" />
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold">Em andamento · Previsão 2027</p>
                  <h4 className="mt-1 font-bold">Formação Full Stack</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Programadores do Amanhã — JavaScript, Node.js, Express, React, Sequelize, MySQL, APIs REST e soft skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                  <Award className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Cursos & certificações</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Node.js — API REST com Express, MongoDB e Sequelize</li>
                <li>• JavaScript — POO, DOM, funções e bibliotecas com Node</li>
                <li>• React — desenvolvimento com JavaScript</li>
                <li>• HTML & CSS — Flexbox, responsividade e mobile-first</li>
                <li>• Swagger, Git/GitHub, HTTP, Python (introdução)</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                  <Briefcase className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Experiência profissional</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <p className="font-semibold">Auxiliar de Logística — Comercial Milano Brasil</p>
                  <p className="text-muted-foreground text-xs">12/2024 – 03/2025</p>
                </li>
                <li>
                  <p className="font-semibold">Auxiliar Administrativo (Jovem Aprendiz) — Concessionária Rodoviária JF–Rio</p>
                  <p className="text-muted-foreground text-xs">07/2023 – 10/2024</p>
                </li>
                <li>
                  <p className="font-semibold">Meio Oficial de Marceneiro — Integrato Indústria</p>
                  <p className="text-muted-foreground text-xs">02/2021 – 01/2023</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 relative">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative glass rounded-3xl p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-72 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
            <SectionLabel center>Vamos conversar</SectionLabel>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Pronto para entregar <span className="text-gradient">valor</span> ao seu time.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Se você é recrutador ou tech lead procurando alguém dedicado, curioso e ávido por crescer — vamos trocar uma ideia.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:breno4raujo@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
              >
                <Mail className="h-4 w-4" /> Enviar e-mail
              </a>
              <a
                href="https://github.com/Breno4raujo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold hover:bg-card transition"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/breno-araujo/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold hover:bg-card transition"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Breno Araujo — Full Stack Developer</p>
          <p>Feito com dedicação, café e muito JavaScript.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={center ? "flex justify-center" : ""}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
        <span className="h-px w-8 bg-primary/60" />
        {children}
      </span>
    </div>
  );
}

function JourneyCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

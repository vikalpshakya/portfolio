const projects = [
  {
    name: "Draw-Board AI",
    stack: ["Python", "REST", "ReactJS", "Gemini"],
    when: "2024",
    blurb:
      "Scalable RESTful backend handling concurrent image streams, routed to Google's Gemini API with rate-limit handling and clean frontend/backend separation. Handled 1000+ unique sessions in month one.",
    href: "https://github.com/vikalpshakya",
  },
  {
    name: "Rubik's Cube Solver",
    stack: ["C++", "IDA*", "OOP"],
    when: "2024",
    blurb:
      "Virtual 3×3 cube modeled across three OOP class hierarchies. Implemented Korf's IDA* heuristic search — sub-10s solves for 13-move scrambles; benchmarked BFS / DFS / IDDFS baselines.",
    href: "https://github.com/vikalpshakya",
  },
  {
    name: "Notification System",
    stack: ["Go", "RabbitMQ", "Resend", "Slack"],
    when: "2025",
    blurb:
      "Internal support-portal notification service shipped at NeverInstall. Non-blocking event-driven workflows with multi-channel delivery — 75% latency reduction.",
    href: "https://github.com/vikalpshakya",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-accent">03 — selected work</div>
        <h2 className="font-display text-4xl md:text-5xl mt-4 mb-16">Things I've built.</h2>

        <div className="grid gap-6">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block border border-border rounded-xl p-6 md:p-10 bg-card hover:border-accent transition-colors overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative grid md:grid-cols-[80px_1fr_auto] gap-6 items-start">
                <div className="font-mono text-xs text-muted-foreground">
                  /{String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{p.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-2 font-mono text-[11px]">
                    {p.stack.map((s) => (
                      <span key={s} className="px-2 py-1 rounded bg-muted text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="font-mono text-xs text-muted-foreground flex items-center gap-3">
                  <span>{p.when}</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

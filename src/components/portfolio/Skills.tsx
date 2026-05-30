const groups = [
  { title: "Languages", items: ["C++", "Go", "Python", "Java", "JavaScript", "TypeScript", "C"] },
  { title: "Backend", items: ["Node.js", "Express", "Django", "Go Fiber"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "DynamoDB"] },
  { title: "Systems", items: ["RabbitMQ", "Prometheus", "TimescaleDB", "Oracle Cloud", "Linux", "Git"] },
  { title: "Concepts", items: ["System Design", "Distributed Systems", "DSA", "API Design", "OOP", "DBMS", "Networks", "OS"] },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-accent">04 — toolkit</div>
        <h2 className="font-display text-4xl md:text-5xl mt-4 mb-16">What I reach for.</h2>

        <div className="grid md:grid-cols-2 gap-x-12">
          {groups.map((g) => (
            <div key={g.title} className="border-t border-border py-6 grid grid-cols-[140px_1fr] gap-6">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {g.title}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {g.items.map((it) => (
                  <span key={it} className="text-foreground">
                    {it}
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

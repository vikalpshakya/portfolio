const jobs = [
  {
    company: "NeverInstall",
    role: "Software Development Engineer Intern",
    when: "Dec 2025 — Present",
    where: "Bangalore, India",
    bullets: [
      "Designed a full-stack notification system in Go with async multi-channel delivery via Resend + Slack — cut dispatch latency by 75%.",
      "Built event-driven async pipelines with RabbitMQ, retries and dead-letter queues for VM lifecycle, storage attachment and teardown.",
      "Led observability across 6+ microservices with structured logging, distributed tracing, and a Prometheus + TimescaleDB metrics platform — 60% lower query latency, 30% lower cost.",
      "Diagnosed and resolved 10+ P0/P1 production incidents around VM boot, storage integrity and distributed-system stability.",
    ],
  },
  {
    company: "Coding Ninjas",
    role: "DSA Teaching Assistant",
    when: "Dec 2023 — Mar 2024",
    where: "Remote",
    bullets: [
      "Resolved 330+ technical queries with a 4.8/5 rating across 250+ students.",
      "Ran code reviews and guided debugging across C++, Java and Python.",
      "Designed stress tests to validate correctness and edge-case handling.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-accent">02 — experience</div>
        <h2 className="font-display text-4xl md:text-5xl mt-4 mb-16">Where I've shipped.</h2>

        <div className="space-y-16">
          {jobs.map((job) => (
            <article
              key={job.company}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 border-t border-border pt-10"
            >
              <div className="font-mono text-xs text-muted-foreground space-y-1">
                <div>{job.when}</div>
                <div>{job.where}</div>
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl">
                  {job.role} <span className="text-accent italic">@ {job.company}</span>
                </h3>
                <ul className="mt-6 space-y-3 text-muted-foreground leading-relaxed">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent font-mono text-xs mt-2">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
        <div>
          <div className="font-mono text-xs text-accent">01 — about</div>
          <h2 className="font-display text-4xl md:text-5xl mt-4">A short bio.</h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a software developer with a strong foundation in computer science fundamentals,
            data structures and algorithms, and system design. I enjoy designing backends that
            are <span className="text-foreground">asynchronous, observable, and resilient</span>.
          </p>
          <p>
            Currently I'm an SDE Intern at NeverInstall in Bangalore, where I build
            event-driven pipelines on RabbitMQ, ship Go microservices, and keep cloud-desktop
            infrastructure healthy through Prometheus and structured tracing.
          </p>
          <p>
            Outside of work I compete on CodeChef, Codeforces and LeetCode — over{" "}
            <span className="text-foreground">100 live contests</span> and counting.
          </p>
        </div>
      </div>
    </section>
  );
}

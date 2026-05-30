export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 px-6 md:px-12">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="font-mono text-xs text-muted-foreground mb-8 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          available for opportunities · bangalore, in
        </div>

        <h1 className="font-display text-[14vw] md:text-[9rem] leading-[0.95] text-balance">
          Vikalp
          <br />
          <span className="italic text-accent">Shakya.</span>
        </h1>

        <div className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
          Software engineer building <span className="text-foreground">scalable distributed systems</span> and
          event-driven microservices. Currently shipping infrastructure at{" "}
          <span className="text-foreground">NeverInstall</span>.
        </div>

        <div className="mt-12 flex flex-wrap gap-3 font-mono text-xs">
          <a
            href="#projects"
            className="px-4 py-2.5 rounded-md bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          >
            view selected work →
          </a>
          <a
            href="https://github.com/vikalpshakya"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-md border border-border hover:border-foreground transition-colors"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/vikalp-shakya"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-md border border-border hover:border-foreground transition-colors"
          >
            linkedin
          </a>
        </div>

      </div>
    </section>
  );
}

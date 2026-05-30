const links = [
  { label: "Email", value: "vikalp.shakya29@gmail.com", href: "mailto:vikalp.shakya29@gmail.com" },
  { label: "Phone", value: "+91 89194 57968", href: "tel:+918919457968" },
  { label: "GitHub", value: "github.com/vikalpshakya", href: "https://github.com/vikalpshakya" },
  { label: "LinkedIn", value: "linkedin.com/in/vikalp-shakya", href: "https://www.linkedin.com/in/vikalp-shakya" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-12 py-32 md:py-44 border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="font-mono text-xs text-accent">06 — contact</div>
        <h2 className="font-display text-5xl md:text-8xl mt-4 leading-[0.95] text-balance">
          Let's build something
          <br />
          <span className="italic text-accent">worth shipping.</span>
        </h2>

        <p className="mt-8 max-w-xl text-muted-foreground text-lg">
          Open to SDE roles and interesting backend / distributed-systems problems. The fastest
          way to reach me is email — I usually reply within a day.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden max-w-3xl">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group bg-background p-6 hover:bg-card transition-colors flex justify-between items-center"
            >
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {l.label}
                </div>
                <div className="mt-1 text-foreground group-hover:text-accent transition-colors">
                  {l.value}
                </div>
              </div>
              <span className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all">
                ↗
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 font-mono text-xs text-muted-foreground flex items-center gap-2">
          <span className="text-accent">$</span> echo "thanks for scrolling"
          <span className="inline-block w-2 h-4 bg-accent animate-blink" />
        </div>
      </div>
    </section>
  );
}

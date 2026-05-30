const wins = [
  { rank: "Rank 44", title: "CodeChef Starters 122", detail: "among 30,000+ participants" },
  { rank: "Top 1000", title: "LeetCode Biweekly 165", detail: "among 30,000+ participants" },
  { rank: "Top 2000", title: "Codeforces Round 928", detail: "among 35,000+ participants" },
  { rank: "1300+", title: "Problems solved", detail: "across competitive platforms" },
  { rank: "100+", title: "Live contests", detail: "attended across platforms" },
  { rank: "Cert.", title: "Generative AI with LLMs", detail: "Coursera" },
];

export function Achievements() {
  return (
    <section id="achievements" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-accent">05 — receipts</div>
        <h2 className="font-display text-4xl md:text-5xl mt-4 mb-16">Achievements.</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {wins.map((w) => (
            <div key={w.title} className="bg-background p-8 hover:bg-card transition-colors">
              <div className="font-display text-3xl text-accent">{w.rank}</div>
              <div className="mt-3 text-foreground">{w.title}</div>
              <div className="mt-1 text-sm text-muted-foreground font-mono">{w.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

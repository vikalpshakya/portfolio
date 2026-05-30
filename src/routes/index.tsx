import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Nav } from "@/components/portfolio/Nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vikalp Shakya — Software Engineer" },
      { name: "description", content: "Software engineer building scalable distributed systems and event-driven microservices. 1300+ problems solved. Currently SDE Intern at NeverInstall." },
      { property: "og:title", content: "Vikalp Shakya — Software Engineer" },
      { property: "og:description", content: "Software engineer building scalable distributed systems and event-driven microservices." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t border-border py-10 px-6 md:px-12 text-sm text-muted-foreground font-mono flex flex-col md:flex-row justify-between gap-4">
        <span>© 2026 Vikalp Shakya. Built with intent.</span>
        <span>Bangalore, India · <span className="text-accent">● available</span></span>
      </footer>
    </div>
  );
}

import { projects } from "@/content/projects";

export default function Home() {
  return (
    <main>
      <nav aria-label="Hauptnavigation">
        <a className="wordmark" href="#top">MARC</a>
        <a href="#experimente">Experimente</a>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">UX DESIGNER · AI EXPLORER</p>
        <h1>Ich gestalte verständliche Produkte für komplexe Systeme.</h1>
        <p className="intro">Portfolio-Draft: Ersetze diesen Text, deine Links und Projektbilder mit den Inhalten aus deinem Figma-Entwurf.</p>
        <a className="button" href="mailto:hello@example.com">Kontakt aufnehmen</a>
      </section>

      <section id="experimente" aria-labelledby="experimente-title">
        <div className="section-heading">
          <p className="eyebrow">LAB</p>
          <h2 id="experimente-title">Ausgewählte Experimente</h2>
          <p>Eigenständige Prototypen und Forschungsansätze — jedes Projekt bleibt technisch unabhängig, wird hier aber sichtbar kuratiert.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <p className="project-meta">{project.kind} · {project.year}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tags" aria-label="Themen">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a href={project.href} target="_blank" rel="noreferrer">Projekt ansehen <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

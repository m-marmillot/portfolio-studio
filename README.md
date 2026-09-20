# Marc — UX/AI Portfolio

Die zentrale, statische Portfolio-Website für ausgewählte UX- und AI-Arbeiten. Sie läuft auf GitHub Pages und verlinkt auf unabhängige Experiment-Repositories.

## Warum diese Struktur?

```
GitHub-Account oder Organisation
├── marc-portfolio/             ← diese Website (redaktionelle Auswahl)
├── conversation-canvas/        ← eigenständiges Experiment + eigene Demo
├── prompt-atlas/               ← eigenständiges Experiment + eigene Demo
└── agent-trust-notes/          ← Forschung, Notizen oder Prototyp
```

Die Website enthält keine Experiment-Quellcodes. Sie zeigt nur die Arbeiten, die du präsentieren möchtest. Das sorgt für eine klare Geschichte im Portfolio und dafür, dass Experimente frei wachsen dürfen.

## Lokaler Start

1. Installiere Node 24 (die gewünschte Version steht in `.nvmrc`).
2. Installiere die Abhängigkeiten mit `npm install`. Dadurch wird auch die Sperrdatei `package-lock.json` erzeugt.
3. Starte die Seite mit `npm run dev` und öffne `http://localhost:3000`.
4. Prüfe die veröffentlichbare Variante mit `npm run build`. Die fertige, statische Website liegt danach in `out/`.

## Erstes Personalisieren

1. Ersetze `USERNAME` und die Beispiel-Projekte in `src/content/projects.ts`.
2. Passe Name, Kontaktadresse und Texte in `src/app/page.tsx` an.
3. Übertrage Farben und Assets aus Figma mit [dem Figma-Handoff](docs/FIGMA-HANDOFF.md).
4. Lies [die Experiment-Regeln](docs/EXPERIMENTS.md), bevor du das erste Projekt anlegst.

## Auf GitHub veröffentlichen

1. Erstelle ein neues GitHub-Repository, zum Beispiel `marc-portfolio`, und pushe diesen Ordner auf den Branch `main`.
2. Öffne im Repository **Settings → Pages** und wähle bei *Build and deployment* die Quelle **GitHub Actions**.
3. Der Workflow in `.github/workflows/deploy-pages.yml` baut die Seite bei jedem Push auf `main` und veröffentlicht den Ordner `out/`.
4. Beim Repo `marc-portfolio` lautet die Adresse `https://USERNAME.github.io/marc-portfolio/`. Wenn das Repo stattdessen `USERNAME.github.io` heißt, wird es automatisch direkt unter `https://USERNAME.github.io/` veröffentlicht.

## Architektur in Kürze

- `src/app/`: Seiten, Layout und globale Gestaltung (Next.js App Router).
- `src/content/projects.ts`: kuratierte Metadaten für externe Experimente.
- `public/`: Bilder, Icons und andere unveränderte statische Dateien.
- `docs/`: Arbeitsregeln und Figma-Übergabe, nicht Teil der Website.
- `.github/workflows/`: automatisches Deployment.

GitHub Pages kann nur statische Dateien ausliefern. Deshalb nutzt die App `output: "export"`; serverseitige Next.js-Funktionen wie API-Routen oder Server Actions gehören nicht in dieses Repository. Für diese Fälle bleibt das Experiment in seinem eigenen Repository und bekommt ein passendes Hosting.

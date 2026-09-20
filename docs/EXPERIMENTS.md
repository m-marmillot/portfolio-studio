# Experimente: Struktur und Veröffentlichungsregel

Jedes Experiment bekommt ein eigenes Repository. Das schützt die Portfolio-Seite vor technischen Abhängigkeiten und erlaubt jedem Prototypen seinen passenden Stack, eigene Releases und eine eigene Git-Historie.

## Namensschema

Nutze kurze, lesbare Namen mit Bindestrichen, zum Beispiel `conversation-canvas` oder `prompt-atlas`. Alle Repositories liegen im selben GitHub-Account oder in einer GitHub-Organisation wie `marc-lab`.

## Mindeststandard pro Experiment

1. `README.md`: Problem, Zielgruppe, Status, Screenshots und lokaler Start.
2. `LICENSE`: Wähle bewusst — MIT für offene Experimente, sonst zunächst `All rights reserved`.
3. `.gitignore` und keine Schlüssel im Repository. Lokale Werte gehören in `.env.local`.
4. Eine Demo-URL, wenn das Experiment vorzeigbar ist. GitHub Pages eignet sich für statische Demos; andere Stacks können separat deployt werden.

## Aufnahme ins Portfolio

Sobald ein Experiment einen verständlichen README und eine stabile URL hat, füge einen Eintrag in `src/content/projects.ts` hinzu. Das Portfolio ist damit deine redaktionelle Auswahl, nicht ein ungefilterter Feed aller Repositories.

## Wann ein Monorepo sinnvoll ist

Nur wenn mehrere Experimente denselben Code, das gleiche Deployment und einen gemeinsamen Release-Zyklus teilen. Dann verwende ein eigenes `marc-lab`-Monorepo mit `apps/` für Demos und `packages/` für geteilte Bausteine. Die Portfolio-Website bleibt trotzdem ein separates Repository.

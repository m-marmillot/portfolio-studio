# Figma → Portfolio: erster Umsetzungsdurchgang

1. **Inhalte festziehen:** Ergänze im Figma-Draft für jeden Bereich einen echten Titel, Kurztext, Link und Bild. Ein Design ohne finale Inhalte täuscht oft über Abstandsprobleme hinweg.
2. **Assets exportieren:** Lege Logos, Bilder und Social-Preview unter `public/` ab. Verwende sprechende Namen wie `conversation-canvas-cover.webp`.
3. **Design-Tokens übertragen:** Ersetze die vier Werte am Anfang von `src/app/globals.css` mit Farben, Schriftfamilien und Abständen aus Figma. So bleibt der Look konsistent, auch wenn neue Seiten dazukommen.
4. **Komponenten ableiten:** Wiederkehrende Figma-Bausteine wandern nach `src/components/`; seitenspezifische Abschnitte bleiben zunächst in der jeweiligen `page.tsx`. Erst abstrahieren, wenn etwas mindestens zweimal vorkommt.
5. **Mobil prüfen:** Kontrolliere nach jedem Abschnitt eine schmale Bildschirmbreite. Das Grundgerüst schaltet die Projektkarten dort bereits auf eine Spalte.

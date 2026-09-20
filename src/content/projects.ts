export type Project = {
  slug: string;
  title: string;
  summary: string;
  kind: "Prototype" | "Research" | "Tool";
  year: string;
  tags: string[];
  href: string;
};

// This is the editorial index for external experiment repositories.
// Add a project here once it has a readable README and a stable URL.
export const projects: Project[] = [
  {
    slug: "conversation-canvas",
    title: "Conversation Canvas",
    summary: "Ein explorativer Prototyp für die visuelle Strukturierung von KI-gestützten Gesprächen.",
    kind: "Prototype",
    year: "2026",
    tags: ["AI", "Interaction", "Prototype"],
    href: "https://github.com/USERNAME/conversation-canvas",
  },
  {
    slug: "agent-trust-notes",
    title: "Agent Trust Notes",
    summary: "Laufende Forschung darüber, wie sich Zustände, Unsicherheit und Entscheidungen von KI-Agenten verständlich erklären lassen.",
    kind: "Research",
    year: "2026",
    tags: ["AI UX", "Trust", "Research"],
    href: "https://github.com/USERNAME/agent-trust-notes",
  },
  {
    slug: "prompt-atlas",
    title: "Prompt Atlas",
    summary: "Kleines Werkzeug zum Sammeln, Testen und Vergleichen von Prompt-Strategien.",
    kind: "Tool",
    year: "2026",
    tags: ["Tools", "LLM", "Workflow"],
    href: "https://github.com/USERNAME/prompt-atlas",
  },
];

export interface DocsLink {
  title: string;
  href: string;
}

export interface DocsGroup {
  title: string;
  links: DocsLink[];
}

export const docsNav: DocsGroup[] = [
  {
    title: "Getting started",
    links: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick start", href: "/docs/quickstart" },
      { title: "Self-hosting", href: "/docs/self-hosting" },
      { title: "Configuration", href: "/docs/configuration" },
    ],
  },
  {
    title: "Guides",
    links: [
      { title: "Invoicing", href: "/docs/invoicing" },
      { title: "Projects", href: "/docs/projects" },
      { title: "Client email", href: "/docs/email" },
    ],
  },
  {
    title: "Reference",
    links: [
      { title: "Docker & CLI", href: "/docs/docker-cli" },
      { title: "Environment variables", href: "/docs/environment-variables" },
      { title: "Backups", href: "/docs/backups" },
    ],
  },
];

// Flattened, in sidebar order — used for prev/next links.
export const docsFlat: DocsLink[] = docsNav.flatMap((g) => g.links);

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
];

// Flattened, in sidebar order — used for prev/next links.
export const docsFlat: DocsLink[] = docsNav.flatMap((g) => g.links);

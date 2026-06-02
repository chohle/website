import type { APIRoute } from "astro";

// Serve a sitemap at the conventional /sitemap.xml. @astrojs/sitemap emits the
// full URL list as sitemap-0.xml (indexed by sitemap-index.xml); this endpoint
// exposes that under the name crawlers look for first.
export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = (site?.href ?? "https://chohle.ch/").replace(/\/$/, "");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${origin}/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

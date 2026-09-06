import type { MetadataRoute } from "next";
import { ALL_ROUTES, ROUTES, SITE_URL } from "@/lib/routes";

const NOINDEX = new Set([ROUTES.mentionsLegales, ROUTES.cgv]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ALL_ROUTES.filter((route) => !NOINDEX.has(route)).map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/site-web-") ? 0.7 : 0.8,
  }));
}

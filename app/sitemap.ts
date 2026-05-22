import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}

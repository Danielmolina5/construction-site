import type { Metadata } from "next";

const SITE = {
  name: "GAT Construction Management, Inc.",
  shortName: "GAT CM",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gatconstructionfl.com",
  description:
    "GAT Construction Management — Florida-based construction project management. Strategic leadership, business development, and end-to-end delivery for commercial, healthcare, and industrial projects.",
  locale: "en_US",
  twitter: "@gatconstruction",
};

export const siteConfig = SITE;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Elite Construction Project Management`,
    template: `%s — ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "construction project management",
    "construction manager",
    "commercial construction",
    "healthcare construction",
    "industrial construction",
    "owner's representative",
    "general contracting",
    "project planning",
    "site supervision",
    "budget management",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Elite Construction Project Management`,
    description: SITE.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    creator: SITE.twitter,
    title: `${SITE.name} — Elite Construction Project Management`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/favicon.svg`,
        sameAs: [
          "https://www.linkedin.com/company/gat-construction-management",
          "https://www.instagram.com/gatconstruction",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+1-561-657-3095",
            email: "gatconstructionfl@gmail.com",
            contactType: "customer service",
            areaServed: "US",
            availableLanguage: ["English", "Spanish"],
          },
        ],
      },
      {
        "@type": "GeneralContractor",
        "@id": `${SITE.url}/#contractor`,
        name: SITE.name,
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
        url: SITE.url,
        telephone: "+1-561-657-3095",
        email: "gatconstructionfl@gmail.com",
        priceRange: "$$$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "West Palm Beach",
          addressRegion: "FL",
          addressCountry: "US",
        },
        areaServed: ["Florida", "United States"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}/#organization` },
      },
    ],
  };
}
